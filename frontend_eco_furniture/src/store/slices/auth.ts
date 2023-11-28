// auth.ts : 공유함수 정의
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../service/auth/authService';
import IAuth from '../../types/auth/IAuth';
import IUser from '../../types/auth/IUser';

// TODO: 공유함수 정의(회원가입, 로그인, 로그아웃)
// 로컬스토리지에서 user 라는 키이름으로 값 가져오기 : 결과 (문자열) -> 객체로 변환
// user : 웹토큰 있음
// 사용법 : JSON.parse(문자열객체) => 문자열객체 -> 실제객체로 변환
const user = JSON.parse(localStorage.getItem('user') || 'null');

//  리덕스 공유함수 공유저장소에 비동기 함수 정의 및 async ~ await 코딩
// 비동기함수 처리 Promise 보다 조금 더 간략한 JS 비동기 코딩 방식인 async ~ await TODO: 채택

// TODO : 회원가입 공유함수(비동기함수)
// 백엔드랑 연동을 위해 createAsyncThunk 함수를 정의
export const register = createAsyncThunk(
	'auth/register', // 함수명
	async (user: IUser, thunkAPI) => {
		// 비동기함수
		try {
			// TODO: 프론트 user 데이터 확인하기
			console.log("프론트", user);
			const response = await authService.register(user); // 백엔드 회원가입함수 요청(실행)
			// TODO: 백엔드 response 데이터 확인하기
			console.log("백엔드", response.data);
			return response.data; // 백엔드 결과값 리턴
		} catch (error: any) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			//  thunkAPI 역할 : 에러메세지 처리 -> thunkAPI.rejectWithValue(에러메세지)
			alert(
				'회원가입 에러가 발생하였습니다. 홈페이지 담당자에게 문의바랍니다.'
			);
			return thunkAPI.rejectWithValue(
				'register 시 에러가 발생하였습니다.'
			);
		}
	}
);

// TODO : 로그인 공유함수(비동기함수)
export const login = createAsyncThunk(
	'auth/login', // 함수명
	async (user: IUser, thunkAPI) => {
		// 비동기함수
		try {
			const data = await authService.login(user); // 백엔드 login 요청(실행)
			return { user: data }; // 백엔드 결과값 리턴
		} catch (error: any) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			alert('로그인 실패하였습니다.');
			return thunkAPI.rejectWithValue('login 시 에러가 발생했습니다.');
		}
	}
);

// TODO : 로그아웃 공유함수(비동기함수)
export const logout = createAsyncThunk('auth/logout', async () => {
	await authService.logout(); // 로그아웃 함수 실행(리턴값 없음 : 백엔드 요청 할 필요없어서 하드 코딩)
});

// TODO: 공유변수 정의
const initialState: IAuth = user
	? // 3항연산자
	  { isLoggedIn: true, user } // user 가 있으면(로그인했으면) initialState = { isLoggedIn: true, user: user }
	: { isLoggedIn: false, user: null }; // user 가 없으면(로그아웃했으면) initialState = { isLoggedIn: false, user: null }

//  현재 계정의 접속 상태 관리 코드
//  실제 공유저장소 (리듀서 정의) : 공유변수의 값을 정의
const authSlice = createSlice({
	name: 'auth', // 1) 리듀서 이름 : auth
	initialState, // 2) 위에서 3항연산자로 정의한 초기객체

	// 3) reducers : 동기함수 정의 : 현재 사용하지 않음
	// 4) extraReducers : 비동기함수 정의시 사용 : register, login, logout 은 모두 비동기 함수임
	reducers: {},
	extraReducers: (builder) => {
		builder

			.addCase(register.fulfilled, (state) => {
				// register(회원가입) 성공 -> isLoggedIn = false 저장
				state.isLoggedIn = false;
			})

			.addCase(register.rejected, (state) => {
				// register(회원가입) 실패 -> isLoggedIn = false 저장
				state.isLoggedIn = false;
			})

			.addCase(login.fulfilled, (state, action) => {
				// login(로그인) 성공 -> (state.)isLoggedIn = true 저장
				state.isLoggedIn = true;
				// login(로그인) 성공 -> (state.)user = (action.payload.)user 객체 저장
				state.user = action.payload.user;
			})

			.addCase(login.rejected, (state, action) => {
				// login(로그인) 실패 -> (state.)isLoggedIn = false 저장
				state.isLoggedIn = false;
				// login(로그인) 실패 -> (state.)user = null 저장
				state.user = null;
			})

			.addCase(logout.fulfilled, (state) => {
				// logout(로그인) 성공 -> (state.)isLoggedIn = false 저장
				state.isLoggedIn = false;
				// logout(로그인) 성공 -> (state.)user = null 저장
				state.user = null;
			});
	},
});

export default authSlice.reducer;
