package com.project.ecofurniture.model.dto.auth.response;

import lombok.*;

/**
 * ======================================
 * FileName : CustomerRes
 * Author : DH.Lee
 * Date : 2023-11-27
 * Note : UserRes DTO
 * 1) UserRes 리액트로 전송될 결과 클래스(웹토큰 과 인증정보가 있음 : 로컬스토리지에 user 키로 저장됨)
 * ======================================
 */
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class UserRes {

    private String accessToken; // 웹토큰

    private String tokenType = "Bearer"; // 웹토큰 타입

    private String email;     // 이메일ID

    private String username;  // 유저명

    private String codeName;  // 권한명

    public UserRes(String accessToken, String email, String username, String codeName) {
        this.accessToken = accessToken;
        this.email = email;
        this.username = username;
        this.codeName = codeName;
    }
}
