package com.project.ecofurniture.controller.shop.reviews;


import com.project.ecofurniture.model.entity.shop.reviews.Review;
import com.project.ecofurniture.service.shop.reviews.ReviewService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.project.ecofurniture.controller.shop.review
 * fileName : ReviewsController
 * author : 신동구
 * date : 2023-11-28
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-28         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api/shop")
public class ReviewController {
    @Autowired
    ReviewService reviewService; // DI

    //    전체 조회 + question/questioner like 검색
    @GetMapping("/review")
    public ResponseEntity<Object> findAllByContaining(
            @RequestParam(defaultValue = "reviewTitle") String searchSelect,
            @RequestParam(defaultValue = "") String searchKeyword,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
            Pageable pageable = PageRequest.of(page, size);

            Page<Review> reviewPage; // qna 페이지 정의

            if (searchSelect.equals("reviewTitle")) {
                //            question like 검색
                reviewPage = reviewService.findAllByReviewTitleContaining(searchKeyword, pageable);
            } else {
                //            questioner like 검색
                reviewPage = reviewService.findAllByReviewContentContaining(searchKeyword, pageable);
            }

//          리액트 전송 : qna배열 , 페이징정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("review", reviewPage.getContent()); // qna배열
            response.put("currentPage", reviewPage.getNumber()); // 현재페이지번호
            response.put("totalItems", reviewPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", reviewPage.getTotalPages()); // 총페이지수

            if (reviewPage.isEmpty() == false) {
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

    //    저장 함수
    @PostMapping("/review")
    public ResponseEntity<Object> create(@RequestBody Review review) {

        try {
            Review review2 = reviewService.save(review); // db 저장

            return new ResponseEntity<>(review2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    수정 함수
    @PutMapping("/review/{reviewNo}")
    public ResponseEntity<Object> update(
            @PathVariable int reviewNo,
            @RequestBody Review review) {

        try {
            Review review2 = reviewService.save(review); // db 수정

            return new ResponseEntity<>(review2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 상세조회
    @GetMapping("/review/{reviewNo}")
    public ResponseEntity<Object> findById(@PathVariable int reviewNo) {

        try {
//            상세조회 실행
            Optional<Review> optionalQna = reviewService.findById(reviewNo);

            if (optionalQna.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalQna.get(), HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 삭제함수
    @DeleteMapping("/review/deletion/{reviewNo}")
    public ResponseEntity<Object> delete(@PathVariable int reviewNo) {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
//            삭제함수 호출
            boolean bSuccess = reviewService.removeById(reviewNo);

            if (bSuccess == true) {
//                delete 문이 성공했을 경우
                return new ResponseEntity<>(HttpStatus.OK);
            }
//            delete 실패했을 경우( 0건 삭제가 될경우 )
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
//            DB 에러가 날경우
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 평점 옵션
    @ModelAttribute
    public void addRatingOptions(Model model) {
        Map<Integer, String> ratingOptions = new HashMap<>();
        ratingOptions.put(0, "☆☆☆☆☆");
        ratingOptions.put(1, "★☆☆☆☆");
        ratingOptions.put(2, "★★☆☆☆");
        ratingOptions.put(3, "★★★☆☆");
        ratingOptions.put(4, "★★★★☆");
        ratingOptions.put(5, "★★★★★");
        model.addAttribute("ratingOptions", ratingOptions);
    }

}
