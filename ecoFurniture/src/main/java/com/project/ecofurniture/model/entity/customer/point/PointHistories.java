package com.project.ecofurniture.model.entity.customer.point;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

/**
 * packageName : com.project.ecofurniture.model.entity.customer.point
 * fileName : PointHistories
 * author : GB_Jo
 * date : 2023-11-23
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@Entity
@Table(name="TB_SHOP_POINT_HISTORIES")
@SequenceGenerator(
        name = "TB_SHOP_POINT_HISTORIES_SEQUENCE_GENERATOR"
        , sequenceName = "TB_SHOP_POINT_HISTORIES_SEQUENCE"
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
public class PointHistories {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "TB_SHOP_POINT_HISTORIES_SEQUENCE_GENERATOR"
    )
    private Integer pointHistoriesNo;

    private String pointStatus; // 포인트 적립, 사용

    private String pointContent; // 포인트 발생 이유

    private String custEmail;

    private Integer orderUsePoint;

    private Integer orderProductPoint;

}
