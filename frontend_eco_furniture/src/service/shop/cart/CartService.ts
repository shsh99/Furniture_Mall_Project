// axios 공통함수 : 백엔드 연동
import ICart from "../../../types/shop/cart/ICart";
import IPay from "../../../types/shop/pay/IPay";
import http from "../../../utils/http-common";





// 저장 함수
const create = (data:ICart) => {
  return http.post<ICart>("/cart", data);
};



// 삭제 함수
const remove = (itemNo:any, Email:any) => {
  return http.delete<any>(`/cart`);
};

const CartService = {
 
  create,
  remove,
};

export default CartService;
