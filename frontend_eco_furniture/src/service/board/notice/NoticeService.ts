// NoticeService.ts : axios 공통 CRUD 함수
// axios 공통함수 : 백엔드 연동

import INotice from '../../../types/board/notice/INotice';
import http from '../../../utils/http-common';

// 전체 조회 + like 검색(paging 기능: page(현재페이지), size(1페이지당개수))
const getAll = (noticeTitle: string, page: number, size: number) => {
	return http.get<Array<INotice>>(
		`/board/notice?noticeTitle=${noticeTitle}&page=${page}&size=${size}`
	);
};

// 상세 조회
const get = (noticeNo: any) => {
	return http.get<INotice>(`/board/notice/${noticeNo}`);
};

// 저장 함수
const create = (data: INotice) => {
	return http.post<INotice>('/board/notice', data);
};

// 수정 함수
const update = (noticeNo: any, data: INotice) => {
	return http.put<any>(`/board/notice/${noticeNo}`, data);
};

// 삭제 함수
const remove = (noticeNo: any) => {
	return http.delete<any>(`/board/notice/deletion/${noticeNo}`);
};

const NoticeService = {
	getAll,
	get,
	create,
	update,
	remove,
};

export default NoticeService;
