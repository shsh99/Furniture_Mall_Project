package com.project.ecofurniture.repository.shop.cart;

import com.project.ecofurniture.model.dto.shop.CartDto;
import com.project.ecofurniture.model.entity.shop.cart.Cart;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * packageName : com.project.ecofurniture.repository.shop.cart
 * fileName : CartRepository
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
@Repository
public interface CartRepository extends JpaRepository<Cart,Integer> {
    //    like 검색 : 상품테이블(TB_SIMPLE_PRODUCT) 조인
    @Query(value = "SELECT SC.ITEM_NO AS itemNo " +
            "      ,SI.ITEM_NAME AS itemName " +
            "      ,SI.ITEM_PRICE AS itemPrice " +
            "      ,SI.IMG_PATH AS imgPath " +
            "      ,SC.CART_NO AS cartNo " +
            "      ,SC.AMOUNT AS amount " +
            "      ,SC.CART_ALL_PRICE AS cartAllPrice " +
            "FROM TB_SHOP_ITEMS SI , TB_SHOP_CART SC " +
            "WHERE SI.ITEM_NO = SC.ITEM_NO " +
            "AND SI.ITEM_NAME LIKE '%' || :itemName || '%' " +
            "AND SC.DELETE_YN = 'N'"
            , countQuery = "SELECT COUNT(*) " +
            "FROM TB_SHOP_ITEMS SI , TB_SHOP_CART SC " +
            "WHERE SI.ITEM_NO = SC.ITEM_NO " +
            "AND SI.ITEM_NAME LIKE '%' || :itemName || '%' " +
            "AND SC.DELETE_YN = 'N'"
            , nativeQuery = true)
    Page<CartDto> selectByItemNameContaining(
            @Param("itemName") String itemName,
            Pageable pageable
    );

    //    상품 + 장바구니(조인) 상세조회 : 페이징없음(객체)
    @Query(value = "SELECT SC.CART_NO AS cartNo " +
            "        ,SI.ITEM_NAME AS itemName " +
            "        ,SI.IMG_PATH AS imgPath " +
            "        ,SI.ITEM_PRICE AS itemPrice " +
            "        ,SC.AMOUNT AS amount " +
            "FROM TB_SHOP_ITEMS SI , TB_SHOP_CART SC " +
            "WHERE SI.ITEM_NO = SC.ITEM_NO " +
            "AND SC.CART_NO = :cartNo " +
            "AND SC.DELETE_YN = 'N'", nativeQuery = true)
    Optional<CartDto> selectByCartNo(@Param("cartNo") int cartNo);
}
