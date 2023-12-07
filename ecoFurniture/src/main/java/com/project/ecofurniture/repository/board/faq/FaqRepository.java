package com.project.ecofurniture.repository.board.faq;

import com.project.ecofurniture.model.entity.board.faq.Faq;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * ======================================
 * FileName : FaqRepository
 * Author : DH.Lee
 * Date : 2023-11-20
 * Note : JPA CRUD 인터페이스
 * 1)
 * ======================================
 */

@Repository
public interface FaqRepository extends JpaRepository<Faq, Integer> {
    // faqTitle like 검색
    Page<Faq> findAllByFaqTitleContaining(String faqTitle, Pageable pageable);
}