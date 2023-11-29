package com.project.ecofurniture.model.dto.auth.request;

import lombok.*;

/**
 * ======================================
 * FileName : UserReq
 * Author : DH.Lee
 * Date : 2023-11-27
 * Note : 클라이언트 요청 매개변수값을 전달받을 클래스 DTO
 * 1)
 * ======================================
 */
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class UserReq {

    private String email;

    private String password;

    private String username;

    private String codeName; // 권한명

    private String birthday;

    private String gender;

    private boolean changePwd; // 프론트에서 패스워드 수정 했다는것을 나타내는 옵션(true, false)
}
