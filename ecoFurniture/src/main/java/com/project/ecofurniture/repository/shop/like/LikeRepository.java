package com.project.ecofurniture.repository.shop.like;

import com.project.ecofurniture.model.entity.auth.User;
import com.project.ecofurniture.model.entity.shop.item.Item;
import com.project.ecofurniture.model.entity.shop.like.Like;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * packageName : com.project.ecofurniture.repository.shop.like
 * fileName : LikeRepository
 * author : GB_Jo
 * date : 2023-11-27
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@Transactional(readOnly = true)
@Repository
public interface LikeRepository extends JpaRepository<Like,Integer> {
    Optional<Like> findByUserAndItem(Integer itemNo, String email);
    void deleteByUserAndItem(Integer itemNo, String email);
}
