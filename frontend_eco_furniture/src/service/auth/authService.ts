// authService.ts : axios 백엔드 통신 공통 함수(register, login, logout)
// http 헤더에 웹토큰 넣어 백엔드로 조회요청 해야 함(인증 성공이 뜸)

import IUser from '../../types/auth/IUser';
import http from '../../utils/http-common';

// 회원가입(register, signup) 함수(insert)
const register = (user: IUser) => {
	return http.post('/auth/signup', user);
};

// 로그아웃 함수 : 로컬스토리지에서 값 제거
const logout = () => {
	localStorage.removeItem('user');
};

// TODO : 로그인 함수 : (login, signin) : 조회(get) why? 보안 떄문에
// get -> 웹브라우저 주소창에 요청 변수 또는 주소값이 나타남
// TODO : post -> 웹브라우저 주소창에 정보가 나타나지 않음(보안)
const login = (user: IUser) => {
	return http
		.post('/auth/signin', user) // 백엔드 함수 실행
		.then((response: any) => {
			// 성공 : 백엔드에서 웹토큰 발행해서 전송해줌
			// 백엔드 : 웹토큰 + 유저이름 + 유저권한 등
			if (response.data.accessToken) {
				// 로컬 스토리지에(객체(response.data) -> 문자열(JSON.stringify) 변환) 저장
				localStorage.setItem('user', JSON.stringify(response.data));
			}
			return response.data; // 백엔드 정보
		});
};

const authService = {
	register,
	login,
	logout,
};
export default authService;