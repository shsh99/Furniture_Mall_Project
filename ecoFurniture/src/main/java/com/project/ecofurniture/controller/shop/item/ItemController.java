package com.project.ecofurniture.controller.shop.item;

import com.project.ecofurniture.model.entity.shop.item.Item;
import com.project.ecofurniture.service.shop.item.ItemService;
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
 * packageName : com.project.ecofurniture.controller.shop.item
 * fileName : ItemController
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
@RestController
@Slf4j
@RequestMapping("/api/shop")
public class ItemController {
    @Autowired
    ItemService itemService; // DI

    //    like 검색
    @GetMapping("/item")
    public ResponseEntity<Object> find(
            @RequestParam(defaultValue = "") String itemName,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
            Pageable pageable = PageRequest.of(page, size);

            Page<Item> itemPage
                    = itemService
                    .findAllByItemNameContaining(itemName, pageable);

            Map<String, Object> response = new HashMap<>();
            response.put("item", itemPage.getContent()); // item 배열
            response.put("currentPage", itemPage.getNumber()); // 현재페이지번호
            response.put("totalItems", itemPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", itemPage.getTotalPages()); // 총페이지수

            if (itemPage.isEmpty() == false) {
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
    @PostMapping("/item")
    public ResponseEntity<Object> create(@RequestBody Item item) {

        try {
            Item item2 = itemService.save(item); // db 저장

            return new ResponseEntity<>(item2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    수정 함수
    @PutMapping("/item/{itemNo}")
    public ResponseEntity<Object> update(
            @PathVariable int itemNo,
            @RequestBody Item item) {

        try {
            Item item2
                    = itemService.save(item); // db 수정

            return new ResponseEntity<>(item2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 상세조회
    @GetMapping("/item/{itemNo}")
    public ResponseEntity<Object> findById(@PathVariable int itemNo) {

        try {
//            상세조회 실행
            Optional<Item> optionalItem
                    = itemService.findById(itemNo);

            if (optionalItem.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalItem.get(), HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
