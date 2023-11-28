// table.tsx : rfce
// 상품 전체 조회 화면
import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import IShopItems from "../../../types/shop/chair/IProduct";
import itemImagesService from "../../../service/shop/itemImages/itemImagesService";


import TitleCom from "../../../components/common/TitleCom";


function TableList() {
  // 변수 정의
  const [table, settable] = useState<Array<IShopItems>>([]);
  // 검색어 변수  
  const [searchTitle, setSearchTitle] = useState<string>("");

  // 공통 변수 : page(현재페이지번호), count(총페이지건수), pageSize(3,6,9 배열)
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3); // 1페이지당개수
  // pageSizes : 배열 (셀렉트 박스 사용)
  const pageSizes = [3, 6, 9];

  useEffect(() => {
    retrievetable(); // 전체 조회
  }, [page, pageSize]);

  //   전체조회 함수
  const retrievetable = () => {
    // 벡엔드 매개변수 전송 : + 현재페이지(page), 1페이지당개수(pageSize)
    itemImagesService.getImages(searchTitle, page - 1, pageSize) // 벡엔드 전체조회요청
      .then((response: any) => {
        const { table, totalPages } = response.data;
        settable(table);
        setCount(totalPages);
        console.log("response", response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  //  검색어 수동 바인딩 함수
  const onChangeSearchTitle = (e: any) => {
    setSearchTitle(e.target.value);
  };

  // handlePageSizeChange : pageSize 값 변경시 실행되는 함수
  //  select 태그 수동 바인딩 : 화면값 -> 변수에 저장
  const handlePageSizeChange = (event: any) => {
    setPageSize(event.target.value); // 1페이지당 개수저장(3,6,9)
    setPage(1); // 현재페이지번호 : 1로 강제설정
  };

  //  Pagination 수동 바인딩
  //  페이지 번호를 누르면 => page 변수에 값 저장
  const handlePageChange = (event: any, value: number) => {
    // value == 화면의 페이지번호
    setPage(value);
  };

  return (
    <>
      {/* 미리 세팅된 6개 의자 */}
      {/* <!-- Start Hero Section --> */}
			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>테이블</h1>
							</div>
						</div>
						<div className="col-lg-7">

						</div>
					</div>
				</div>
			</div>
			{/* <!-- End Hero Section --> */}

			<div className="untree_co-section product-section before-footer-section">
				<div className="container">
					<div className="row">

						{/* <!-- 테이블 1 --> */}

						<div className="col-12 col-md-6 col-lg-4 mb-5">

							<a className="product-item" href="/table-1">
								<img src="images/테이블1/테이블1.png" className="img-fluid product-thumbnail" />
								<h3 className="product-title">살로몬 직사각 테이블</h3>
								<strong className="product-price">₩ 210,000</strong>

								<span className="icon-cross">
									<img src="images/cross.svg" className="img-fluid" />
								</span>
							</a>
						</div>
						{/* <!-- 테이블 1 --> */}

						{/* <!-- 테이블 2 --> */}
						<div className="col-12 col-md-6 col-lg-4 mb-5">
							<a className="product-item" href="/table-2">
								<img src="images/테이블2/테이블2.png" className="img-fluid product-thumbnail" />
								<h3 className="product-title">트리오 더블 테이블</h3>
								<strong className="product-price">₩ 320,000</strong>

								<span className="icon-cross">
									<img src="images/cross.svg" className="img-fluid" />
								</span>
							</a>
						</div>
						{/* <!-- 테이블 2 --> */}

						{/* <!-- 테이블 3 --> */}
						<div className="col-12 col-md-6 col-lg-4 mb-5">
							<a className="product-item" href="/table-3">
								<img src="images/테이블3/테이블3.png" className="img-fluid product-thumbnail" />
								<h3 className="product-title">코랄 리프 라운드 테이블</h3>
								<strong className="product-price">₩ 120,000</strong>

								<span className="icon-cross">
									<img src="images/cross.svg" className="img-fluid" />
								</span>
							</a>
						</div>
						{/* <!-- 테이블 3 --> */}


						{/* <!-- 테이블 4 --> */}
						<div className="col-12 col-md-6 col-lg-4 mb-5">
							<a className="product-item" href="/table-4">
								<img src="images/테이블4/테이블4.png" className="img-fluid product-thumbnail" />
								<h3 className="product-title">오션 라운드 테이블</h3>
								<strong className="product-price">₩ 160,000</strong>

								<span className="icon-cross">
									<img src="images/cross.svg" className="img-fluid" />
								</span>
							</a>
						</div>
						{/* <!-- 테이블 4 --> */}

						{/* <!-- 테이블 5 --> */}
						<div className="col-12 col-md-6 col-lg-4 mb-5">
							<a className="product-item" href="/table-5">
								<img src="images/테이블5/테이블5.png" className="img-fluid product-thumbnail" />
								<h3 className="product-title">오션 사각 테이블</h3>
								<strong className="product-price">₩ 140,000</strong>

								<span className="icon-cross">
									<img src="images/cross.svg" className="img-fluid" />
								</span>
							</a>
						</div>
						{/* <!-- 테이블 5 --> */}

						{/* <!-- 테이블 6 --> */}
						<div className="col-12 col-md-6 col-lg-4 mb-5">
							<a className="product-item" href="/table-6">
								<img src="images/테이블6/테이블6.png" className="img-fluid product-thumbnail" />
								<h3 className="product-title">링스 사각 테이블</h3>
								<strong className="product-price">₩ 165,000</strong>

								<span className="icon-cross">
									<img src="images/cross.svg" className="img-fluid" />
								</span>
							</a>
						</div>
						{/* <!-- 테이블 6 --> */}

          </div>
        </div>
      </div>
      {/* 세팅된 의자 6개 끝 */}



      {/* 제목 start */}
      <TitleCom title="SimpleProduct List" />
      {/* 제목 end */}

      {/* shop start */}
      <div className="row mb-5 justify-content-center">
        {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
        <div className="col-12 w-50 input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrievetable}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* shop end */}

      {/* paging 시작 */}
      <div className="mt-3">
        {"Items per Page: "}
        <select onChange={handlePageSizeChange} value={pageSize}>
          {pageSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        {/* count : 총페이지 수, page : 현재페이지 번호 */}
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
      {/* paging 끝 */}

      {/* shop - card 시작 */}
      <div className="row">
        {table &&
          table.map((data) => (
            <div className="ms-5 col-lg-3 col-md-3 mt-5" key={data.itemNo}>
              <div className="card">
                <img src={data.uuid} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{data.itemName}</h5>
                  <h5 className="card-title">₩ {data.itemName}</h5>
                  <a
                    href={`/simple-cart/${data.itemNo}`}
                    className="btn btn-primary"
                  >
                    SimpleProduct Cart
                  </a>
                  <br />
                  <a
                    href={`/simple-product/${data.itemNo}`}
                    className="btn btn-success mt-2"
                  >
                    SimpleProduct Detail(admin)
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* shop - card 끝 */}
    </>
  );
}

export default TableList;
