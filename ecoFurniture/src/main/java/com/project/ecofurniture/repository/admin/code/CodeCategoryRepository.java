package com.project.ecofurniture.repository.admin.code;

import com.project.ecofurniture.model.entity.admin.code.CodeCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.project.ecofurniture.repository.admin.code
 * fileName : CodeCategoryRepository
 * author : GB_Jo
 * date : 2023-11-22
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@Repository
public interface CodeCategoryRepository extends JpaRepository<CodeCategory,Integer> {
    Page<CodeCategory> findAllByCodeCategoryNameContaining(String codeCategoryName, Pageable pageable);
}
