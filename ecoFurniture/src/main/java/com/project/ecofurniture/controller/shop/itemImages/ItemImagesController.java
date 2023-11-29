package com.project.ecofurniture.controller.shop.itemImages;

import com.project.ecofurniture.model.entity.shop.itemImages.ItemImages;
import com.project.ecofurniture.service.shop.itemImages.ItemImagesService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.project.ecofurniture.controller.shop.itemImages
 * fileName : ItemImagesController
 * author : GGG
 * date : 2023-11-21
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-21         GGG          최초 생성
 */
@Controller
@Slf4j
@RequestMapping("/api/shop")
public class ItemImagesController {
    @Autowired
    ItemImagesService itemImagesService;

    //    전체 조회 + imgTitle like 검색
    @GetMapping("/item-images")
    public ResponseEntity<Object> findAllByImgTitleContaining(
            @RequestParam(defaultValue = "") String imgTitle,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
            Pageable pageable = PageRequest.of(page, size);

            Page<ItemImages> itemImagesPage
                    = itemImagesService.findAllByImgTitleContaining(imgTitle, pageable);

            Map<String, Object> response = new HashMap<>();
            response.put("itemImages", itemImagesPage.getContent()); // itemImages 배열(리액트로 전송)
            response.put("currentPage", itemImagesPage.getNumber()); // 현재페이지번호
            response.put("totalItems", itemImagesPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", itemImagesPage.getTotalPages()); // 총페이지수

            if (itemImagesPage.isEmpty() == false) {
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
    @PostMapping("/item-images/upload")
    public ResponseEntity<Object> create(
            @RequestParam String imgTitle,
            @RequestParam MultipartFile itemImages // 첨부파일
    ) {

        try {
            itemImagesService.save(
                    null,    // 기본키
                    imgTitle,     // 파일제목
                    itemImages    // 첨부파일
            ); // db 저장

            return new ResponseEntity<>("업로드 성공", HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    다운로드 url 에 따라 자동으로 첨부파일 다운로드 받게 해주는 함수(자동 실행)
//    예) <img src="url"/> => 이미지 자동 다운로드해서 화면에 이미지 표시됨
//    http://localhost:8000/api/shop/item-images/{uuid} : 현재 함수 url
//    현재 함수 url === 다운로드 url
    @GetMapping("/item-images/{uuid}")
    public ResponseEntity<byte[]> findByIdDownloading(@PathVariable String uuid) {
        ItemImages itemImages = itemImagesService.findById(uuid).get(); // 상세조회

        return ResponseEntity.ok()
//           Todo : header() :헤더 (1)첨부파일로 전송한다고 표시, (2)첨부파일명 표시
//                  HttpHeaders.CONTENT_DISPOSITION : 첨부파일 표시
//                  "attachment; filename=\"" + fileDb.getFileName() + "\"" : 첨부파일명 표시
                .header(HttpHeaders.CONTENT_DISPOSITION
                        , "attachment; filename=\"" + itemImages.getImgName() + "\"")
//           TODO : body() : 바디 - 실제 이미지 전송(리액트)
                .body(itemImages.getImgData()); // 첨부파일
    }


    // 상세조회
    @GetMapping("/item-images/get/{uuid}")
    public ResponseEntity<Object> findById(@PathVariable String uuid) {

        try {
//            상세조회 실행
            Optional<ItemImages> optionalItemImages = itemImagesService.findById(uuid);

            if (optionalItemImages.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalItemImages.get(), HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    수정함수
    @PutMapping("/item-images/{uuid}")
    public ResponseEntity<Object> create(
            @PathVariable String uuid,        // 기본키
            @RequestParam String imgTitle,    // 파일제목
            @RequestParam MultipartFile itemImages // 첨부파일
    ) {

        try {
            itemImagesService.save(
                    uuid,         // 기본키
                    imgTitle,     // 제목
                    itemImages    // 첨부파일
            ); // db 저장

            return new ResponseEntity<>("수정 성공", HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    // 삭제함수
    @DeleteMapping("/item-images/deletion/{uuid}")
    public ResponseEntity<Object> delete(@PathVariable String uuid) {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
//            삭제함수 호출
            boolean bSuccess = itemImagesService.removeById(uuid);

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
