package com.project.ecofurniture.model.dto.admin;

/**
 * packageName : com.project.ecofurniture.model.dto.admin
 * fileName : CodeDto
 * author : GB_Jo
 * date : 2023-11-22
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
public interface CodeDto {
    //    getter 함수 정의
    public Integer getCodeId();
    public String getCodeName();
    public Integer getCodeCategoryId();
    public String getCodeCategoryName();
    public String getUseYn();
} // end of interface
