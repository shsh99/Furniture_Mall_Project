package com.project.ecofurniture.model.entity.shop.like;

import com.project.ecofurniture.model.entity.auth.User;
import com.project.ecofurniture.model.entity.shop.item.Item;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

/**
 * packageName : com.project.ecofurniture.model.entity.shop.like
 * fileName : Like
 * author : GB_Jo
 * date : 2023-11-27
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@Entity
@Table(name="TB_LIKE")
@SequenceGenerator(
        name = "TB_LIKE_SEQUENCE_GENERATOR"
        , sequenceName = "TB_LIKE_SEQUENCE"
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
public class Like {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "TB_LIKE_SEQUENCE_GENERATOR")
    private Integer likeId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "email")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_no")
    private Item item;




}
