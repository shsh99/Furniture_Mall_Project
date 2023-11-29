package com.project.ecofurniture.repository.shop.itemImages;

import com.project.ecofurniture.model.entity.shop.itemImages.ItemImages;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.project.ecofurniture.repository.shop.itemImages
 * fileName : ItemImagesRepository
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
@Repository
public interface ItemImagesRepository extends JpaRepository<ItemImages, String> {
     Page<ItemImages> findAllByImgTitleContaining(String imgTitle, Pageable pageable);
}
