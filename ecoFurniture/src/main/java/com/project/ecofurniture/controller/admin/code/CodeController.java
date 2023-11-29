package com.project.ecofurniture.controller.admin.code;

import com.project.ecofurniture.model.dto.admin.CodeDto;
import com.project.ecofurniture.model.entity.admin.code.Code;
import com.project.ecofurniture.service.admin.code.CodeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * ======================================
 * FileName : CodeController
 * Author : DH.Lee
 * Date : 2023-11-27
 * Note :
 * 1) CodeController
 * ======================================
 */
@Slf4j
@RestController
@RequestMapping("/api/admin")
public class CodeController {

    @Autowired
    CodeService codeService; // DI

    /**
     * like 검색 : 페이징
     */
//    전체 조회 + categoryName like 검색
    @GetMapping("/code")
    public ResponseEntity<Object> findAllByCategoryNameContaining(
            @RequestParam(defaultValue = "") String codeName,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
            Pageable pageable = PageRequest.of(page, size);

            Page<CodeDto> codeDtoPage
                    = codeService
                    .selectByCodeNameContaining(codeName, pageable);

            Map<String, Object> response = new HashMap<>();
            response.put("code", codeDtoPage.getContent()); // 소분류코드배열
            response.put("currentPage", codeDtoPage.getNumber()); // 현재페이지번호
            response.put("totalItems", codeDtoPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", codeDtoPage.getTotalPages()); // 총페이지수

            if (codeDtoPage.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 저장 함수
     */
//    저장 함수
    @PostMapping("/code")
    public ResponseEntity<Object> create(@RequestBody Code code) {

        try {
            Code code2 = codeService.save(code); // db 수정&저장

            return new ResponseEntity<>(code2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 수정 함수
     */
//     수정 함수
    @PutMapping("/code/{codeId}")
    public ResponseEntity<Object> update(
            @PathVariable int codeId,
            @RequestBody Code code) {
        try {
            Code code2 = codeService.save(code); // db 수정
            return new ResponseEntity<>(code2, HttpStatus.OK);
        } catch (Exception e) {
            // DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 상세 조회(1건 조회)
     */
//     상세 조회(1건 조회)
    @GetMapping("/code/{codeId}")
    public ResponseEntity<Object> findById(@PathVariable int codeId) {
        try {
            // 상세조회 실행
            Optional<Code> optionalCode = codeService.findById(codeId);
            if (optionalCode.isPresent()) {
                // 성공
                return new ResponseEntity<>(optionalCode.get(), HttpStatus.OK);
            } else {
                // 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            // 서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 전체 조회 : 페이징 없음
     */
//    전체 조회 : 페이징 없음
    @GetMapping("/code/all")
    public ResponseEntity<Object> selectAllNoPage() {
        try {
            List<CodeDto> list
                    = codeService.selectAllNoPage();
            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

} // end of class