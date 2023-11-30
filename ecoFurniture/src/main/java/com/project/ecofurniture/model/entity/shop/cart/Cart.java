package com.project.ecofurniture.model.entity.shop.cart;

import com.project.ecofurniture.model.common.BaseTimeEntity;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

/**
 * packageName : com.project.ecofurniture.model.entity.shop.cart
 * fileName : Cart
 * author : GGG
 * date : 2023-11-29
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-29         GGG          최초 생성
 */
@Entity
@Table(name="TB_SHOP_CART")
@SequenceGenerator(
        name = "TB_SHOP_CART_SEQUENCE_GENERATOR"
        , sequenceName = "TB_SHOP_CART_SEQUENCE"
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
// soft delete
@Where(clause = "DELETE_YN = 'N'")
@SQLDelete(sql = "UPDATE TB_SHOP_CART SET DELETE_YN = 'Y', UPDATE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE CART_NO = ?")
public class Cart extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TB_SHOP_CART_SEQUENCE_GENERATOR")
    private Integer cartNo;

//    private String email;

    private Integer amount; // 물품 수량

    private Integer cartAllPrice; // 상품 총가격

    private Integer itemNo; // 연결용

}
