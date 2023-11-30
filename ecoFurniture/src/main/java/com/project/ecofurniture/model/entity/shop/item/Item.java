package com.project.ecofurniture.model.entity.shop.item;

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

/**
 * packageName : com.project.ecofurniture.model.entity.shop.item
 * fileName : Item
 * author : GB_Jo
 * date : 2023-11-27
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@Entity
@Table(name="TB_SHOP_ITEMS")
@SequenceGenerator(
        name = "TB_SHOP_ITEMS_SEQUENCE_GENERATOR"
        , sequenceName = "TB_SHOP_ITEMS_SEQUENCE"
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
@SQLDelete(sql = "UPDATE TB_SHOP_ITEMS SET DELETE_YN = 'Y', UPDATE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE ITEM_NO = ?")
public class Item extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TB_SHOP_ITEMS_SEQUENCE_GENERATOR")
    private Integer itemNo;

    private String itemName;

    private Integer itemPrice;

    private Integer itemQty;

    private String  imgPath;


}
