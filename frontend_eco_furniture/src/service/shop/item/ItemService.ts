import IItem from "../../../types/shop/item/IItem";
import http from "../../../utils/http-common";


// 전체 조회 + like 검색(paging 기능 : page(현재페이지), size(1페이지당개수))
const getAll = (itemName:string, page:number, size:number) => {
    return http.get<Array<IItem>>(`/shop/item?itemName=${itemName}&page=${page}&size=${size}`);
  };
  
  // 상세 조회
  const get = (itemNo:any) => {
    return http.get<IItem>(`/shop/item/${itemNo}`);
  };
  
  // 저장함수
  const create = (data:IItem) => {
    console.log("create", data);
    return http.post<IItem>("/shop/item", data);
  };
  // 수정함수
  const update = (itemNo:any, data:IItem) => {
    return http.put<any>(`/shop/item/${itemNo}`, data);
  };
  // 삭제함수
  const remove = (itemNo:any) => {
    return http.delete<any>(`/shop/item/deletion/${itemNo}`);
  };
  
  const ItemService = {
    getAll,
    get,
    create,
    update,
    remove,
  };

export default ItemService;