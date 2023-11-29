import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import INotice from "../../../types/board/notice/INotice";
import NoticeService from "../../../service/board/notice/NoticeService";
import { useEffect } from "react";

function Notice() {
  // TODO: 변수 정의
  // 전체조회 페이지에서 전송한 기본키(noticeNo)
  const { noticeNo } = useParams();
  // 강제페이지 이동 함수
  let navigate = useNavigate();

  // 객체 초기화(상세조회 : 기본키 있음)
  const initialNotice = {
    noticeNo: null,
    noticeTitle: "",
    noticeContents: "",
  };

  // 수정될객체
  const [notice, setNotice] = useState<INotice>(initialNotice);
  // 화면에 수정 성공에 메세지 찍기 변수
  const [message, setMessage] = useState<string>("");

  // TODO: 함수 정의
  // 상세조회 함수
  const getNotice = (noticeNo: string) => {
    NoticeService.get(noticeNo) // 벡엔드로 상세조회 요청
      .then((response: any) => {
        setNotice(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 화면이 뜰때 실행되는 이벤트 + noticeNo 값이 바뀌면 실행
  useEffect(() => {
    if (noticeNo) getNotice(noticeNo);
  }, [noticeNo]);

  // input 태그 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNotice({ ...notice, [name]: value });
  };

  // 수정 함수
  const updateNotice = () => {
    NoticeService.update(notice.noticeNo, notice) // 벡엔드로 수정요청
      .then((response: any) => {
        console.log(response.data);
        alert("수정되었습니다.");
        navigate("/notice"); // 페이지 이동
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 삭제함수
  const deleteNotice = () => {
    NoticeService.remove(notice.noticeNo) // 벡엔드로 삭제요청
      .then((response: any) => {
        console.log(response.data);
        alert("삭제되었습니다.");
        navigate("/notice"); // 페이지 이동
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    // TODO: JSX
    <>
      <div className="hero">
        <div className="container">
          <div className="d-flex row justify-content-between">
            <div className="col-lg-10">
              <div className="mt-5">
                <h1 className="bestt">공지사항 수정하기</h1>

                <div className="d-flex mt-5">
                  <h2>관리자용 페이지입니다.</h2>
                </div>
              </div>
            </div>
            <div className="product-section">
              <div className="container">
                <div className="row">
                  <>
                    {notice ? (
                      <div className="col-6 mx-auto">
                        <form>
                          <div className="row g-3 align-items-center mb-3">
                            <div className="col-3">
                              <label
                                htmlFor="noticeTitle"
                                className="col-form-label"
                              >
                                제목
                              </label>
                            </div>

                            <div className="col-9">
                              <input
                                type="text"
                                id="noticeTitle"
                                required
                                className="form-control"
                                value={notice.noticeTitle}
                                onChange={handleInputChange}
                                placeholder="공지 제목"
                                name="noticeTitle"
                              />
                            </div>
                          </div>

                          <div className="row g-3 align-items-center mb-3">
                            <div className="col-3">
                              <label
                                htmlFor="noticeContents"
                                className="col-form-label"
                              >
                                내용
                              </label>
                            </div>

                            <div className="col-9">
                              <input
                                type="text"
                                id="noticeContents"
                                required
                                className="form-control"
                                value={notice.noticeContents}
                                onChange={handleInputChange}
                                placeholder="공지 내용"
                                name="noticeContents"
                              />
                            </div>
                          </div>
                        </form>

                        <div className="row g-3 mt-3 mb-3">
                          <button
                            onClick={deleteNotice}
                            className="btn btn-outline-danger ms-3 col"
                          >
                            삭제
                          </button>

                          <button
                            type="submit"
                            onClick={updateNotice}
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
                        <p>Please click on a Notice...</p>
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

export default Notice;
