package com.project.ecofurniture.repository.admin.coupon;

import com.project.ecofurniture.model.dto.admin.MemberCouponDto;
import com.project.ecofurniture.model.entity.admin.coupon.Coupon;
import com.project.ecofurniture.model.entity.admin.coupon.MemberCoupon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MemberCouponRepository extends JpaRepository<MemberCoupon,Integer> {


}
