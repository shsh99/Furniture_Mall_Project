import React, { useEffect, useState } from "react";
import IItem from "../../../types/shop/item/IItem";
import ItemService from "../../../service/shop/item/ItemService";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";

function ItemList() {
  // 변수 정의
  // item 배열 변수
  const [item, setItem] = useState<Array<IItem>>([]);
  // 검색어 변수
  const [searchItemName, setSearchItemName] = useState<string>("");

  // 공통 변수 : page(현재페이지번호), count(총페이지건수), pageSize(3,6,9 배열)
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3); // 1페이지당개수
  // pageSizes : 배열 (셀렉트 박스 사용)
  const pageSizes = [3, 6, 9];

  useEffect(() => {
    retrieveItem(); // 전체 조회
  }, [page, pageSize]);

  //   전체조회 함수
  const retrieveItem = () => {
    // 벡엔드 매개변수 전송 : + 현재페이지(page), 1페이지당개수(pageSize)
    ItemService.getAll(searchItemName, page - 1, pageSize) // 벡엔드 전체조회요청
      .then((response: any) => {
        const { item, totalPages } = response.data;
        setItem(item);
        setCount(totalPages);
        console.log("response", response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  //  검색어 수동 바인딩 함수
  const onChangeSearchItemName = (e: any) => {
    setSearchItemName(e.target.value);
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
      {/* search start */}
      <div className="row mb-5 justify-content-center">
        {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
        <div className="col-12 w-50 input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="제품명으로 검색하세요"
            value={searchItemName}
            onChange={onChangeSearchItemName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveItem}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* search end */}

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

      {/* item 시작 */}
      <div className="row">
        {item &&
          item.map((data) => (
            <div className="ms-5 col-lg-3 col-md-3 mt-5" key={data.itemNo}>
              <div className="card">
                <img src={data.imgPath} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{data.itemName}</h5>
                  <h5 className="card-title">원 {data.itemPrice}</h5>
                  <p className="card-text">제품설명</p>
                  <Link
                    to={`/cart/${data.itemNo}`}
                    className="btn btn-primary"
                  >
                    장바구니
                  </Link>
                  <br />
                
                  <Link
                    to={`/item/${data.itemNo}`}
                    className="btn btn-success mt-2"
                  >
                    제품 수정/삭제(admin)
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* item 끝 */}
    </>
  );
}

export default ItemList;
