package com.project.ecofurniture.security.jwt;

import com.project.ecofurniture.security.services.UserDetailsImpl;
import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

/**
 * ======================================
 * FileName : JwtUtils
 * Author : DH.Lee
 * Date : 2023-11-23
 * Note :
 * 1) JwtUtils
 * ======================================
 */
@Slf4j
@Component
public class JwtUtils {
//  private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

    @Value("${simpleDms.app.jwtSecret}")
    private String jwtSecret;

    @Value("${simpleDms.app.jwtExpirationMs}")
    private int jwtExpirationMs;

    //  JWT 토큰 만들기
    public String generateJwtToken(Authentication authentication) {

        UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();

//    Json Web Token 구조 : 헤더(header).내용(payload).서명(signature)
//    헤더 : 토큰타입, 알고리즘
//    내용 : 데이터(subject(주체(이름))), 토큰발급대상(issuedAt), 만료기간(expiration), 토큰수령자
//    서명 : Jwts.builder().signWith(암호화알고리즘, 비밀키값)
//    생성 : Jwts.builder().compact()
        return Jwts.builder()
                .setSubject((userPrincipal.getEmail()))
                .setIssuedAt(new Date())
//            만료일자 적용
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .signWith(SignatureAlgorithm.HS512, jwtSecret) // 암호화 적용 서명
                .compact(); // 토큰 생성
    }

    //  JWT 토큰에서 유저명 꺼내기
    public String getUserNameFromJwtToken(String token) {
//    웹토큰의 비밀키 + 토큰명을 적용해 body 안의 subject(주체(이름))에 접근해서 꺼냄
        return Jwts.parser()
                .setSigningKey(jwtSecret)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    //  JWT 웹토큰 유효성 체크
//  디지털 서명이 위조 또는 훼손되었는지 확인하는 함수
    public boolean validateJwtToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
            return true;
        } catch (SignatureException e) {
            log.error("Invalid JWT signature: {}", e.getMessage());
        } catch (MalformedJwtException e) {
            log.error("Invalid JWT token: {}", e.getMessage());
        } catch (ExpiredJwtException e) {
            log.error("JWT token is expired: {}", e.getMessage());
        } catch (UnsupportedJwtException e) {
            log.error("JWT token is unsupported: {}", e.getMessage());
        } catch (IllegalArgumentException e) {
            log.error("JWT claims string is empty: {}", e.getMessage());
        }

        return false;
    }
} // end of class