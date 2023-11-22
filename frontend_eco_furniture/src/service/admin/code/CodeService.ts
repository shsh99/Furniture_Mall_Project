// CodeService.ts : 공통코드(자식테이블) CRUD 함수

import ICode from "../../../types/admin/code/ICode";
import http from "../../../utils/http-common";

// 전체 조회 + like 검색(paging 기능)
const getAll = (codeName:string, page:number, size:number) => {
  return http.get<Array<ICode>>(`/admin/code?codeName=${codeName}&page=${page}&size=${size}`);
};

// 전체 조회 : 페이징 처리 안됨
const getAllnoPage = () => {
    return http.get<Array<ICode>>("/admin/code/all")
}

// 상세 조회
const get = (codeId:any) => {
  return http.get<ICode>(`/admin/code/${codeId}`);
};

// 저장 함수
const create = (data:ICode) => {
  return http.post<ICode>("/admin/code", data);
};

// 수정 함수
const update = (codeId:any, data:ICode) => {
  return http.put<any>(`/admin/code/${codeId}`, data);
};

// 삭제 함수
const remove = (codeId:any) => {
  return http.delete<any>(`/admin/code/deletion/${codeId}`);
};

const CodeService = {
  getAll,
  getAllnoPage,
  get,
  create,
  update,
  remove,
};

export default CodeService;
