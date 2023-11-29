package com.project.ecofurniture.model.entity.admin.code;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * packageName : com.project.ecofurniture.model.entity.admin.code
 * fileName : Code
 * author : GB_Jo
 * date : 2023-11-22
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@Entity
@Table(name="TB_CODE")
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
public class Code {
    @Id
    private Integer codeId; // 기본키
    private String codeName;
    private Integer codeCategoryId; // 참조키
    private String useYn;

    private String custRole; // TODO: 추가된 부분
}
