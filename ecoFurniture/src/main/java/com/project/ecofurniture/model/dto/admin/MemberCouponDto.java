package com.project.ecofurniture.model.dto.admin;

import com.project.ecofurniture.model.entity.admin.coupon.Coupon;
import com.project.ecofurniture.model.entity.auth.User;

/**
 * packageName : com.project.ecofurniture.model.dto.admin
 * fileName : MemberCouponDto
 * author : GB_Jo
 * date : 2023-11-23
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
public interface MemberCouponDto {


    public Integer getMCouponId();

    public Integer getCouponId();

    public String getIsUsed();

    public User getUser();

    public Coupon getCoupon();


}
