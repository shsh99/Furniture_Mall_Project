import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ICoupon from "../../../types/admin/coupon/ICoupon";
import CouponService from "../../../service/admin/coupon/CouponService";

function CouponList() {
  // todo: 변수 정의
  // 공통코드 배열 변수 정의
  const [coupon, setCoupon] = useState<Array<ICoupon>>([]);

  // 페이징 처리 변수
  // todo: 공통 변수 : page(현재페이지번호), count(총페이지건수), pageSize(3,6,9 배열)
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3); // 1페이지당개수
  // todo: 공통 pageSizes : 배열 (셀렉트 박스 사용)
  const pageSizes = [3, 6, 9];

  // todo: 함수 정의
  useEffect(() => {
    retrieveCoupon(); // 전체 조회
  }, [page, pageSize]);

  //   전체조회 함수
  const retrieveCoupon = () => {
    CouponService.getAll(page - 1, pageSize) // 벡엔드 전체조회요청
      .then((response: any) => {
        const { coupon, totalPages } = response.data;
        // 저장
        setCoupon(coupon);
        setCount(totalPages);
        // 로그 출력
        console.log("response", response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // todo: handlePageSizeChange(공통) : pageSize 값 변경시 실행되는 함수
  const handlePageSizeChange = (event: any) => {
    setPageSize(event.target.value); // 1페이지당 개수저장(3,6,9)
    setPage(1); // 현재페이지번호 : 1로 강제설정
  };

  //  todo: Pagination 수동 바인딩(공통)
  //  페이지 번호를 누르면 => page 변수에 값 저장
  const handlePageChange = (event: any, value: number) => {
    // value == 화면의 페이지번호
    setPage(value);
  };
  return (
    <>
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
              <th scope="col">쿠폰ID</th>
              <th scope="col">쿠폰명</th>
              <th scope="col">할인율</th>
              <th scope="col">쿠폰소멸일</th>
              <th scope="col">수정</th>
            </tr>
          </thead>
          <tbody>
            {coupon &&
              coupon.map((data) => (
                <tr key={data.couponId}>
                  <td>{data.couponId}</td>
                  <td>{data.couponName}</td>
                  <td>{data.discountValue}</td>
                  <td>{data.couponEndTime}</td>
                  <td>
                    <Link to={"/coupon/" + data.couponId}>
                      <span className="badge bg-success">저장</span>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* table end */}
      </div>
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

export default CouponList;
