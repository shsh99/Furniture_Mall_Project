package com.project.ecofurniture.model.entity.auth;

import com.project.ecofurniture.model.common.BaseTimeEntity;
import com.project.ecofurniture.model.entity.shop.like.Like;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="TB_USER")

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@DynamicUpdate
// soft delete
@Where(clause = "DELETE_YN = 'N'")
@SQLDelete(sql = "UPDATE TB_USER SET DELETE_YN = 'Y', UPDATE_DATE=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE EMAIL = ?")
public class User extends BaseTimeEntity {

    @Id
    @Column(name = "EMAIL")
    private String email;

    @Column(name = "NAME")
    private String name;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "PHONE")
    private String phone;

    @Column(name = "GENDER")
    private String gender;

    @Column(name = "BIRTHDAY")
    private String birthday;

    @Column(name = "ADDRESS")
    private String address;

    @Column(name = "CODE_NAME")
    private String codeName;

    @Column(name = "POINT")
    private String point;



    @OneToMany(mappedBy = "user")
    private List<Like> likes = new ArrayList<>();



}
