package com.project.ecofurniture.model.entity.board.notice;

import com.project.ecofurniture.model.common.BaseTimeEntity;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
/**
 * ======================================
 * FileName : Notice
 * Author : KD.Song
 * Date : 2023-11-22
 * Note :
 * 1)
 * ======================================
 */
@Entity
@Table(name = "TB_NOTICE")
@SequenceGenerator(
        name = "TB_NOTICE_SEQUENCE_GENERATOR"
        , sequenceName = "TB_NOTICE_SEQUENCE"
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
@SQLDelete(sql = "UPDATE TB_NOTICE SET DELETE_YN = 'Y', UPDATE_DATE=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE NOTICE_NO = ?")
public class Notice extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "TB_NOTICE_SEQUENCE_GENERATOR"
    )
    private Integer noticeNo; // 기본키, 시퀀스

    private String noticeTitle;

    private String noticeContents;
}