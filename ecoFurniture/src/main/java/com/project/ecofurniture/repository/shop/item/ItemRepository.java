package com.project.ecofurniture.repository.shop.item;

import com.project.ecofurniture.model.entity.shop.item.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * packageName : com.project.ecofurniture.repository.shop.item
 * fileName : ItemRepository
 * author : GB_Jo
 * date : 2023-11-27
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {

    Page<Item> findAllByItemNameContaining(String itemName, Pageable pageable);

}
