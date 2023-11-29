package com.project.ecofurniture.model.dto.admin;

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

    public String getCouponName();

    public Integer getDiscountValue();

    public String getCouponEndTime();

    public String getCustEmail();

}
