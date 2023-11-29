package com.project.ecofurniture.repository.admin.coupon;


import com.project.ecofurniture.model.dto.admin.MemberCouponDto;
import com.project.ecofurniture.model.entity.admin.coupon.MemberCoupon;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.project.ecofurniture.repository.admin.coupon
 * fileName : MemberCouponRepository
 * author : GB_Jo
 * date : 2023-11-23
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@Repository
public interface MemberCouponRepository extends JpaRepository<MemberCoupon,Integer> {
    // 전체조회
    @Query(value = "SELECT CP.COUPON_NAME AS couponName " +
            "      ,CP.DISCOUNT_VALUE AS discountValue " +
            "      ,CP.COUPON_END_TIME AS couponEndTime " +
            "FROM TB_MEMBER_COUPON MCP " +
            "JOIN TB_COUPON CP ON MCP.COUPON_ID = CP.COUPON_ID " +
            "JOIN TB_SHOP_CUSTOMERS SC ON MCP.CUST_EMAIL = SC.CUST_EMAIL ", countQuery = "SELECT COUNT(*) " +
            "FROM TB_MEMBER_COUPON MCP " +
            "JOIN TB_COUPON CP ON MCP.COUPON_ID = CP.COUPON_ID " +
            "JOIN TB_SHOP_CUSTOMERS SC ON MCP.CUST_EMAIL = SC.CUST_EMAIL" , nativeQuery = true)
    Page<MemberCouponDto> findAllPage(Pageable pageable);
}
