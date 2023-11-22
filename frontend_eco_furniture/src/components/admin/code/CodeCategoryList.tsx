import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import ICodeCategory from "../../../types/admin/code/ICodeCategory";
import CodeCategoryService from "../../../service/admin/code/CodeCategoryService";

function CodeCategoryList() {
  // todo : 변수 정의
  // 공통코드 분류 배열 변수 정의
  const [codeCategory, setCodeCategory] = useState<Array<ICodeCategory>>([]);

  const [searchCodeCategoryName, setSearchCodeCategoryName] = useState<string>("");

  // todo : 공통 변수 : page(현재페이지번호), count(총페이지건수), pageSize(3,6,9 배열)
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3); // 1페이지당개수
  // pageSizes : 배열 (셀렉트 박스 사용)
  const pageSizes = [3, 6, 9];

  //todo : 함수 정의

  useEffect(() => {
    retrieveCodeCategory(); // 전체 조회
  }, [page, pageSize]);

  const retrieveCodeCategory = () => {
    // 벡엔드 매개변수 전송 : + 현재페이지(page), 1페이지당개수(pageSize)
    CodeCategoryService.getAll(searchCodeCategoryName, page - 1, pageSize) // 벡엔드 전체조회요청
      .then((response: any) => {
        // 벡엔드 성공시 실행됨
        // es6(모던js) 문법 : 객체 분해 할당
        // const dept = response.data.dept; // 부서배열
        // const totalPages = response.data.totalPages; // 전체페이지수
        const { codeCategory, totalPages } = response.data;
        // dept 저장
        setCodeCategory(codeCategory);
        setCount(totalPages);
        // 로그 출력
        console.log("response", response.data);
      })
      .catch((e: Error) => {
        // 벡엔드 실패시 실행됨
        console.log(e);
      });
  };

  const onChangeSearchCategoryName = (event: any) => {
    setSearchCodeCategoryName(event.target.value);
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

      {/* categoryId start(검색어) */}
      <div className="row mb-5 justify-content-center">
        {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
        <div className="col-12 w-50 input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Category Name"
            value={searchCodeCategoryName}
            onChange={onChangeSearchCategoryName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveCodeCategory}
            >
              검색
            </button>
          </div>
        </div>
      </div>
      {/* categoryId end */}

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
      </div>
      {/* paging 끝 */}

      {/* table start */}
      <div className="col-md-12">
        {/* table start */}
        <table className="table">
          <thead className="table-light">
            <tr>
              <th scope="col">카테고리ID</th>
              <th scope="col">카테고리명</th>
            </tr>
          </thead>
          <tbody>
            {codeCategory &&
              codeCategory.map((data) => (
                <tr key={data.codeCategoryId}>
                  <td>{data.codeCategoryId}</td>
                  <td>{data.codeCategoryName}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* table end */}
      </div>
      {/* table end */}
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

    </>
  );
}

export default CodeCategoryList;
