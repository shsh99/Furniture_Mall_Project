/* C:\Work\07_Si\03_SimpleDMS_Login\01_Login\frontend-react-new\src\pages\auth\Register.tsx */
// Register.tsx 회원가입

// TODO: import
import React, { useState } from "react";
import "../../assets/css/login.css";
// TODO : 유효성 체크 lib
import { Form, ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";



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
    username: "",
    email: "",
    password: "",    // 암호
    repassword: "",  // 암화 재확인: 위 암호와 입력 값이 일치해야 함
  }
  // TODO: 함수 정의
  // 유효성 체크 함수 : validationSchema(Formik & Yup 함수)
  // 에러에 대한 정의를 함수
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      // 유효성 조건을 개발자 직접 작성하는 함수
      .test(
        "len",
        "username 은 3 ~ 20사이에 글자만 입력됩니다.",
        // 유효성 체크 조건
        (val) => {
          if (
            val &&
            val.toString().length >= 3 &&
            val.toString().length <= 20
          ) {
            return true;
          }
          return false;
        }
      )
      .required("필수 입력입니다."),        // username 필수 입력
    email: Yup.string()
      .email("email 를 정확하게 작성하세요") // email 틀리면
      .required("필수 입력입니다."),        // email 필수 입력
    password: Yup.string()
      // 개발자가 직접 유효성 체크 기능을 추가하는 방법
      .test(
        "len",
        "password 6 ~ 40 문자를 입력해야 합니다.", // 에러메세지
        // 유효성 체크 조건
        (val) => {
          if (
            val &&
            val.toString().length >= 6 &&
            val.toString().length <= 40
          ) {
            return true;
          }
          return false;
        }
      )
      .required("필수 입력입니다."),        // password 필수 입력
    repassword: Yup.string().oneOf(        // repassword != password
      [Yup.ref("password")],
      "패스워드가 일치하지 않습니다."
    ),
  });

  // 회원 가입 함수 : Formik 의 onSubmit(저장) 함수 바인딩
  //  formValue : (email, password, username, repassword)
  const handleRegister = (formValue: any) => {
    const { email, password, username } = formValue

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
  }

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
                          <div className="form-group">
                            <Field
                              type="email"
                              name="email"
                              className={
                                "form-control form-control-user mb-3" +
                                (errors.email && touched.email
                                  ? " is-invalid"
                                  : "")
                              }
                              id="exampleInputEmail"
                              placeholder="Email Address"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <Field
                                type="password"
                                name="password"
                                className={
                                  "form-control form-control-user mb-3" +
                                  (errors.password && touched.password
                                    ? " is-invalid"
                                    : "")
                                }
                                id="exampleInputPassword"
                                placeholder="Password"
                              />
                              <ErrorMessage
                                name="password"
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
                                id="exampleRepeatPassword"
                                placeholder="Repeat Password"
                              />
                              <ErrorMessage
                                name="repassword"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                          </div>

                          <div className="form-group">
                            <Field
                              type="text"
                              name="username"
                              className={
                                "form-control form-control-user mb-3" +
                                (errors.username && touched.username
                                  ? " is-invalid"
                                  : "")
                              }
                              id="exampleName"
                              placeholder="Full Name"
                            />
                            <ErrorMessage
                              name="username"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          <button
                            type="submit"
                            className="btn btn-primary btn-user w-100 mb-3"
                          >
                            계정 만들기 완료
                          </button>
                        </div>
                      )}

                      {/* 성공하면 성공메세지 출력 시작 */}
                      {successful && (
                        <div className="alert alert-success text-center" role="alert">
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
                  <a href="/login">이미 가입하셨나요? 로그인 하기</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Register;
