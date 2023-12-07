package com.project.ecofurniture.service.admin.coupon;

import com.project.ecofurniture.model.entity.admin.code.Code;
import com.project.ecofurniture.model.entity.admin.coupon.Coupon;
import com.project.ecofurniture.model.entity.board.faq.Faq;
import com.project.ecofurniture.repository.admin.coupon.CouponRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.project.ecofurniture.service.admin.coupon
 * fileName : CouponService
 * author : GB_Jo
 * date : 2023-11-23
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@Service
public class CouponService {
    @Autowired
    CouponRepository couponRepository;

    //전체 조회
    public Page<Coupon> findAllPage(Pageable pageable){
        Page<Coupon> page = couponRepository.findAllBy(pageable);
        return page;
    }

    /** 상세 조회 */
    public Optional<Coupon> findById(int couponId){
        Optional<Coupon> optionalCoupon = couponRepository.findById(couponId);
        return optionalCoupon;
    }

    // 저장(수정) 함수
    public Coupon save(Coupon coupon) {
        Coupon coupon2 = couponRepository.save(coupon);
        return coupon2;
    }

    // 삭제 함수
    public boolean removeById(int CouponId) {
        if (couponRepository.existsById(CouponId)) {
            couponRepository.deleteById(CouponId);
            return true;
        }
        return false;
    }

}
