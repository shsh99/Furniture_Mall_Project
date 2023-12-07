package com.project.ecofurniture.security.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * ======================================
 * FileName : AuthEntryPointJwt
 * Author : DH.Lee
 * Date : 2023-11-23
 * Note :
 * 1) 인증/인가가 되지않은 유저가 요청을 했을때 동작하는 클래스
 * 2) REST API 이므로 MAP 자료구조를 body에 담아 클라이언트로 전송
 * ======================================
 */

// 인증/인가가 되지않은 유저가 요청을 했을때 동작하는 클래스
// REST API 이므로 MAP 자료구조를 body에 담아 클라이언트로 전송
@Slf4j
@Component
public class AuthEntryPointJwt implements AuthenticationEntryPoint {

//  private static final Logger logger = LoggerFactory.getLogger(AuthEntryPointJwt.class);

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException)
            throws IOException, ServletException {
        log.error("Unauthorized error: {}", authException.getMessage());

        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

        final Map<String, Object> body = new HashMap<>();
        body.put("status", HttpServletResponse.SC_UNAUTHORIZED);
        body.put("error", "Unauthorized");
        body.put("message", authException.getMessage());
        body.put("path", request.getServletPath());

//    잭슨 라이브러리
//    mapper.writeValue(네트웍(파일 등), 객체) : 객체를 네트웍으로 전송
        final ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(response.getOutputStream(), body);
    }

} // end of class
