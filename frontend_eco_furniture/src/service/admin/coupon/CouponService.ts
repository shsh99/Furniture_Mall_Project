import ICoupon from "../../../types/admin/coupon/ICoupon";
import http from "../../../utils/http-common";

// 전체 조회 (paging 기능)
const getAll = (page:number, size:number) => {
    return http.get<Array<ICoupon>>(`/admin/coupon?page=${page}&size=${size}`);
  };
  
  // 상세 조회
  const get = (couponId:any) => {
    return http.get<ICoupon>(`/admin/coupon/${couponId}`);
  };
  
  // 저장 함수
  const create = (data:ICoupon) => {
    return http.post<ICoupon>("/admin/coupon", data);
  };
  
  // 수정 함수
  const update = (couponId:any, data:ICoupon) => {
    return http.put<any>(`/admin/code/${couponId}`, data);
  };
  
  // 삭제 함수
  const remove = (couponId:any) => {
    return http.delete<any>(`/admin/coupon/deletion/${couponId}`);
  };
  
  const CouponService = {
    getAll,
    get,
    create,
    update,
    remove,
  };
  
  export default CouponService;