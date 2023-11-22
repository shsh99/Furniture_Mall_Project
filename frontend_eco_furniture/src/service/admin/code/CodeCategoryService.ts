// CodeCategoryService.ts : 공통코드(부모테이블) CRUD 함수

import ICodeCategory from "../../../types/admin/code/ICodeCategory";
import http from "../../../utils/http-common";

// 전체 조회 + like 검색(paging 기능)
const getAll = (codeCategoryName:string, page:number, size:number) => {
  return http.get<Array<ICodeCategory>>(`/admin/code-category?codeCategoryName=${codeCategoryName}&page=${page}&size=${size}`);
};
// 전체 조회 : 페이징 없는 함수
const getAllNoPage = () => {
    return http.get<Array<ICodeCategory>>("/admin/code-category/all");
}

// 상세 조회
const get = (categoryId:any) => {
  return http.get<ICodeCategory>(`/admin/code-category/${categoryId}`);
};

// 저장 함수
const create = (data:ICodeCategory) => {
  return http.post<ICodeCategory>("/admin/code-category", data);
};


const CodeCategoryService = {
  getAll,
  getAllNoPage,
  get,
  create
};

export default CodeCategoryService;
