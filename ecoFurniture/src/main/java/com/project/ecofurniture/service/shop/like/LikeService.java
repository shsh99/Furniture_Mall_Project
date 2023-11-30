//package com.project.ecofurniture.service.shop.like;
//
//import com.project.ecofurniture.model.entity.auth.User;
//import com.project.ecofurniture.model.entity.shop.item.Item;
//import com.project.ecofurniture.model.entity.shop.like.Like;
//import com.project.ecofurniture.repository.auth.UserRepository;
//import com.project.ecofurniture.repository.shop.item.ItemRepository;
//import com.project.ecofurniture.repository.shop.like.LikeRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.util.Optional;
//
///**
// * packageName : com.project.ecofurniture.service.shop.like
// * fileName : LikeService
// * author : GB_Jo
// * date : 2023-11-27
// * description :
// * 요약 :
// * <p>
// * ===========================================
// */
//
//@RequiredArgsConstructor
//@Service
//public class LikeService {
//    @Autowired
//    LikeRepository likeRepository;
//    @Autowired
//    ItemRepository itemRepository;
//    @Autowired
//    UserRepository userRepository;
//    public boolean findLike(Integer itemNo, String email) {
//        // 저장된 DTO 가 없다면 0, 있다면 1
//
//        Optional<Like> findLike = likeRepository.findByUserAndItem(itemNo, email);
//
//
//
//        if (findLike.isEmpty()){
//            return false;
//        }else {
//
//            return true;
//        }
//    }
//
//    @Transactional
//    public boolean likeItem(Integer itemNo, String email) {
//        Optional<Like> findLike = likeRepository.findByUserAndItem(itemNo, email);
//
//        if (findLike.isEmpty()) {
//            User user = userRepository.findById(email).orElseThrow();
//            Item item = itemRepository.findById(itemNo).orElseThrow();
//
//            Like like = new Like();
//            like.setUser(user);
//            like.setItem(item);
//
//            likeRepository.save(like);
//            itemRepository.plusLike(itemNo);
//        } else {
//            // 이미 좋아요가 있는 경우
//            likeRepository.deleteByUserAndItem(itemNo, email); // 좋아요 정보 삭제
//            itemRepository.minusLike(itemNo);
//            return false;
//        }
//
//        return true; // 추가된 좋아요가 없는 경우 true 반환
//    }
//    }
//
//
