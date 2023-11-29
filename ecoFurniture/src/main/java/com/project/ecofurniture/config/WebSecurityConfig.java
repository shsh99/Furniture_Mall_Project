package com.project.ecofurniture.config;

import com.project.ecofurniture.security.jwt.AuthEntryPointJwt;
import com.project.ecofurniture.security.jwt.AuthTokenFilter;
import com.project.ecofurniture.security.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * ======================================
 * FileName : WebSecurityConfig
 * Author : DH.Lee
 * Date : 2023-11-25
 * Note :
 * 1) Spring Security 설정 파일
 * ======================================
 */

// spring security 라이브러리를 설치하면
// 기본적으로 모든 url 에 대해 인증을 진행함
// 내부적으로 사용하고 있는 로그인페이지로 자동 리다이렉트함
// 기본 user id : user , pwd: 콘솔에 보임
// application.properties 파일에 user/pwd 설정 가능
// 아래 클래스에서 인증/접근권한을 설정할 수 있음
@Configuration
// securedEnabled, prePostEnabled, jsr250Enabled 3개의 옵션이 존재(활성화 @)
// 1.securedEnabled
//  @Secured 애노테이션을 사용하여 인가 처리를 하고 싶을때 사용하는 옵션이다.
//  단순 권한체크, spring 에서만 가능
//  기본값은 false
// 2.prePostEnabled
//  @PreAuthorize, @PostAuthorize 애노테이션을 사용하여 인가 처리를 하고 싶을때 사용하는 옵션이다.
//  다양하고 유연하게 권한체크 가능, 유연한 권한체크를 위한 el 언어 제공 : 예) 권한문자열이 140 이상일때만 통과 등
//  기본값은 false
// 3.jsr250Enabled
//  @RolesAllowed 애노테이션을 사용하여 인가 처리를 하고 싶을때 사용하는 옵션이다.
//  단순 권한체크, java 사용하는 곳은 모두 가능
//  기본값은 false
@EnableGlobalMethodSecurity(
        // securedEnabled = true,
        // jsr250Enabled = true,
        prePostEnabled = true)
public class WebSecurityConfig { // extends WebSecurityConfigurerAdapter {
    @Autowired
    UserDetailsServiceImpl userDetailsService;  // DB 조회 함수 객체

    @Autowired
    private AuthEntryPointJwt unauthorizedHandler; // 비인증/권한체크 예외처리 객체

    //  JWT 토큰 필터 객체 생성
    @Bean
    public AuthTokenFilter authenticationJwtTokenFilter() {
        return new AuthTokenFilter();
    }

    //  @Override
//  public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
//    authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
//  }
    //  DB 에서 가져온 정보와 input 된 정보를 비교하는 함수
    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        //  db에서 가져온 정보와 리액트에서 전송한 유저 정보를 비교하는 객체
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();

        authProvider.setUserDetailsService(userDetailsService); // DB 유저 조회 함수 객체
        authProvider.setPasswordEncoder(passwordEncoder()); // 암호 적용된 페스워드

        return authProvider;
    }

    //  @Bean
    //  @Override
    //  public AuthenticationManager authenticationManagerBean() throws Exception {
    //    return super.authenticationManagerBean();
    //  }

    //  AuthenticationManager 를 클래스 외부에서 사용하기 위해
//  아래 함수 정의 않하면 @Autodwired 로 가져올 때 에러가 발생할 수 있음
//  다른 클래스(객체)에서 AuthenticationManager 사용하고자 할때 @Autowired 로 객체 사용가능해서 편의성이 향상됨
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    //  패스워드 암호화 함수
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /*
     * 스프링 시큐리티 룰을 무시하게 하는 Url 규칙(여기 등록하면 규칙 적용하지 않음)
     */
    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().antMatchers("/js/**", "/images/**", "/css/**");
    }

    //    TODO: 스프링 시큐리티 규칙을 무시하게 하는 url 규칙(여기 등록하면 규칙 적용하지 않음)
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.cors()
                .and(). // 연결
                csrf().disable() // csrf(해킹공격: 쿠키) 보안 비활성화
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and() // 인증 예외처리는 AuthEntryPointJwt
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and() // 세션안쓰고(stateful) JWT 사용 예정
                .authorizeRequests().antMatchers("/api/auth/**").permitAll() // TODO: 4) 이 url 은 모든 사용자 접근 허용
                .antMatchers("/api/admin/**").hasRole("ADMIN") // TODO: 5) admin 메뉴는 ROLE_ADMIN 만 가능
                .antMatchers("/api/**").permitAll() // TODO: 6) 이 url 은 모든 사용자 접근 허용
                .anyRequest().authenticated(); // TODO: 7) 그외 url은 모든 사용자, 모든 접속에 대해서 인증이 필요하다는 걸 의미
        http.authenticationProvider(authenticationProvider()); // DB와 입력값(id, pwd) 비교

//      TODO: 웹토큰 필터 끼워넣기 : http.addFilterBefore(필터_1, 필터_2) : 필터_2 앞에 필터_1을 끼어넣기
        //    UsernamePasswordAuthenticationFilter → username, password를 쓰는 form기반 인증을 처리하는 필터.
        //            AuthenticationManager를 통한 인증 실행
        //    성공하면, Authentication 객체를 SecurityContext에(홀더) 저장 후 AuthenticationSuccessHandler 실행
        //    실패하면 AuthenticationFailureHandler 실행
        http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class); // JWT 토큰 필터 적용

        return http.build();
    }
}
