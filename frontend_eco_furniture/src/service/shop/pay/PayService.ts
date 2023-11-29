// axios 공통함수 : 백엔드 연동
import IPay from "../../../types/shop/pay/IPay";
import http from "../../../utils/http-common";





// 저장 함수
const create = (data:IPay) => {
  return http.post<IPay>("/payment", data);
};



// 삭제 함수
const remove = (itemNo:any, Email:any) => {
  return http.delete<any>(`/payment`);
};

const PayService = {
 
  create,
  remove,
};

export default PayService;
