/* C:\Work\07_Si\03_SimpleDMS_Login\01_Login\frontend-react-new\src\pages\auth\Register.tsx */
// Register.tsx 회원가입

// TODO: import
import React, { useState } from "react";
import "../../assets/css/login.css";
// TODO : 유효성 체크 lib
import { Form, ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function Register() {
  // TODO: 변수 정의
  // 회원생성 성공 여부 변수
  const [successful, setSuccessful] = useState<boolean>(false);
  // 화면에 메세지 출력할 변수
  const [message, setMessage] = useState<string>("");

  // TODO : 공유저장소 공유함수(register) 가져오기
  // const dispatch = useAppDispatch();

  // 객체 초기화 : 속성(Formik) 체크
  const initialValues = {
    custEmail: "",
    custName: "",
    custPassword: "",
    repassword: "", // 암호 재확인: 위 암호와 입력 값이 일치해야 함
    custPhone: "",
    custGender: "",
    custBirthday: "",
    custAddress: "",
  };
  // TODO: 함수 정의
  // 유효성 체크 함수 : validationSchema(Formik & Yup 함수)
  // 에러에 대한 정의를 함수
  const validationSchema = Yup.object().shape({
    custEmail: Yup.string()
      .email("이메일을 정확하게 작성하세요") // email 틀리면
      .required("필수 입력입니다."), // email 필수 입력

    custName: Yup.string()
      // 유효성 조건을 개발자 직접 작성하는 함수
      .test(
        "len",
        "이름은 2 ~ 20사이에 글자만 입력됩니다.",
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
      .required("필수 입력입니다."), // custName 필수 입력

    custPassword: Yup.string()
      .min(8, "8자리 이상 입력하세요.")
      .required("필수 입력입니다."), // custPassword 필수 입력
    repassword: Yup.string().oneOf(
      // repassword != password
      [Yup.ref("custPassword")],
      "패스워드가 일치하지 않습니다."
    ),

    custAddress: Yup.string().required("필수 입력입니다."),

    custPhone: Yup.string().length(11, "번호를 다시 확인해주세요."),

    custBirthday: Yup.string().length(8, "다시 확인해주세요."),

  });

  // 회원 가입 함수 : Formik 의 onSubmit(저장) 함수 바인딩
  //  formValue : (email, password, username, repassword)
  const handleRegister = (formValue: any) => {
    const {
      custEmail,
      custName,
      custPassword,
      custPhone,
      custGender,
      custBirthday,
      custAddress,
    } = formValue;

    // // 임시 객체
    // const data: IUser = {
    //   email,
    //   password,
    //   username,
    //   codeName: "ROLE_USER" // 일반 유저 권한
    // }

    // // 성공여부 변수 초기화
    // setSuccessful(false);
    // // todo: 백엔드 저장 요청 : 공유함수(register)
    // dispatch(register(data))
    //   .unwrap()     // 공유저장소 에러처리
    //   .then(() => {
    //     setSuccessful(true);
    //     setMessage("유저가 생성되었습니다.")
    //   })
    //   .catch((e: Error) => {
    //     console.log(e);
    //     setSuccessful(false);
    //   })
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
                  <h1 className="h4 text-gray-900 mb-4">회원가입</h1>
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
                          {/* 이메일 입력창 시작 */}
                          <div className="form-group">
                            <Field
                              type="email"
                              name="custEmail"
                              className={
                                "form-control form-control-user mb-3" +
                                (errors.custEmail && touched.custEmail
                                  ? " is-invalid"
                                  : "")
                              }
                              id="custEmail"
                              placeholder="이메일"
                            />
                            <ErrorMessage
                              name="custEmail"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          {/* 이메일 입력창 끝 */}
                          {/* 이름 입력창 시작 */}
                          <div className="form-group">
                            <Field
                              type="text"
                              name="custName"
                              className={
                                "form-control form-control-user mb-3" +
                                (errors.custName && touched.custName
                                  ? " is-invalid"
                                  : "")
                              }
                              id="custName"
                              placeholder="이름"
                            />
                            <ErrorMessage
                              name="custName"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          {/* 이름 입력창 끝 */}
                          {/* 비밀번호 입력창 시작 */}
                          <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <Field
                                type="password"
                                name="custPassword"
                                className={
                                  "form-control form-control-user mb-3" +
                                  (errors.custPassword && touched.custPassword
                                    ? " is-invalid"
                                    : "")
                                }
                                id="custPassword"
                                placeholder="비밀번호"
                              />
                              <ErrorMessage
                                name="custPassword"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            <div className="col-sm-6">
                              <Field
                                type="password"
                                name="repassword"
                                className={
                                  "form-control form-control-user mb-3" +
                                  (errors.repassword && touched.repassword
                                    ? " is-invalid"
                                    : "")
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
                          </div>
                          {/* 비밀번호 입력창 끝 */}
                          {/* 주소 입력창 시작 */}
                          <div className="form-group">
                            <Field
                              type="text"
                              name="custAddress"
                              className={
                                "form-control form-control-user mb-3" +
                                (errors.custAddress && touched.custAddress
                                  ? " is-invalid"
                                  : "")
                              }
                              id="custAddress"
                              placeholder="주소"
                            />
                            <ErrorMessage
                              name="custAddress"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          {/* 주소 입력창 끝 */}
                          {/* 휴대폰 입력창 시작 */}
                          <div className="form-group">
                            <Field
                              type="text"
                              name="custPhone"
                              className={
                                "form-control form-control-user mb-3" +
                                (errors.custPhone && touched.custPhone
                                  ? " is-invalid"
                                  : "")
                              }
                              id="custPhone"
                              placeholder="휴대폰번호(숫자만)"
                            />
                            <ErrorMessage
                              name="custPhone"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          {/* 휴대폰 입력창 끝 */}
                          {/* 성별,생일 입력창 시작 */}
                          <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <Field
                                type="text"
                                name="custBirthday"
                                className={
                                  "form-control form-control-user mb-3" +
                                  (errors.custBirthday && touched.custBirthday
                                    ? " is-invalid"
                                    : "")
                                }
                                id="custBirthday"
                                placeholder="생일 (예 20001225)"
                              />
                              <ErrorMessage
                                name="custBirthday"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                            <div className="col-sm-6">
                              <Field
                                type="text"
                                name="custGender"
                                className={
                                  "form-control form-control-user mb-3" +
                                  (errors.custGender && touched.custGender
                                    ? " is-invalid"
                                    : "")
                                }
                                id="custGender"
                                placeholder="성별"
                              />
                              <ErrorMessage
                                name="custGender"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                          </div>
                          {/* 성별,생일 입력창 끝 */}

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
                  <Link to="/forgot-password">비밀번호 찾기</Link>
                </div>
                <div className="text-center">
                  <Link to="/login">이미 가입하셨나요? 로그인 하기</Link>
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
