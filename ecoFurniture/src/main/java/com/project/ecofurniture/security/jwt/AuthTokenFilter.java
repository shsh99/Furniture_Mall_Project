package com.project.ecofurniture.security.jwt;

import com.project.ecofurniture.security.services.UserDetailsServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * ======================================
 * FileName : AuthTokenFilter
 * Author : DH.Lee
 * Date : 2023-11-23
 * Note :
 * 1) JWT 토큰 인증을 위한 필터
 * - 스프링에 기본적으로 없으므로 만들어 주어야함 ( 기본 : 세션 필터 )
 * ======================================
 */

// JWT 토큰 인증을 위한 필터 , 스프링에 기본적으로 없으므로 만들어 주어야함 ( 기본 : 세션 필터 )
// OncePerRequestFilter : 요청 당 반드시 한번만 인증/인가 로직 실행하게 보장함
// 예) 요청에 대해 인증/권한체크 후(서브 요청 1) 특정 url로 리다이렉트할때(서브 요청 2) 보통은 인증/권한체크가 2번 일어남 이때
//     마지막은 불필요하므로 한번만 인증/권한체크가 일어나게 보장하게 만들어주는 인터페이스
@Slf4j
public class AuthTokenFilter extends OncePerRequestFilter {
    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

//  private static final Logger logger = LoggerFactory.getLogger(AuthTokenFilter.class);

    //  Json Web Token 필터 만들어 SecurityContextHolder 에 새로운 JWT 필터 저장
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        try {
//      웹토큰 받아서 문자열로 변환
            String jwt = parseJwt(request);
//      1. 웹토큰 유효성 체크해서
//      2. 유효하면 DB에서 유저 있는 지 조회
//      3. 조회된 유저를 인증된 유저로 해서 홀더에 넣음
            if (jwt != null && jwtUtils.validateJwtToken(jwt)) {
//        웹토큰에서 유저 id 꺼냄
                String email = jwtUtils.getUserNameFromJwtToken(jwt);

//        유저 id로 db 조회해서 userDetails에 넣음
                UserDetails userDetails = userDetailsService.loadUserByUsername(email);
//      인증된 객체로 반환 : new UsernamePasswordAuthenticationToken() 매개변수 3개짜리 생성자 효출하면 강제 인증 성공 authenticated = true 로 설정됨
                UsernamePasswordAuthenticationToken authentication =
                        new UsernamePasswordAuthenticationToken(
                                userDetails,
                                null,
                                userDetails.getAuthorities());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

//        인증된 authentication 객체를 홀더에 넣어둠
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } catch (Exception e) {
            logger.error("Cannot set user authentication: {}", e);
        }

//    필터체인으로 연결하여 줍니다.
//    체인에 필터를 실행하고 체인의 가장 마지막에는 클라이언트가 요청한 최종 자원이 위치
        filterChain.doFilter(request, response);  // 필터 실행
    }

    //  네트웍으로 전송된 헤더 데이터에 "Bearer" 있고
//  "Authorization" 다음 문자열이 있으면 7부터 헤더의 길이만큼 잘라서 리턴함
    private String parseJwt(HttpServletRequest request) {
        String headerAuth = request.getHeader("Authorization");

        if (StringUtils.hasText(headerAuth) && headerAuth.startsWith("Bearer ")) {
            return headerAuth.substring(7, headerAuth.length());
        }

        return null;
    }
} // end of class