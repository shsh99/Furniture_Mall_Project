// AddNotice.tsx
import React from 'react';
import { useState } from 'react';
import INotice from '../../../types/board/notice/INotice';
import NoticeService from '../../../service/board/notice/NoticeService';
import { useNavigate } from 'react-router-dom';

function AddNotice() {
	// TODO: 변수 정의
	const initialNotice = {
		noticeNo: null,

		noticeTitle: '',

		noticeContents: '',
	};

	// 강제페이지 이동 함수
	let navigate = useNavigate();

	// notice 객체
	const [notice, setNotice] = useState<INotice>(initialNotice);
	// 저장버튼 클릭후 submitted = true 변경됨
	const [submitted, setSubmitted] = useState<boolean>(false);

	// TODO: 함수 정의
	// input 태그에 수동 바인딩
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target; // 화면값
		setNotice({ ...notice, [name]: value }); // 변수저장
	};

	// 저장 함수
	const saveNotice = () => {
		// 임시 객체
		var data = {
			noticeTitle: notice.noticeTitle,
			noticeContents: notice.noticeContents,
		};

		NoticeService.create(data) // 저장 요청
			.then((response: any) => {
				setSubmitted(true);
				console.log(response.data);
				alert('저장되었습니다.');
				navigate('/notice'); // 페이지 이동
			})
			.catch((e: Error) => {
				console.log(e);
			});
	};

	/* TODO: 완료시 삭제 + submitted 삼항연산자 */
	// 새폼 보여주기 함수 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
	// const newNotice = () => {
	//    setNotice(initialNotice); // notice 초기화
	//    setSubmitted(false); // submitted 변수 초기화 newNotice
	// };

	return (
		// TODO: JSX
		<>
			<div className="hero">
				<div className="container">
					<div className="d-flex row justify-content-between">
						<div className="col-lg-10">
							<div className="mt-5">
								<h1 className="bestt">공지사항 추가하기</h1>

								<div className="d-flex mt-5">
									<h2>관리자용 페이지입니다.</h2>
								</div>
							</div>
						</div>

						<div className="product-section">
							<div className="container">
								<div className="row">
									<div className="row">
										{/* {submitted ? (
            <div className="col-6 mx-auto">
               <h4>저장이 완료되었습니다.</h4>
               <button className="btn btn-success" onClick={newNotice}>
                  추가하기
               </button>
            </div>
         ) : ( */}
										<>
											<div className="col-6 mx-auto">
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
															value={
																notice.noticeTitle
															}
															onChange={
																handleInputChange
															}
															placeholder="제목을 입력해 주세요."
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
															value={
																notice.noticeContents
															}
															onChange={
																handleInputChange
															}
															placeholder="내용을 입력해 주세요."
															name="noticeContents"
														/>
													</div>
												</div>

												<div className="row g-3 mt-3 mb-3">
													<button
														onClick={saveNotice}
														className="btn btn-outline-primary ms-2 col"
													>
														저장하기
													</button>
												</div>
											</div>
										</>
										{/* )} */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddNotice;
