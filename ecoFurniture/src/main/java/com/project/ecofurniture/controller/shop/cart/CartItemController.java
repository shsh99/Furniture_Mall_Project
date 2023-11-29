//package com.project.ecofurniture.controller.shop.cart;
//
//import com.project.ecofurniture.model.entity.auth.User;
//import com.project.ecofurniture.model.entity.shop.item.Item;
//import com.project.ecofurniture.service.shop.cart.CartSerivce;
//import com.project.ecofurniture.service.shop.item.ItemService;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
///**
// * packageName : com.project.ecofurniture.controller.shop.cart
// * fileName : CartItemController
// * author : GB_Jo
// * date : 2023-11-28
// * description :
// * 요약 :
// * <p>
// * ===========================================
// */
//@RestController
//@Slf4j
//@RequestMapping("/api/shop")
//public class CartItemController {
//
//    @Autowired
//    ItemService itemService;
//    @Autowired
//    CartSerivce cartSerivce;
//
//    // 장바구니에 물건 넣기
//    @PostMapping("/cart/{cartItemNo}/{itemNo}")
//    public String addCartItem(@PathVariable("email") Integer email, @PathVariable("itemNo") Integer itemNo, int amount) {
//
//        User user = userPageService.findUser(email);
//        Item item = itemService.itemView(itemNo);
//
//        cartSerivce.addCart(user, item, amount);
//
//        return "redirect:/item/view/{itemNo}";
//    }
//}
