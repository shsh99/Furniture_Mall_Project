package com.project.ecofurniture.service.shop.cart;

import com.project.ecofurniture.model.dto.shop.CartDto;
import com.project.ecofurniture.model.entity.shop.cart.Cart;
import com.project.ecofurniture.repository.shop.cart.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.project.ecofurniture.service.shop.cart
 * fileName : CartService
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
@Service
public class CartService {
    @Autowired
    CartRepository cartRepository; //DI

    //    전체 조회 + 페이징
    public Page<CartDto> selectByItemNameContaining(String itemName, Pageable pageable) {
        Page<CartDto> page = cartRepository.selectByItemNameContaining(itemName, pageable);

        return page;
    }


    //    저장함수(수정함수)
    public Cart save(Cart cart) {

        Cart cart2 = cartRepository.save(cart);

        return cart2;
    }

    //    조인 상세조회(1건조회)
    public Optional<CartDto> selectByCartNo(int cartNo) {
        Optional<CartDto> optionalCart
                = cartRepository.selectByCartNo(cartNo);

        return optionalCart;
    }

    //    삭제함수
    public boolean removeById(int cartNo) {
        if(cartRepository.existsById(cartNo)) { // cartNo 있는지 확인
            cartRepository.deleteById(cartNo); // 삭제 진행
            return true;
        }
        return false;
    }
}
