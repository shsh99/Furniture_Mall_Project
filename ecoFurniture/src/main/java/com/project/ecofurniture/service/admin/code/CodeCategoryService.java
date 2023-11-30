package com.project.ecofurniture.service.admin.code;

import com.project.ecofurniture.model.entity.admin.code.CodeCategory;
import com.project.ecofurniture.repository.admin.code.CodeCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.project.ecofurniture.service.admin.code
 * fileName : CodeCategoryService
 * author : GB_Jo
 * date : 2023-11-22
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@Service
public class CodeCategoryService {
    @Autowired
    CodeCategoryRepository codeCategoryRepository;

    /** like 검색 + 페이징 */
    public Page<CodeCategory> findAllByCodeCategoryNameContaining(String codeCategoryName, Pageable pageable){
        Page<CodeCategory> page = codeCategoryRepository.findAllByCodeCategoryNameContaining(codeCategoryName,pageable);
        return page;
    }

    /** 전체 검색 : 페이징 없음 */
    public List<CodeCategory> findAll(){
        List<CodeCategory> list = codeCategoryRepository.findAll(); // 전체조회 함수
        return list;
    }

    /** 상세 조회 */
    public Optional<CodeCategory> findById(int categoryId){
        Optional<CodeCategory> optionalCodeCategory = codeCategoryRepository.findById(categoryId);
        return optionalCodeCategory;
    }

    /** 저장 함수 */
    public CodeCategory save(CodeCategory codeCategory){
        CodeCategory codeCategory2 = codeCategoryRepository.save(codeCategory);
        return codeCategory2; // DB 실제 저장된 객체
    }
}
