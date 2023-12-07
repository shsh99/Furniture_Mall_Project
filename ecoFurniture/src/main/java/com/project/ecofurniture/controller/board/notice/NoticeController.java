package com.project.ecofurniture.controller.board.notice;

import com.project.ecofurniture.model.entity.board.notice.Notice;
import com.project.ecofurniture.service.board.notice.NoticeService;
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
 * FileName : NoticeController
 * Author : KD.Song
 * Date : 2023-11-22
 * Note : Notice 컨트롤러
 * 1)
 * ======================================
 */
@Slf4j
@RestController
@RequestMapping("/api/board")
public class NoticeController {

    @Autowired
    NoticeService noticeService; // DI

    //    전체 조회 + noticeTitle like 검색
    @GetMapping("/notice")
    public ResponseEntity<Object> findAllByNoticeTitleContaining(
            @RequestParam(defaultValue = "") String noticeTitle,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
            Pageable pageable = PageRequest.of(page, size);

            Page<Notice> noticePage
                    = noticeService.findAllByNoticeTitleContaining(noticeTitle, pageable);

//          리액트 전송 : notice배열 , 페이징정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("notice", noticePage.getContent()); // notice배열
            response.put("currentPage", noticePage.getNumber()); // 현재페이지번호
            response.put("totalItems", noticePage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", noticePage.getTotalPages()); // 총페이지수

            if (noticePage.isEmpty() == false) {
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
    @PostMapping("/notice")
    public ResponseEntity<Object> create(@RequestBody Notice notice) {

        try {
            Notice notice2 = noticeService.save(notice); // db 저장

            return new ResponseEntity<>(notice2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    수정 함수
    @PutMapping("/notice/{noticeNo}")
    public ResponseEntity<Object> update(
            @PathVariable int noticeNo,
            @RequestBody Notice notice) {

        try {
            Notice notice2 = noticeService.save(notice); // db 저장(수정)

            return new ResponseEntity<>(notice2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 상세조회
    @GetMapping("/notice/{noticeNo}")
    public ResponseEntity<Object> findById(@PathVariable int noticeNo) {

        try {
//            상세조회 실행
            Optional<Notice> optionalNotice = noticeService.findById(noticeNo);

            if (optionalNotice.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalNotice.get(), HttpStatus.OK);
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
    @DeleteMapping("/notice/deletion/{noticeNo}")
    public ResponseEntity<Object> delete(@PathVariable int noticeNo) {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
//            삭제함수 호출
            boolean bSuccess = noticeService.removeById(noticeNo);

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