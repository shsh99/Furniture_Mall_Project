package com.project.ecofurniture.security.services;

import com.project.ecofurniture.model.entity.auth.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


import java.util.Collection;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

/**
 * ======================================
 * FileName : UserDetailsImpl
 * Author : DH.Lee
 * Date : 2023-11-27
 * Note :
 * 1) Spring Security 의 UserDetails
 * 인터페이스를 구현한 사용자 상세 정보 클래스로,
 * 사용자의 인증과 권한 정보
 * ======================================
 */


// 아래 @Override 이 부분이 인터페이스에서 정의한 함수로
// email 은 개발자가 추가한 정보이고,
// 나머지 속성은 Spring Security에서 제공한 속성/함수 정보임
public class UserDetailsImpl implements UserDetails {

    private static final long serialVersionUID = 1L;

    private String username; // TODO: Spring Security

    private String email; // TODO: 개발자 추가 속성

    // json 역직렬화 시 대상 속성 무시
    @JsonIgnore
    private String password; // TODO: Spring Security

    //  계정이 갖고 있는 권한 목록을 저장하는 속성
    private GrantedAuthority authority; // TODO: Spring Security

    public UserDetailsImpl(String email, String password, String username, GrantedAuthority authority) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.authority = authority;
    }

    public static UserDetailsImpl build(User user) {
//    role.getName().name() : 롤 정보 ( ROLE_USER 등 )
//    권한 생성은 : new SimpleGrantedAuthority(권한문자열) 생성자를 호출 해서 생성
        GrantedAuthority authority = new SimpleGrantedAuthority(user.getCodeName());

        return new UserDetailsImpl(
                user.getEmail(),
                user.getPassword(),
                user.getUsername(),
                authority);
    }

    //    권한을 스프링 시큐리티의 권한 배열로 만들기
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        Set<GrantedAuthority> set = new HashSet<>();

        set.add(authority);

        return set;
    }

    //  계정이 갖고 있는 권한을 리턴하는 함수
    public GrantedAuthority getAuthority() {
        return authority;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    //  계정의 이름을 리턴 (주로 로그인 ID가 사용됨)
    @Override
    public String getUsername() {
        return username;
    }

    //  계정이 만료되지 않았는지를 리턴( true 이면 만료되지 않았음을 의미 )
    //  아래는 만료 체크가 필요없어서 항상 true 를 리턴하게 되어 있음
    //  만약 필요하다면 DB에서 만료여부 컬럼을 관리하고 그 정보를 쿼리해서 사용하면 됨
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    //  계정이 잠겨있지 않은지를 리턴( true 이면 잠겨있지 않음을 의미 )
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    //  계정의 패스워드(Credential) 가 만료되지 않는지를 리턴( true 이면 패스워드가 만료되지 않음을 의미 )
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    //  계정이 사용 가능한 계정인지를 리턴( true 이면 사용 가능한 계정을 의미 )
    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        UserDetailsImpl userDto = (UserDetailsImpl) o;
        return Objects.equals(email, userDto.email);
    }
}

