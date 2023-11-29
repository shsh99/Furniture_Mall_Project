package com.project.ecofurniture.model.entity.auth;

import com.project.ecofurniture.model.common.BaseTimeEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * ======================================
 * FileName : User
 * Author : DH.Lee
 * Date : 2023-11-27
 * Note :
 * 1) 유저 엔티티 기본키 : email(로그인 id)
 * ======================================
 */
@Entity
@Table(name = "TB_USER")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User extends BaseTimeEntity {
    // 속성 : TB_USER
    @Id
    private String email; // 기본키

    private String password; // 암호

    private String username; // 유저명

    private String codeName; // 권한코드명(속성) 속성 : ROLE_USER, ROLE_ADMIN

    private String birthday;

    private String gender;

    // 생성자 : 3개짜리(codeName 제외)
    public User(String email, String password, String username, String birthday, String gender) {

        this.email = email;

        this.password = password;

        this.username = username;

        this.birthday = birthday;

        this.gender = gender;
    }
}