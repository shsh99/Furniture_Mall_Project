package com.project.ecofurniture.model.entity.auth;

import com.project.ecofurniture.model.common.BaseTimeEntity;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

@Entity
@Table(name="TB_SHOP_CUSTOMERS")

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
@SQLDelete(sql = "UPDATE TB_SHOP_CUSTOMERS SET DELETE_YN = 'Y', UPDATE_DATE=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE CUST_EMAIL = ?")
public class Customers extends BaseTimeEntity {

    @Id
    @Column(name = "CUST_EMAIL")
    private String CustEmail;

    @Column(name = "CUST_NAME")
    private String CustName;

    @Column(name = "CUST_PASSWORD")
    private String CustPassword;

    @Column(name = "CUST_PHONE")
    private String CustPhone;

    @Column(name = "CUST_GENDER")
    private String CustGender;

    @Column(name = "CUST_BIRTHDAY")
    private String CustBirthday;

    @Column(name = "CUST_ADDRESS")
    private String CustAddress;

    @Column(name = "CUST_POINT")
    private String CustPoint;

    @Column(name = "CODE_NAME")
    private String CodeName;


}
