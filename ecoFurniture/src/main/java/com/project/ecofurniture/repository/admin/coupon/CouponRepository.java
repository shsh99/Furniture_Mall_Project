package com.project.ecofurniture.repository.admin.coupon;

import com.project.ecofurniture.model.entity.admin.coupon.Coupon;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.project.ecofurniture.repository.admin.coupon
 * fileName : CouponRepository
 * author : GB_Jo
 * date : 2023-11-23
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@Repository
public interface CouponRepository extends JpaRepository<Coupon, Integer> {
  // 전체 조회
  Page<Coupon> findAllBy(Pageable pageable);


  Optional<Coupon> findById(Integer couponId);
}
