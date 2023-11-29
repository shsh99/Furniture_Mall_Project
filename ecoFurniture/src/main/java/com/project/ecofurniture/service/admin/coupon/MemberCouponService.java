package com.project.ecofurniture.service.admin.coupon;

import com.project.ecofurniture.model.dto.admin.MemberCouponDto;
import com.project.ecofurniture.repository.admin.coupon.MemberCouponRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * packageName : com.project.ecofurniture.service.admin.coupon
 * fileName : MemberCouponService
 * author : GB_Jo
 * date : 2023-11-23
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@Service
public class MemberCouponService {
    @Autowired
    MemberCouponRepository memberCouponRepository;

    public Page<MemberCouponDto> findAllPage(Pageable pageable){
        Page<MemberCouponDto> page = memberCouponRepository.findAllPage(pageable);
        return page;

    }

}
