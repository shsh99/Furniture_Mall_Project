package com.project.ecofurniture.repository.admin.code;

import com.project.ecofurniture.model.entity.admin.code.CodeCategory;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;

/**
 * ======================================
 * FileName : CodeCategoryRepository
 * Author : DH.Lee
 * Date : 2023-11-27
 * Note :
 * 1) DB CRUD 함수들이 있는 인터페이스
 * ======================================
 */
@Repository
public interface CodeCategoryRepository extends JpaRepository<CodeCategory,Integer> {
    //    like 검색 : 쿼리메소드 (JPQL)
    Page<CodeCategory> findAllByCodeCategoryNameContaining(String codeCategoryName, Pageable pageable);
} // end of interface
