// TODO: Faq 서비스(업무 로직 : 비지니스 로직)
package com.project.ecofurniture.service.board.faq;

import com.project.ecofurniture.model.entity.board.faq.Faq;
import com.project.ecofurniture.repository.board.faq.FaqRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * ======================================
 * FileName : FaqService
 * Author : DH.Lee
 * Date : 2023-11-20
 * Note : JPA CRUD 인터페이스
 * 1)
 * ======================================
 */

@Service
public class FaqService {

    @Autowired
    FaqRepository faqRepository; // DI

    // faqTitle like 조회 + 페이징
    public Page<Faq> findAllByFaqTitleContaining(String faqTitle, Pageable pageable) {
        Page<Faq> page
                = faqRepository.findAllByFaqTitleContaining(faqTitle, pageable);
        return page;
    }

    // 저장(수정) 함수
    public Faq save(Faq faq) {
        Faq faq2 = faqRepository.save(faq);
        return faq2;
    }

    // 상세 조회(1건 조회)
    public Optional<Faq> findById(int faqNo) {
        Optional<Faq> optionalFaq
                = faqRepository.findById(faqNo);
        return optionalFaq;
    }

    // 삭제 함수
    public boolean removeById(int faqNo) {
        if (faqRepository.existsById(faqNo)) { // FAQ 번호 있는지 확인
            faqRepository.deleteById(faqNo);// 삭제 진행
            return true;
        }
        return false;
    }

}
