import React from "react";
import { useState } from "react";
import IFaq from "../../../types/board/faq/IFaq";
import FaqService from "../../../service/board/faq/FaqService";
import { useNavigate } from "react-router-dom";


function AddFaq() {
  
  // TODO: 변수 정의
  const initialFaq = {
    faqNo: null,

    faqTitle: "",

    faqContents: ""
  };
  
  // 강제페이지 이동 함수
  let navigate = useNavigate();

  // faq 객체
  const [faq, setFaq] = useState<IFaq>(initialFaq);
  // 저장버튼 클릭후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);

  // TODO: 함수 정의
  // input 태그에 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // 화면값
    setFaq({ ...faq, [name]: value }); // 변수저장
  };
  // 저장 함수
  const saveFaq = () => {
    // 임시 객체
    var data = {
      faqTitle: faq.faqTitle,
        faqContents: faq.faqContents
    };

    FaqService.create(data) // 저장 요청
      .then((response: any) => {
        setSubmitted(true);
        console.log(response.data);
        alert("저장되었습니다.");
        navigate("/faq"); // 페이지 이동  
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  /* TODO: 완료시 삭제 + submitted 삼항연산자 */
  // 새폼 보여주기 함수 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
  // const newFaq = () => {
  //   setFaq(initialFaq); // faq 초기화
  //   setSubmitted(false); // submitted 변수 초기화
  // };

  return (
    // TODO: JSX
    <div className="row">
      {/* {submitted ? (
        <div className="col-6 mx-auto">
          <h4>저장이 완료되었습니다.</h4>
          <button className="btn btn-success" onClick={newFaq}>
          추가하기
          </button>
        </div>
      ) : ( */}
        <>

          <div className="col-6 mx-auto">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="faqTitle" className="col-form-label">
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
                  placeholder="제목을 입력해 주세요."
                  name="faqTitle"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="faqContents" className="col-form-label">
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
                  placeholder="내용을 입력해 주세요."
                  name="faqContents"
                />
              </div>
            </div>

            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveFaq}
                className="btn btn-outline-primary ms-2 col"
              >
                저장하기
              </button>
            </div>
          </div>
        </>
      {/* )} */}
    </div>
  );
}

export default AddFaq;