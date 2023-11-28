// Faq.tsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import IFaq from "../../../types/board/faq/IFaq";
import FaqService from "../../../service/board/faq/FaqService";

function Faq() {
  // TODO: 변수 정의
  // 전체조회 페이지에서 전송한 기본키(faqNo)
  const { faqNo } = useParams();
  // 강제페이지 이동 함수
  let navigate = useNavigate();

  // 객체 초기화(상세조회 : 기본키 있음)
  const initialFaq = {
    faqNo: null,
    faqTitle: "",
    faqContents: "",
  };

  // TODO: 함수 정의
  // 상세 조회 함수
  const getFaq = (faqNo: string) => {
    FaqService.get(faqNo) // 벡엔드로 상세조회 요청
      .then((response: any) => {
        setFaq(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 화면이 뜰때 실행되는 이벤트 + faqNo 값이 바뀌면 실행
  useEffect(() => {
    if (faqNo) getFaq(faqNo);
  }, [faqNo]);

  // input 태그 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFaq({ ...faq, [name]: value });
  };

  // 수정 함수
  const updateFaq = () => {
    FaqService.update(faq.faqNo, faq) // 벡엔드로 수정요청
      .then((response: any) => {
        console.log(response.data);
        alert("수정되었습니다.");
        navigate("/faq"); // 페이지 이동
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 삭제 함수
  const deleteFaq = () => {
    FaqService.remove(faq.faqNo) // 벡엔드로 삭제요청
      .then((response: any) => {
        console.log(response.data);
        alert("삭제되었습니다.");
        navigate("/faq"); // 페이지 이동
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 수정 될 객체
  const [faq, setFaq] = useState<IFaq>(initialFaq);
  // 화면에 수정 성공에 메세지 찍기 변수
  const [message, setMessage] = useState<string>("");

  return (
    // TODO: JSX

    <>
      <div className="hero">
        <div className="container">
          <div className="d-flex row justify-content-between">
            <div className="col-lg-10">
              <div className="mt-5">
                <h1 className="bestt">자주 묻는 질문 수정하기</h1>

                <div className="d-flex mt-5">
                  <h2>관리자용 페이지입니다.</h2>
                </div>
              </div>
            </div>
            <div className="product-section">
              <div className="container">
                <div className="row">
                  <>
                    {faq ? (
                      <div className="col-6 mx-auto">
                        <form>
                          <div className="row g-3 align-items-center mb-3">
                            <div className="col-3">
                              <label
                                htmlFor="faqTitle"
                                className="col-form-label"
                              >
                                제목
                              </label>
                            </div>

                            <div className="col-9">
                              <input
                                type="text"
                                id="faqTitle"
                                required
                                className="form-control"
                                value={faq.faqTitle}
                                onChange={handleInputChange}
                                placeholder="자주묻는질문 제목"
                                name="faqTitle"
                              />
                            </div>
                          </div>

                          <div className="row g-3 align-items-center mb-3">
                            <div className="col-3">
                              <label
                                htmlFor="faqContents"
                                className="col-form-label"
                              >
                                내용
                              </label>
                            </div>

                            <div className="col-9">
                              <input
                                type="text"
                                id="faqContents"
                                required
                                className="form-control"
                                value={faq.faqContents}
                                onChange={handleInputChange}
                                placeholder="자주묻는질문 내용"
                                name="faqContents"
                              />
                            </div>
                          </div>
                        </form>

                        <div className="row g-3 mt-3 mb-3">
                          <button
                            onClick={deleteFaq}
                            className="btn btn-outline-danger ms-3 col"
                          >
                            삭제
                          </button>

                          <button
                            type="submit"
                            onClick={updateFaq}
                            className="btn btn-outline-success ms-2 col"
                          >
                            수정
                          </button>
                        </div>

                        {message && (
                          <p className="alert alert-success mt-3 text-center">
                            {message}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="col-6 mx-auto">
                        <br />
                        <p>Please click on a Faq...</p>
                      </div>
                    )}
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;