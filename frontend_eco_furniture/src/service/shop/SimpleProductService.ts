// SimpleProductService.ts : axios 공통 crud 함수

import ISimpleProduct from "../../types/shop/ISimpleProduct";
import http from "../../utils/http-common";

// 전체 조회 + like 검색(paging 기능 : page(현재페이지), size(1페이지당개수))
const getAll = (title:string, page:number, size:number) => {
    return http.get<Array<ISimpleProduct>>(`/shop/simple-product?title=${title}&page=${page}&size=${size}`);
  };
  
  // 상세 조회
  const get = (spno:any) => {
    return http.get<ISimpleProduct>(`/shop/simple-product/${spno}`);
  };
  
  // 저장함수
  const create = (data:ISimpleProduct) => {
    console.log("create", data);
    return http.post<ISimpleProduct>("/shop/simple-product", data);
  };
  // 수정함수
  const update = (spno:any, data:ISimpleProduct) => {
    return http.put<any>(`/shop/simple-product/${spno}`, data);
  };
  // 삭제함수
  const remove = (spno:any) => {
    return http.delete<any>(`/shop/simple-product/deletion/${spno}`);
  };
  
  const SimpleProductService = {
    getAll,
    get,
    create,
    update,
    remove,
  };

export default SimpleProductService;