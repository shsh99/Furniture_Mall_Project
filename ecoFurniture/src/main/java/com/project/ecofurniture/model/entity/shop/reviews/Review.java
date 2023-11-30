package com.project.ecofurniture.model.entity.shop.reviews;

import com.project.ecofurniture.model.common.BaseTimeEntity;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

/**
 * packageName : com.project.ecofurniture.model.entity.shop.reviews
 * fileName : Review
 * author : GGG
 * date : 2023-11-28
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-28         GGG          최초 생성
 */
@Entity
@Table(name="TB_SHOP_ITEM_REVIEW")
@SequenceGenerator(
        name = "TB_SHOP_ITEM_REVIEW_SEQUENCE_GENERATOR"
        , sequenceName = "TB_SHOP_ITEM_REVIEW_SEQUENCE"
        , initialValue = 1
        , allocationSize = 1
)
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@DynamicUpdate
@Where(clause = "DELETE_YN = 'N'")
@SQLDelete(sql = "UPDATE TB_SHOP_ITEM_REVIEW SET DELETE_YN = 'Y',  UPDATE_DATE=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE REVIEW_NO = ?")
public class Review extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
            generator = "TB_SHOP_ITEM_REVIEW_SEQUENCE_GENERATOR")

    private Integer reviewNo; // 리뷰 번호(기본키)

    private Integer orderProductNo; // 주문 상품 번호

    private Integer reviewRating; // 별점

    private String reviewTitle; // 리뷰 제목

    private String reviewContent; // 리뷰 내용




//    @Override
//    public String toString() {
//        return "Review [reviewNo=" + reviewNo + ", orderProductNo=" + orderProductNo + ", reviewRating=" + reviewRating +
//                ", reviewTitle=" + reviewTitle + ", reviewContent=" + reviewContent + ", reviewImg=" + reviewImg + "]";
//    }


}
