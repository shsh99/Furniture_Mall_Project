package com.project.ecofurniture.model.entity.admin.coupon;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

/**
 * packageName : com.project.ecofurniture.model.entity.admin.coupon
 * fileName : Coupon
 * author : GB_Jo
 * date : 2023-11-23
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@Entity
@Table(name="TB_COUPON")
@SequenceGenerator(
        name = "TB_COUPON_SEQUENCE_GENERATOR"
        , sequenceName = "TB_COUPON_SEQUENCE"
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
public class Coupon {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "TB_COUPON_SEQUENCE_GENERATOR"
    )
    private Integer couponId;

    private String couponName;

    private Integer discountValue;

    private String couponEndTime;

}
