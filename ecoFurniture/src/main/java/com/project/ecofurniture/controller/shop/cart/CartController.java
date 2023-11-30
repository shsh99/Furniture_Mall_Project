package com.project.ecofurniture.controller.shop.cart;

import com.project.ecofurniture.model.dto.shop.CartDto;
import com.project.ecofurniture.model.entity.shop.cart.Cart;
import com.project.ecofurniture.service.shop.cart.CartService;
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
 * packageName : com.project.ecofurniture.controller.shop.cart
 * fileName : CartController
 * author : GGG
 * date : 2023-11-29
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-29         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api/shop")
public class CartController {

    @Autowired
    CartService cartService; // DI


    // 상세조회
    @GetMapping("/cart/{cartNo}")
    public ResponseEntity<Object> selectByCartNo(@PathVariable int cartNo) {

        try {
//            상세조회 실행
            Optional<CartDto> optionalSimpleCartDto
                    = cartService.selectByCartNo(cartNo);

            if (optionalSimpleCartDto.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalSimpleCartDto.get(), HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    저장 함수
    @PostMapping("/cart")
    public ResponseEntity<Object> create(@RequestBody Cart cart) {

        try {
            Cart cart2 = cartService.save(cart); // db 저장

            return new ResponseEntity<>(cart2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    전체 조회 + like 검색 (조인)
    @GetMapping("/cart")
    public ResponseEntity<Object> selectByTitleContaining(
            @RequestParam(defaultValue = "") String itemName,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ){
        try {
            Pageable pageable = PageRequest.of(page, size);

            Page<CartDto> cartDtoPage
                    = cartService
                    .selectByItemNameContaining(itemName, pageable);

            Map<String , Object> response = new HashMap<>();
            response.put("cart", cartDtoPage.getContent()); // Cart 배열
            response.put("currentPage", cartDtoPage.getNumber()); // 현재페이지번호
            response.put("totalItems", cartDtoPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", cartDtoPage.getTotalPages()); // 총페이지수

            if (cartDtoPage.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        }catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 삭제함수
    @DeleteMapping("/cart/deletion/{cartNo}")
    public ResponseEntity<Object> delete(@PathVariable int cartNo) {

        try {
            boolean bSuccess = cartService.removeById(cartNo);

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

}
