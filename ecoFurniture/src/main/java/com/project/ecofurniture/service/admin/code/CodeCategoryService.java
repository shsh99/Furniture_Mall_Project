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
 * ======================================
 * FileName : CodeCategoryService
 * Author : DH.Lee
 * Date : 2023-11-27
 * Note :
 * 1)
 * ======================================
 */
@Service
public class CodeCategoryService {

    @Autowired
    CodeCategoryRepository codeCategoryRepository; // DI

    /** like 검색 */
    public Page<CodeCategory> findAllByCodeCategoryNameContaining(String codeCategoryName, Pageable pageable) {
        Page<CodeCategory> page
                = codeCategoryRepository
                .findAllByCodeCategoryNameContaining(codeCategoryName, pageable);
        return page;
    }

    /** 전체 검색 : 페이징 없음 */
    public List<CodeCategory> findAll() {
        List<CodeCategory> list = codeCategoryRepository.findAll(); // 전체조회함수
        return list;
    }

    /** 상세 조회 */
    public Optional<CodeCategory> findById(int codeCategoryId) {
        Optional<CodeCategory> optionalCodeCategory
                = codeCategoryRepository.findById(codeCategoryId);
        return optionalCodeCategory;
    }

    /** 저장 함수 */
    public CodeCategory save(CodeCategory codeCategory) {
        CodeCategory codeCategory2 = codeCategoryRepository.save(codeCategory);
        return codeCategory2; // DB 실제 저장된 객체
    }

} // end of class