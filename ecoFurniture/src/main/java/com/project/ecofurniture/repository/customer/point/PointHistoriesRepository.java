package com.project.ecofurniture.repository.customer.point;

import com.project.ecofurniture.model.dto.customer.PointHistoriesDto;
import com.project.ecofurniture.model.entity.customer.point.PointHistories;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.project.ecofurniture.repository.customer.point
 * fileName : pointHistoriesRepository
 * author : GB_Jo
 * date : 2023-11-23
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@Repository
public interface PointHistoriesRepository extends JpaRepository<PointHistories,Integer> {

// 고객 이메일을 받고 거기에 있는 고객 포인트로 들어가기
    @Query(value = "SELECT SPH.POINT_STATUS AS pointStatus " +
            "     , SPH.POINT_CONTENT AS pointContent " +
            "     , SO.ORDER_USE_POINT AS orderUsePoint " +
            "     , SOP.ORDER_PRODUCT_POINT AS orderProductPoint " +
            "FROM TB_SHOP_POINT_HISTORIES SPH " +
            "JOIN TB_SHOP_CUSTOMERS SC ON SPH.CUST_EMAIL = SC.CUST_EMAIL " +
            "JOIN TB_SHOP_ORDERS SO ON SC.CUST_EMAIL = SO.CUST_EMAIL " +
            "JOIN TB_SHOP_ORDER_PRODUCTS SOP ON SO.ORDER_NO = SOP.ORDER_NO ", countQuery = "SELECT COUNT(*) " +
            "FROM TB_SHOP_POINT_HISTORIES SPH " +
            "JOIN TB_SHOP_CUSTOMERS SC ON SPH.CUST_EMAIL = SC.CUST_EMAIL " +
            "JOIN TB_SHOP_ORDERS SO ON SC.CUST_EMAIL = SO.CUST_EMAIL " +
            "JOIN TB_SHOP_ORDER_PRODUCTS SOP ON SO.ORDER_NO = SOP.ORDER_NO", nativeQuery = true)
    Page<PointHistoriesDto> findAllPage(Pageable pageable);

    
}
