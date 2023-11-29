package com.project.ecofurniture.controller.customer.point;

import com.project.ecofurniture.model.dto.admin.CodeDto;
import com.project.ecofurniture.model.dto.customer.PointHistoriesDto;
import com.project.ecofurniture.service.customer.point.PointHistoriesService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * packageName : com.project.ecofurniture.controller.customer.point
 * fileName : PointHistoriesController
 * author : GB_Jo
 * date : 2023-11-23
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@RestController
@Slf4j
@RequestMapping("/api/customer")
public class PointHistoriesController {

    @Autowired
    PointHistoriesService pointHistoriesService;

    @GetMapping("/point")
    public ResponseEntity<Object> findAllPage(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
//            페이지 변수 저장 (page:현재페이지번호, size:1페이지당개수)
//            함수 매개변수 : Pageable (위의 값을 넣기)
//        사용법 : Pageable pageable = PageRequest.of(현재페이지번호, 1페이지당개수);
            Pageable pageable = PageRequest.of(page, size);

            Page<PointHistoriesDto> pointHistoriesDtoPage
                    = pointHistoriesService.findAllPage(pageable);

//          리액트 전송 : 배열 , 페이징정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("pointHistories", pointHistoriesDtoPage.getContent()); // 조인배열
            response.put("currentPage", pointHistoriesDtoPage.getNumber()); // 현재페이지번호
            response.put("totalItems", pointHistoriesDtoPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", pointHistoriesDtoPage.getTotalPages()); // 총페이지수

            if (pointHistoriesDtoPage.isEmpty() == false) {
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


}
