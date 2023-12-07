package com.project.ecofurniture.model.entity.shop.itemImages;

import com.project.ecofurniture.model.common.BaseTimeEntity;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

/**
 * packageName : com.project.ecofurniture.model.entity.shop.itemImages
 * fileName : ItemImages
 * author : GGG
 * date : 2023-11-20
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-20         GGG          최초 생성
 */
@Entity
@Table(name="TB_SHOP_ITEM_IMAGES")
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
@SQLDelete(sql = "UPDATE TB_SHOP_ITEM_IMAGES SET DELETE_YN = 'Y', UPDATE_DATE=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE UUID = ?")
public class ItemImages extends BaseTimeEntity {

    @Id
    private String uuid;

    private String imgName;

    private String imgTitle;

    @Lob
    private byte[] imgData;

    private String imgUrl;

}
