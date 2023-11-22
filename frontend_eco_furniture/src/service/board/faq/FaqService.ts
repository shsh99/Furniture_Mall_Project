// FaqService.ts : axios 공통 CRUD 함수
// axios 공통함수 : 백엔드 연동

import IFaq from "../../../types/board/faq/IFaq";
import http from "../../../utils/http-common";

// 전체 조회 + like 검색(paging 기능 : page(현재페이지), size(1페이지당개수))
const getAll = (faqTitle:string, page:number, size:number) => {
    return http.get<Array<IFaq>>(`/board/faq?faqTitle=${faqTitle}&page=${page}&size=${size}`);
  };
  
  // 상세 조회
  const get = (faqNo:any) => {
    return http.get<IFaq>(`/board/faq/${faqNo}`);
  };
  
  // 저장함수
  const create = (data:IFaq) => {
    return http.post<IFaq>("/board/faq", data);
  };

  // 수정함수
  const update = (faqNo:any, data:IFaq) => {
    return http.put<any>(`/board/faq/${faqNo}`, data);
  };
  
  // 삭제함수
  const remove = (faqNo:any) => {
    return http.delete<any>(`/board/faq/deletion/${faqNo}`);
  };
  
  const FaqService = {
    getAll,
    get,
    create,
    update,
    remove,
  };
  
  export default FaqService;