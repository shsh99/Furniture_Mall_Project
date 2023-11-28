// Login.tsx : 로그인 페이지

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import '../../assets/css/login.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { RootState, useAppDispatch } from '../../store/store';
import { login } from '../../store/slices/auth';
import IUser from '../../types/auth/IUser';

// 1) 로그인 로직
// 2) 유효성 체크 lib 사용 : Yup & Formik
function Login() {
	// TODO: 변수 정의
	// 강제 페이지 이동 함수
	let navigate = useNavigate();

	// 공유저장소 변수(state.변수명) 가져오기
	// 로그인 정보 상태 변수(true/false)
	const { isLoggedIn } = useSelector((state: RootState) => state.auth);

	// 공유저장소 함수 가져오기
	const dispatch = useAppDispatch();

	// 유효성 체크 대상 (email, password : input태그(==Field태그))
	// Formik 객체 초기화(initialValues) : html 태그에서 사용함
	const initialValues = {
		email: '',
		password: '',
	};

	// TODO: 함수 정의

	// TODO : 유효성 체크 lib 함수(Formit lib : validationSchema)
	// TODO : validationSchema : 유효성 체크 규칙을 정의
	// 사용법 : validationSchema = Yup.object().shape({요효성체크규칙})
	const validationSchema = Yup.object().shape({
		// Yup 스키마 사용
		// email 유효성 규칙 : required(에러메세지) => 필수필드
		// string() : 자료형이 문자열인가? 체크
		email: Yup.string().required('email 은 필수 입력입니다.'),
		// password 유효성 규칙 : required(에러메세지) => 필수필드
		password: Yup.string().required('password 는 필수 입력입니다.'),
	});

	// isLoggedIn = true (로그인 상태변수(true/false))
	if (isLoggedIn) {
		navigate('/home'); // 로그인 성공 시 강제로 페이지 home 이동
	}

	// 로그인 버튼 클릭시 실행되는 함수 : Submit(Formit)
	// Formit lib 에서 자동으로 email, password 값을 넘겨줌
	const handleLogin = (formValue: any) => {
		// Formit 넘겨준 email, password 값 저장
		const { email, password } = formValue;

		// 임시 객체(data)
		const data: IUser = {
			email, // 이메일(아이디)
			password, // 패스워드
			username: '', // 이름
			gender: '', // 성별
			birthday: '', // 생년월일
			phone: '', // 휴대전화번호
			address: '', // 주소
			codeName: 'ROLE_USER', // 일반유저 권한(하드코딩)
		};

		// TODO : 백엔드 로그인 함수(공유 로그인 함수) 호출
		dispatch(login(data))
			// unwrap : 리덕스의 공유함수 에러처리를 실행하게 하는 함수
			// 즉 비동기 액션 호출 및 Promise를 언랩하여 실제 값 또는 에러를 처리를 함
			.unwrap()
			// then, catch 콜백 함수
			.then(() => {
				alert('로그인 성공했습니다.');
				// 강제 /home 페이지 이동
				navigate('/home');
				// js : 페이지 새로고침 코드
				window.location.reload();
			})
			.catch((e: Error) => {
				alert('로그인을 실패하였습니다.');
			});
	};

	return (
		// TODO: JSX
		<div>
			<div className="row justify-content-center">
				<div className="col-xl-10 col-lg-12 col-md-9">
					<div className="card mt-5">
						<div className="card-body p-0">
							{/* <!-- Nested Row within Card Body --> */}
							<div className="row">
								<div className="col-lg-6 bg-login-image"></div>
								<div className="col-lg-6">
									<div className="p-5">
										<div className="text-center">
											<h1 className="h4 mb-4">
												Welcome Back!
											</h1>
										</div>
										{/* validationSchema : Formik 유효성체크 함수 */}
										<Formik // 유효성 체크가 있는 Formik lib
											initialValues={initialValues} // 객체(체크 대상 : email,password) 초기값
											validationSchema={validationSchema} // 유효성 체크 함수
											onSubmit={handleLogin} //  로그인함수 실행(백엔드 전송)
										>
											{/* Form : form 태그와 같음 */}
											{/* Field : input 태그와 같음 */}
											{/* errors.속성명 : 에러발생하면 메세지를 저장할 객체 */}
											{/* touched.속성명 : 현재 태그의 클릭 여부 (true/false) */}
											{({ errors, touched }) => (
												<Form className="user">
													{/* 이메일 필드 시작 */}
													<div className="form-group">
														<Field
															type="email"
															name="email"
															className={
																'form-control form-control-user mb-3' +
																/* email 필드에 클릭되고 동시에 에러가 있으면 화면에 빨간색을 표시 */
																(errors.email &&
																touched.email
																	? ' is-invalid'
																	: '')
															}
															placeholder="Enter Email Address..."
														/>
														{/* ErrorMessage : 화면에 email에 대한 에러메세지를 표함 */}
														<ErrorMessage
															name="email"
															component="div"
															className="invalid-feedback"
														/>
													</div>
													{/* 패스워드 필드 시작 */}
													<div className="form-group">
														<Field
															type="password"
															name="password"
															className={
																'form-control form-control-user mb-3' +
																/* password 필드에 클릭되고 동시에 에러가 있으면 화면에 빨간색을 표시 */
																(errors.password &&
																touched.password
																	? ' is-invalid'
																	: '')
															}
															id="exampleInputPassword"
															placeholder="Password"
														/>
														{/* ErrorMessage : 화면에 password 대한 에러메세지를 표함 */}
														<ErrorMessage
															name="password"
															component="div"
															className="invalid-feedback"
														/>
													</div>

													<button
														type="submit"
														className="btn btn-primary btn-user w-100 mb-3"
													>
														Login
													</button>
													<hr />
													<a
														href="/"
														className="btn btn-google btn-user w-100 mb-2"
													>
														<i className="fab fa-google fa-fw"></i>
														&nbsp;Login with Google
													</a>
													<a
														href="/"
														className="btn btn-naver btn-user w-100 mb-2"
													>
														<i className="fa-solid fa-n"></i>
														&nbsp;Login with Naver
													</a>
													<a
														href="/"
														className="btn btn-kakao btn-user w-100 mb-3"
													>
														<i className="fa-solid fa-k"></i>
														&nbsp;Login with Kakao
													</a>
												</Form>
											)}
										</Formik>
										<hr />

										<div className="text-center">
											<a
												className="small"
												href="/forgot-password"
											>
												비밀번호 찾기
											</a>
										</div>
										<div className="text-center">
											<a
												className="small"
												href="/register"
											>
												계정이 없으신가요? 지금 바로
												만들어보세요:
											</a>
											<br />
											<a type="submit">
												회원가입을 하시면 다양하고
												특별한 혜택이 준비되어 있습니다.
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
