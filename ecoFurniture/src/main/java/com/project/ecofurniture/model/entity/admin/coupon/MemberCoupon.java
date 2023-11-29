package com.project.ecofurniture.model.entity.admin.coupon;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

/**
 * packageName : com.project.ecofurniture.model.entity.admin.coupon
 * fileName : MemberCoupon
 * author : GB_Jo
 * date : 2023-11-23
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@Entity
@Table(name="TB_MEMBER_COUPON")
@SequenceGenerator(
        name = "TB_MEMBER_COUPON_SEQUENCE_GENERATOR"
        , sequenceName = "TB_MEMBER_COUPON_SEQUENCE"
        , initialValue = 1
        , allocationSize = 1
)
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@DynamicUpdate
public class MemberCoupon {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "TB_MEMBER_COUPON_SEQUENCE_GENERATOR"
    )
    private Integer mCouponId;

    private String isUsed;

    private String CouponId;

    private String custEmail;

}
