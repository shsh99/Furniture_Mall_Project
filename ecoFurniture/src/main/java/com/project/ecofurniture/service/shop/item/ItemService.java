package com.project.ecofurniture.service.shop.item;

import com.project.ecofurniture.model.entity.shop.item.Item;
import com.project.ecofurniture.repository.shop.item.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.project.ecofurniture.service.shop.item
 * fileName : itemService
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
public class ItemService {
    @Autowired
    ItemRepository itemRepository; // DI

    //   ItemName like 검색
    public Page<Item> findAllByItemNameContaining(String itemName, Pageable pageable) {
        Page<Item> page
                = itemRepository.findAllByItemNameContaining(itemName, pageable);

        return page;
    }

    //    상세조회(1건조회)
    public Optional<Item> findById(int itemNo) {
        Optional<Item> optionalSimpleProduct
                = itemRepository.findById(itemNo);

        return optionalSimpleProduct;
    }

    //    저장함수(수정함수)
    public Item save(Item item) {

        Item item2 = itemRepository.save(item);

        return item2; // 저장된 객체
    }
}
