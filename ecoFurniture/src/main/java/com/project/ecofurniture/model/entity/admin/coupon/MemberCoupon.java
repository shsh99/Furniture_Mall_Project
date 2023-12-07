package com.project.ecofurniture.model.entity.admin.coupon;


import com.project.ecofurniture.model.entity.auth.User;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

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
    @Column(name = "M_COUPON_ID")
    private Integer mCouponId;

    @Column(name = "IS_USED")
    private String isUsed;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "COUPON_ID")
    private Coupon coupon;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "EMAIL")
    private User user;


}
