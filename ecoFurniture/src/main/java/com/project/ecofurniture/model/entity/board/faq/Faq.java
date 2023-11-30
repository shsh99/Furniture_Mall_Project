package com.project.ecofurniture.model.entity.board.faq;

import com.project.ecofurniture.model.common.BaseTimeEntity;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import javax.persistence.*;

/**
 * ======================================
 * FileName : Faq
 * Author : DH.Lee
 * Date : 2023-11-20
 * Note : Faq 엔티티(vo)
 * 1)
 * ======================================
 */

@Entity
@Table(name="TB_FAQ")
@SequenceGenerator(
        name = "TB_FAQ_SEQUENCE_GENERATOR"
        , sequenceName = "TB_FAQ_SEQUENCE"
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
// TODO: DELETE_TIME -> UPDATE_DATE 수정
// @SQLDelete(sql = "UPDATE TB_FAQ SET DELETE_YN = 'Y', DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE FAQ_NO = ?")
@SQLDelete(sql = "UPDATE TB_FAQ SET DELETE_YN = 'Y', UPDATE_DATE=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE FAQ_NO = ?")
public class Faq extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "TB_FAQ_SEQUENCE_GENERATOR"
    )
    private Integer faqNo; //   // FAQ 번호(기본키, 시퀀스)
    private String faqTitle;    // FAQ 제목
    private String faqContents; // FAQ 내용
}