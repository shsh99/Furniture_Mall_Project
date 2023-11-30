//package com.project.ecofurniture.controller.shop.like;
//
//import com.project.ecofurniture.model.entity.admin.code.Code;
//import com.project.ecofurniture.model.entity.auth.User;
//import com.project.ecofurniture.service.shop.like.LikeService;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
///**
// * packageName : com.project.ecofurniture.controller.shop.like
// * fileName : LikeController
// * author : GB_Jo
// * date : 2023-11-27
// * description :
// * 요약 :
// * <p>
// * ===========================================
// */
//@RestController
//@Slf4j
//@RequestMapping("/api/shop")
//public class LikeController {
//
//    @Autowired
//    LikeService likeService;
//
//    @PostMapping("/like/{itemNo}")
//    public ResponseEntity<Object> LikeItem(@PathVariable Integer itemNo, User user) {
//        try {
//            // likeService.LikeItem 메서드에서 ResponseEntity 반환하도록 가정
//            boolean response = likeService.likeItem(itemNo, user.getName());
//
//            return new ResponseEntity<>(response, HttpStatus.OK);
//        } catch (Exception e) {
//            // DB 에러가 났을 경우: INTERNAL_SERVER_ERROR 프론트엔드로 전송
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//
//}
