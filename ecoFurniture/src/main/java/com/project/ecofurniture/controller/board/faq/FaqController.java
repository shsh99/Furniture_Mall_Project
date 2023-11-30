package com.project.ecofurniture.controller.board.faq;

import com.project.ecofurniture.model.entity.board.faq.Faq;
import com.project.ecofurniture.service.board.faq.FaqService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * ======================================
 * FileName : FaqController
 * Author : DH.Lee
 * Date : 2023-11-20
 * Note : Faq 컨트롤러
 * 1)
 * ======================================
 */

@Slf4j
@RestController
@RequestMapping("/api/board")
public class FaqController {

    @Autowired
    FaqService faqService; // DI

    // 전체조회 + title like 검색
    @GetMapping("/faq")
    public ResponseEntity<Object> findAllByFaqTitleContaining(
            @RequestParam(defaultValue = "") String faqTitle,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
            Pageable pageable = PageRequest.of(page, size);
            Page<Faq> faqPage
                    = faqService.findAllByFaqTitleContaining(faqTitle, pageable);
            // 리액트 전송 : faq배열 , 페이징정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("faq", faqPage.getContent()); // faq배열
            response.put("currentPage", faqPage.getNumber()); // 현재페이지번호
            response.put("totalItems", faqPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", faqPage.getTotalPages()); // 총페이지수

            if (faqPage.isEmpty() == false) {
                // 성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                // 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 저장 함수
    @PostMapping("/faq")
    public ResponseEntity<Object> create(@RequestBody Faq faq) {
        try {
            // TODO: log.debug(함수명()); 찍어서 에러 확인하기
            log.debug("Faq" + faq);
            Faq faq2 = faqService.save(faq);
            return new ResponseEntity<>(faq2, HttpStatus.OK);
        } catch (Exception e) {
            //  DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 수정 함수
    @PutMapping("/faq/{faqNo}")
    public ResponseEntity<Object> update(
            @PathVariable int faqNo,
            @RequestBody Faq faq) {
        try {
            Faq faq2 = faqService.save(faq); // db 수정
            return new ResponseEntity<>(faq2, HttpStatus.OK);
        } catch (Exception e) {
            //  DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 상세 조회(1건 조회)
    @GetMapping("/faq/{faqNo}")
    public ResponseEntity<Object> findByNo(@PathVariable int faqNo) {
        try {
        //  상세 조회 실행
            Optional<Faq> optionalFaq = faqService.findById(faqNo);

            if (optionalFaq.isPresent()) {
                // 성공
                return new ResponseEntity<>(optionalFaq.get(), HttpStatus.OK);
            } else {
                // 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            // 서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 삭제 함수
    @DeleteMapping("/faq/deletion/{faqNo}")
    public ResponseEntity<Object> delete(@PathVariable int faqNo) {
        // 프론트엔드 쪽으로 상태 정보를 보내줌
        try {
            // 삭제 함수 호출
            boolean bSuccess = faqService.removeById(faqNo);
            if (bSuccess == true) {
                // delete 문이 성공했을 경우
                return new ResponseEntity<>(HttpStatus.OK);
            }
            // delete 실패했을 경우(0건 삭제가 될 경우)
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            // DB 에러가 날경우
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

} // end of class