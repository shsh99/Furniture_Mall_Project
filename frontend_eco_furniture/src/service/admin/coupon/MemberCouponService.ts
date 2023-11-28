import IMemberCoupon from "../../../types/admin/coupon/IMemberCoupon";
import http from "../../../utils/http-common";

// 전체 조회 (paging 기능)
const getAll = (page:number, size:number) => {
    return http.get<Array<IMemberCoupon>>(`/admin/member-coupon?page=${page}&size=${size}`);
  };

  const MemberCouponService = {
    getAll

  };
  
  export default MemberCouponService;