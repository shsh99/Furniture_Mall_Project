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
public class ChangePwReq extends UserCheckInfoReq {
    private String password;
    private String passwordCk;
}
