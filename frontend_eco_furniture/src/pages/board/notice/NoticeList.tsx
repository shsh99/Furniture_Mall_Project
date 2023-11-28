import { Pagination } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import initCustom from '../../../assets/js/custom';
import INotice from '../../../types/board/notice/INotice';
import NoticeService from '../../../service/board/notice/NoticeService';

function NoticeList() {
	// TODO: 변수 정의
	// notice 배열 변수
	const [notice, setNotice] = useState<Array<INotice>>([]);
	// 검색어 변수
	const [searchNoticeTitle, setSearchNoticeTitle] = useState<string>('');

	// 공통 변수 : page(현재페이지번호), count(총페이지건수), pageSize(3,6,9 배열)
	const [page, setPage] = useState<number>(1);
	const [count, setCount] = useState<number>(1);
	const [pageSize, setPageSize] = useState<number>(3); // 1페이지당개수
	// 공통 pageSizes : 배열 (셀렉트 박스 사용)
	const pageSizes = [3, 6, 9];

	// TODO: 함수 정의
	useEffect(() => {
		initCustom();
		retrieveNotice(); // 전체 조회
	}, [page, pageSize]);

	//   전체조회 함수
	const retrieveNotice = () => {
		NoticeService.getAll(searchNoticeTitle, page - 1, pageSize) // 벡엔드 전체조회요청
			.then((response: any) => {
				const { notice, totalPages } = response.data;
				setNotice(notice);
				setCount(totalPages);
				console.log('response', response.data);
			})
			.catch((e: Error) => {
				// 벡엔드 실패시 실행됨
				console.log(e);
			});
	};

	//  검색어 수동 바인딩 함수
	const onChangeSearchNoticeTitle = (e: any) => {
		setSearchNoticeTitle(e.target.value);
	};

	// handlePageSizeChange(공통) : pageSize 값 변경시 실행되는 함수
	//  select 태그 수동 바인딩 : 화면값 -> 변수에 저장
	const handlePageSizeChange = (event: any) => {
		setPageSize(event.target.value); // 1페이지당 개수저장(3,6,9)
		setPage(1); // 현재페이지번호 : 1로 강제설정
	};

	//  Pagination 수동 바인딩(공통)
	//  페이지 번호를 누르면 => page 변수에 값 저장
	const handlePageChange = (event: any, value: number) => {
		// value == 화면의 페이지번호
		setPage(value);
	};

	return (
		<>
			{/* <!-- Hero Section TODO: Start notice Section --> */}
			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>공지사항</h1>

								<div className="mb-4">
									<h2>궁금한 점이 있으세요?</h2>
									<h3>공지사항을 모아놓았어요.</h3>
								</div>
								<p>
									<div className="input-group-append">
										<a
											href="/faq"
											className="btn btn-bl-outline mb-4"
										>
											자주묻는질문 바로가기
										</a>
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
									src="images/couch.png"
									className="img-fluid"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Hero Section TODO: End notice Section --> */}

			{/* <!-- notice Section start --> */}
			<div className="untree_co-section">
				<div className="container">
					<div>
						{/* notice search start */}
						<div className="row mb-5 justify-content-center">
							<div className="col-12 w-50 input-group mb-3">
								<input
									type="text"
									className="form-control"
									placeholder="Search by title"
									value={searchNoticeTitle}
									onChange={onChangeSearchNoticeTitle}
								/>

								<div className="input-group-append">
									<button
										className="btn btn-outline-secondary"
										type="button"
										onClick={retrieveNotice}
									>
										검색하기
									</button>
									<a
										href="/add-notice"
										className="btn btn-secondary"
									>
										글쓰기
									</a>
								</div>
							</div>
						</div>
						{/* notice search end */}

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
								{/* 반복문 사용법 : notice.map((data, index) => (아코디언 태그)) */}
								{notice &&
									notice.map((data, index) => (
										<div
											className="accordion-item"
											key={data.noticeNo}
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
													{data.noticeTitle}
												</button>
											</h2>
											{/* 제목(data.noticeTitle) 끝 */}

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
													{data.noticeContents} &nbsp;
													<Link
														to={
															'/notice/' +
															data.noticeNo
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
							{/* notice search end */}

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
			{/* <!-- notice Section end --> */}
		</>
	);
}

export default NoticeList;
