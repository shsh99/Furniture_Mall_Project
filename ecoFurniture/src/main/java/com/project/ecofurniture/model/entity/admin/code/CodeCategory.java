package com.project.ecofurniture.model.entity.admin.code;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * packageName : com.project.ecofurniture.model.entity.admin.code
 * fileName : CodeCategory
 * author : GB_Jo
 * date : 2023-11-22
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@Entity
@Table(name="TB_CODE_CATEGORY")
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
public class CodeCategory {
    @Id
    private Integer codeCategoryId; // 기본키
    private String codeCategoryName;

}
