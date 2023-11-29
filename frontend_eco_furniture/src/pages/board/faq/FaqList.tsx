import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from '@mui/material';
import IFaq from '../../../types/board/faq/IFaq';
import initCustom from '../../../assets/js/custom';
import FaqService from '../../../service/board/faq/FaqService';

export default function FaqList() {
	// TODO: 변수 정의
	const [faq, setFaq] = useState<Array<IFaq>>([]);
	// 검색어 변수
	const [searchTitle, setSearchTitle] = useState<string>("");

	// 공통 변수 : page(현재페이지번호), count(총페이지건수), pageSize(3,6,9 배열)
	const [page, setPage] = useState<number>(1);
	const [count, setCount] = useState<number>(1);
	const [pageSize, setPageSize] = useState<number>(3); // 1페이지당개수
	// pageSizes : 배열 (셀렉트 박스 사용)
	const pageSizes = [3, 6, 9];

	//   전체조회 함수
	const retrieveFaq = () => {
		FaqService.getAll(searchTitle, page - 1, pageSize) // 백엔드 전체조회요청
			.then((response: any) => {
				// 로그 출력
				console.log('response', response.data);
				const { faq, totalPages } = response.data;
				// faq 저장
				setFaq(faq);
				setCount(totalPages);
			})
			.catch((e: Error) => {
				// 벡엔드 실패시 실행됨
				console.log(e);
			});
	};

	//  검색어 수동 바인딩 함수
	const onChangeSearchTitle = (e: any) => {
		const searchTitle = e.target.value;
		setSearchTitle(searchTitle);
	};

	// handlePageSizeChange(공통) : pageSize 값 변경시 실행되는 함수
	const handlePageSizeChange = (event: any) => {
		setPageSize(event.target.value); // 1페이지당 개수저장(3,6,9)
		setPage(1); // 현재페이지번호 : 1로 강제설정
	};

	// Pagination 수동 바인딩
	const handlePageChange = (event: any, value: number) => {
		setPage(value);
	};

	// TODO: 함수 정의
	useEffect(() => {
		initCustom(); // 엘리먼트에 Tiny slider 적용(수량 조절 증, 감소 초기화 기능)

		// TODO 에러1 : retrieveFaq 전체조회 함수를 정의해놓고 누락을 시켜 백엔드와 전체조회요청 연동이 안 되는 현상 발견
		// TODO 에러1 : 처리 결과 : .then 상위 alert 창을 띄워 발견하고 함수를 정의하여 정상 처리 됨
		// TODO 에러2 : page, pageSize 누락하여 백엔드와 전체조회요청 연동 시 다음 페이지 조회 불가
		// TODO 에러2 : 처리 결과 : .then 상위 alert 창을 띄워 발견하고 함수를 정의하여 정상 처리 됨
		retrieveFaq();
	}, [page, pageSize]); // 페이지(page)나 페이지 크기(pageSize)가 변경될 때마다 initCustom()와 retrieveFaq() 함수가 실행 됨

	return (
		// TODO: JSX
		<>
			{/* <!-- Hero Section TODO: Start Faq Section --> */}
			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>자주 묻는 질문</h1>

								<div className="mb-4">
									<h2>궁금한 점이 있으세요?</h2>
									<h3>자주 묻는 질문에 대한</h3>
									<h3>답을 모아놓았어요.</h3>
								</div>
								<p>
									<div className="input-group-append">
										<Link
											to="/notice"
											className="btn btn-bl-outline mb-2"
										>
											공지사항 바로가기
										</Link>
									</div>
								</p>
								<h6>
									운영시간 : (월요일 - 일요일) 10:00 - 20:00
								</h6>
								<h6 className="mb-5">
									*추석, 설날은 휴무입니다.
								</h6>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img
									src={require("../../../assets/images/couch.png")}
									className="img-fluid"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Hero Section TODO: End Start Section --> */}

			{/* <!-- Faq Section --> */}
			<div className="untree_co-section">
				<div className="container">
					<div>
						{/* faq search start */}
						<div className="row mb-5 justify-content-center">
							<div className="col-12 w-50 input-group mb-3">
								<input
									type="text"
									className="form-control"
									placeholder="Search by title"
									value={searchTitle}
									onChange={onChangeSearchTitle}
								/>

								<div className="input-group-append">
									<button
										className="btn btn-outline-secondary"
										type="button"
										onClick={retrieveFaq}
									>
										검색하기
									</button>
									<Link
										to="/add-faq"
										className="btn btn-secondary"
									>
										글쓰기
									</Link>
								</div>
							</div>
						</div>
						{/* faq search end */}

						{/* Items per Page start */}
						{'Items per Page: '}
						<select
							onChange={handlePageSizeChange}
							value={pageSize}
						>
							{pageSizes.map((size) => (
								<option key={size} value={size}>
									{size}
								</option>
							))}
						</select>
						{/* Items per Page end */}

						{/* accodian start(반복문) */}
						<div className="col-md-12">
							<div className="accordion" id="accordionExample">
								{/* 반복문 사용법 : faq.map((data, index) => (아코디언 태그)) */}
								{faq &&
									faq.map((data, index) => (
										<div
											className="accordion-item"
											key={data.faqNo}
										>
											<h2
												className="accordion-header"
												id={'heading' + index}
											>
												<button
													className={
														index == 0
															? 'accordion-button'
															: 'accordion-button collapsed'
													}
													type="button"
													data-bs-toggle="collapse"
													data-bs-target={
														'#collapse' + index
													}
													aria-expanded={
														index == 0
															? 'true'
															: 'false'
													}
													aria-controls={
														'collapse' + index
													}
												>
													{/* 벡엔드 데이터 */}
													{data.faqTitle}
												</button>
											</h2>
											{/* 제목(data.title) 끝 */}

											{/* 본문(data.content) 시작 */}
											<div
												id={'collapse' + index}
												className={
													index == 0
														? 'accordion-collapse collapse show'
														: 'accordion-collapse collapse'
												}
												aria-labelledby={
													'heading' + index
												}
												data-bs-parent="#accordionExample"
											>
												<div className="accordion-body">
													{/* 벡엔드 데이터 코딩 */}
													{data.faqContents} &nbsp;
													<Link
														to={
															'/faq/' + data.faqNo
														}
													>
														<span className="badge bg-success">
															수정하기
														</span>
													</Link>
												</div>
											</div>
											{/* 본문 끝 */}
										</div>
									))}
							</div>
							{/* faq search end */}

							{/* Pagination start */}
							<div className="pagination justify-content-center">
								<Pagination
									className="my-3"
									count={count}
									page={page}
									siblingCount={1}
									boundaryCount={1}
									variant="outlined"
									shape="rounded"
									onChange={handlePageChange}
								/>
							</div>
							{/* Pagination end */}
						</div>

						{/* accodian end */}
					</div>
					<div className="row"></div>
				</div>
			</div>
			{/* <!-- End Faq Section --> */}
		</>
	);
}
