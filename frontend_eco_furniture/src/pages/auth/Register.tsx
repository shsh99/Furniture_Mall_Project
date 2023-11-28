// Register.tsx : 회원가입 페이지

import React, { useState } from 'react';
import '../../assets/css/login.css';

// TODO: 유효성 체크 lib
import { Form, ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import IUser from '../../types/auth/IUser';
import { useAppDispatch } from '../../store/store';
import { register } from '../../store/slices/auth';
import { useNavigate } from 'react-router-dom';

function Register() {
	// TODO: 변수 정의

	// 강제 페이지 이동 함수
	let navigate = useNavigate();

	// 회원생성 성공 여부 변수
	const [successful, setSuccessful] = useState<boolean>(false);
	// 화면에 메세지 출력할 변수
	const [message, setMessage] = useState<string>('');

	// 공유저장소 공유함수(register) 가져오기
	const dispatch = useAppDispatch();

	// 회원가입 조건
	// 객체 초기화 : 속성(Formik) 체크
	const initialValues = {
		email: '', // 이메일(아이디)
		password: '', // 패스워드
		repassword: '', // 패스워드 재확인: 위 암호와 입력 값이 일치해야 함
		username: '', // 이름
		gender: '', // 성별
		birthday: '', // 생년월일
		phone: '', // 휴대전화번호
		address: '', // 주소
	};
	// TODO: 함수 정의
	// 유효성 체크 함수 : validationSchema(Formik & Yup 함수)
	// 에러에 대한 정의를 함수
	const validationSchema = Yup.object().shape({
		/* 이메일(아이디) */
		email: Yup.string()
			.email('이메일 주소를 입력해 주세요.') // email 틀리면
			.required('*이메일(아이디) : 필수 정보입니다.'), // email 필수 입력

		/* 패스워드 */
		password: Yup.string()
			.min(6, '6자리 이상 입력하세요.')
			.required('패스워드 : 필수 입력입니다.'), // password 필수 입력
		repassword: Yup.string().oneOf(
			// repassword != password
			[Yup.ref('password')],
			'패스워드가 일치하지 않습니다.'
		),

		/* 이름 */
		username: Yup.string()
			// 유효성 조건을 개발자 직접 작성하는 함수
			.test(
				'len',
				'이름은 2 ~ 20사이에 글자만 입력됩니다.',
				// 유효성 체크 조건
				(val) => {
					if (
						val &&
						val.toString().length >= 2 &&
						val.toString().length <= 20
					) {
						return true;
					}
					return false;
				}
			)
			.required('*이름 : 필수 입력입니다.'), // name 필수 입력

		/* 주소 */
		address: Yup.string().required('필수 입력입니다.'),

		/* 휴대전화번호 */
		phone: Yup.string().length(11, '번호를 다시 확인해주세요.'),

		/* 생년월일 */
		birthday: Yup.string().length(8, '다시 확인해주세요.'),
	});

	// 회원 가입 함수 : Formik 의 onSubmit(저장) 함수 바인딩
	//  formValue : (email, password, username, repassword)
	const handleRegister = (formValue: any) => {
		// TODO: 화면에 입력 값 임시변수
		const { email, password, username, phone, gender, birthday, address } =
			formValue;

		// 임시 객체
		const data: IUser = {
			email, // 이메일(아이디)
			password, // 패스워드
			username: username, // 이름
			gender: gender, // 성별
			birthday: birthday, // 생년월일
			phone: phone, // 휴대전화번호
			address: address, // 주소
			codeName: 'ROLE_USER', // 일반유저 권한(하드코딩)
		};

		// 성공여부 변수 초기화
		setSuccessful(false);
		// todo: 백엔드 저장 요청 : 공유함수(register)
		dispatch(register(data))
			.unwrap() // 공유저장소 에러처리
			.then(() => {
				setSuccessful(true);
				// setMessage('회원 가입이 완료되었습니다.');
				alert('회원가입이 완료되었습니다.');
				navigate('/login'); // 로그인 성공 시 강제로 페이지 home 이동
			})
			.catch((e: Error) => {
				console.log(e);
				setSuccessful(false);
			});
	};

	return (
		// TODO: TSX
		<div>
			<div className="card mt-5">
				<div className="card-body p-0">
					{/* <!-- Nested Row within Card Body --> */}
					<div className="row">
						<div className="col-lg-5 bg-register-image"></div>
						<div className="col-lg-7">
							<div className="p-5">
								<div className="text-center">
									<h1 className="h4 text-gray-900 mb-4">
										회원가입
									</h1>
								</div>
								<Formik
									initialValues={initialValues}
									validationSchema={validationSchema}
									onSubmit={handleRegister}
								>
									{({ errors, touched }) => (
										<Form className="user">
											{!successful && (
												<div>
													{/* 이메일(아이디) 입력창 시작 */}
													<div className="form-group">
														<Field
															type="email"
															name="email"
															className={
																'form-control form-control-user mb-3' +
																(errors.email &&
																touched.email
																	? ' is-invalid'
																	: '')
															}
															id="email"
															placeholder="이메일"
														/>
														<ErrorMessage
															name="email"
															component="div"
															className="invalid-feedback"
														/>
													</div>
													{/* 이메일(아이디) 입력창 끝 */}

													{/* 패스워드 입력창 시작 */}
													<div className="form-group row">
														<div className="col-sm-6 mb-3 mb-sm-0">
															<Field
																type="password"
																name="password"
																className={
																	'form-control form-control-user mb-3' +
																	(errors.password &&
																	touched.password
																		? ' is-invalid'
																		: '')
																}
																id="password"
																placeholder="비밀번호"
															/>
															<ErrorMessage
																name="password"
																component="div"
																className="invalid-feedback"
															/>
														</div>
														{/* 패스워드 재확인 입력창 시작 */}
														<div className="col-sm-6">
															<Field
																type="password"
																name="repassword"
																className={
																	'form-control form-control-user mb-3' +
																	(errors.repassword &&
																	touched.repassword
																		? ' is-invalid'
																		: '')
																}
																id="repassword"
																placeholder="비밀번호 재확인"
															/>
															<ErrorMessage
																name="repassword"
																component="div"
																className="invalid-feedback"
															/>
														</div>
														{/* 패스워드 재확인 입력창 끝 */}
													</div>
													{/* 패스워드 입력창 끝 */}

													{/* 이름, 생년월일, 성별 입력창 시작 */}
													{/* 이름 입력창 시작 */}
													<div className="form-group row">
														<div className="col-sm-5 mb-3 mb-sm-0">
															<Field
																type="text"
																name="username"
																className={
																	'form-control form-control-user mb-3' +
																	(errors.username &&
																	touched.username
																		? ' is-invalid'
																		: '')
																}
																id="username"
																placeholder="이름"
															/>
															<ErrorMessage
																name="username"
																component="div"
																className="invalid-feedback"
															/>
														</div>
														{/* 이름 입력창 끝 */}

														{/* 생년월일 입력창 시작 */}
														<div className="col-sm-4">
															<Field
																type="text"
																name="birthday"
																className={
																	'form-control form-control-user mb-3' +
																	(errors.birthday &&
																	touched.birthday
																		? ' is-invalid'
																		: '')
																}
																id="birthday"
																placeholder="생년월일 (예 20001225)"
															/>
															<ErrorMessage
																name="birthday"
																component="div"
																className="invalid-feedback"
															/>
														</div>
														{/* 생년월일 입력창 끝 */}

														{/* 성별 입력창 시작 */}
														<div className="col-sm-3">
															<Field
																type="text"
																name="gender"
																className={
																	'form-control form-control-user mb-3' +
																	(errors.gender &&
																	touched.gender
																		? ' is-invalid'
																		: '')
																}
																id="gender"
																placeholder="성별"
															/>
															<ErrorMessage
																name="gender"
																component="div"
																className="invalid-feedback"
															/>
														</div>
														{/* 성별 입력창 끝 */}
													</div>

													{/* 이름, 생년월일, 성별 입력창 끝 */}

													{/* 휴대폰 입력창 시작 */}
													<div className="form-group">
														<Field
															type="text"
															name="phone"
															className={
																'form-control form-control-user mb-3' +
																(errors.phone &&
																touched.phone
																	? ' is-invalid'
																	: '')
															}
															id="phone"
															placeholder="휴대폰번호(숫자만)"
														/>
														<ErrorMessage
															name="phone"
															component="div"
															className="invalid-feedback"
														/>
													</div>
													{/* 휴대폰 입력창 끝 */}

													{/* 주소 입력창 시작 */}
													<div className="form-group">
														<Field
															type="text"
															name="address"
															className={
																'form-control form-control-user mb-3' +
																(errors.address &&
																touched.address
																	? ' is-invalid'
																	: '')
															}
															id="address"
															placeholder="주소"
														/>
														<ErrorMessage
															name="address"
															component="div"
															className="invalid-feedback"
														/>
													</div>
													{/* 주소 입력창 끝 */}

													<button
														type="submit"
														className="btn btn-primary btn-user w-100 mb-3"
													>
														계정 만들기
													</button>
												</div>
											)}

											{/* 성공하면 성공메세지 출력 시작 */}
											{successful && (
												<div
													className="alert alert-success text-center"
													role="alert"
												>
													{message}
												</div>
											)}
											{/* 성공하면 성공메세지 출력 끝 */}
										</Form>
									)}
								</Formik>

								<hr />
								<div className="text-center">
									<a href="/forgot-password">비밀번호 찾기</a>
								</div>
								<div className="text-center">
									<a href="/login">
										이미 가입하셨나요? 로그인 하기
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
