package com.project.ecofurniture.controller.admin.coupon;

import com.project.ecofurniture.model.dto.admin.CodeDto;
import com.project.ecofurniture.model.entity.admin.code.Code;
import com.project.ecofurniture.model.entity.admin.coupon.Coupon;
import com.project.ecofurniture.model.entity.shop.itemImages.ItemImages;
import com.project.ecofurniture.service.admin.coupon.CouponService;
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
 * packageName : com.project.ecofurniture.controller.admin.coupon
 * fileName : CouponController
 * author : GB_Jo
 * date : 2023-11-23
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@RestController
@Slf4j
@RequestMapping("/api/admin")
public class CouponController {

    @Autowired
    CouponService couponService;

    @GetMapping("/coupon")
    public ResponseEntity<Object> findAllByCodeNameContaining(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
//            페이지 변수 저장 (page:현재페이지번호, size:1페이지당개수)
//            함수 매개변수 : Pageable (위의 값을 넣기)
//        사용법 : Pageable pageable = PageRequest.of(현재페이지번호, 1페이지당개수);
            Pageable pageable = PageRequest.of(page, size);

            Page<Coupon> couponPage
                    = couponService.findAllPage(pageable);

//          리액트 전송 : 배열 , 페이징정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("coupon", couponPage.getContent()); // 조인배열
            response.put("currentPage", couponPage.getNumber()); // 현재페이지번호
            response.put("totalItems", couponPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", couponPage.getTotalPages()); // 총페이지수

            if (couponPage.isEmpty() == false) {
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

    // 상세조회
    @GetMapping("/coupon/get/{couponId}")
    public ResponseEntity<Object> findById(@PathVariable int couponId) {

        try {
//            상세조회 실행
            Optional<Coupon> optionalCoupon = couponService.findById(couponId);

            if (optionalCoupon.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalCoupon.get(), HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/coupon")
    public ResponseEntity<Object> create(@RequestBody Coupon coupon) {

        try {
            Coupon coupon2 = couponService.save(coupon);

            return new ResponseEntity<>(coupon2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/coupon/{couponId}")
    public ResponseEntity<Object> update(@PathVariable int couponId,
                                         @RequestBody Coupon coupon) {

        try {
            Coupon coupon2 = couponService.save(coupon); // db 수정

            return new ResponseEntity<>(coupon2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/coupon/{couponId}")
    public ResponseEntity<Object> delete(@PathVariable int couponId){
        try {
            // 삭제 함수 호출
            boolean bSuccess = couponService.removeById(couponId);
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


}
