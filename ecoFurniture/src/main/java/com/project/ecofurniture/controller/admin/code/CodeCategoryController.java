package com.project.ecofurniture.controller.admin.code;

import com.project.ecofurniture.model.entity.admin.code.CodeCategory;
import com.project.ecofurniture.service.admin.code.CodeCategoryService;
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

/**
 * packageName : com.project.ecofurniture.controller.admin.code
 * fileName : CodeCategoryController
 * author : GB_Jo
 * date : 2023-11-22
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@Slf4j
@RestController
@RequestMapping("/api/admin")
public class CodeCategoryController {

    @Autowired
    CodeCategoryService codeCategoryService; // DI

    /**
     * like 검색 : 페이징
     */
//    전체 조회 + categoryName like 검색
    @GetMapping("/code-category")
    public ResponseEntity<Object> findAllByCodeCategoryNameContaining(
            @RequestParam(defaultValue = "") String codeCategoryName,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
            Pageable pageable = PageRequest.of(page, size);

            Page<CodeCategory> codeCategoryPage
                    = codeCategoryService
                    .findAllByCodeCategoryNameContaining(codeCategoryName, pageable);

            Map<String, Object> response = new HashMap<>();
            response.put("codeCategory", codeCategoryPage.getContent()); // 대분류코드배열
            response.put("currentPage", codeCategoryPage.getNumber()); // 현재페이지번호
            response.put("totalItems", codeCategoryPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", codeCategoryPage.getTotalPages()); // 총페이지수

            if (codeCategoryPage.isEmpty() == false) {
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
    @PostMapping("/code-category")
    public ResponseEntity<Object> create(@RequestBody CodeCategory codeCategory) {
        try {
            CodeCategory codeCategory2 = codeCategoryService.save(codeCategory); // db 저장
            return new ResponseEntity<>(codeCategory2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 전체 검색 : 페이징 없음 */
//    전체 검색 : 페이징 없음
    @GetMapping("/code-category/all")
    public ResponseEntity<Object> findAllByNoPage() {
        try {
            List<CodeCategory> List = codeCategoryService.findAll();

            if (List.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(List, HttpStatus.OK);
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
