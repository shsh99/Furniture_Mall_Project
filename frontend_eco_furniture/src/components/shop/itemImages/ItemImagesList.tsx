import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import itemImagesService from "../../../service/shop/itemImages/itemImagesService";
import IItemImages from "../../../types/shop/itemImages/IItemImages";

function ItemImagesList() {
  // todo : 변수 정의
  // 부서 배열 변수
  const [itemImages, setItemImages] = useState<Array<IItemImages>>([]);
  // 검색어 변수
  const [searchImgTitle, setSearchImgTitle] = useState<string>("");

  // todo : 업로드 성공/실패시 화면에 메세지 출력하는 변수

  const [message, setMessage] = useState<string>("");

  // todo : 공통 변수 : page(현재페이지번호), count(총페이지건수), pageSize(3,6,9 배열)
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3); // 1페이지당개수
  // pageSizes : 배열 (셀렉트 박스 사용)
  const pageSizes = [3, 6, 9];

  // todo : 함수 정의
  useEffect(() => {
    retrieveItemImages(); // 전체 조회
  }, [page, pageSize]);

  //   전체조회 함수
  const retrieveItemImages = () => {
    // 벡엔드 매개변수 전송 : + 현재페이지(page), 1페이지당개수(pageSize)
    itemImagesService
      .getImages(searchImgTitle, page - 1, pageSize) // 벡엔드 전체조회요청
      .then((response: any) => {
        const { itemImages, totalPages } = response.data;
        setItemImages(itemImages);
        setCount(totalPages);
        // 로그 출력
        console.log("response", response.data);
      })
      .catch((e: Error) => {
        // 벡엔드 실패시 실행됨
        console.log(e);
      });
  };

  //  검색어 수동 바인딩 함수
  const onChangeSearchImgTitle = (e: any) => {
    setSearchImgTitle(e.target.value);
  };

  //  Pagination 수동 바인딩
  //  페이지 번호를 누르면 => page 변수에 값 저장
  const handlePageChange = (event: any, value: number) => {
    // value == 화면의 페이지번호
    setPage(value);
  };

  // handlePageSizeChange : pageSize 값 변경시 실행되는 함수
  //  select 태그 수동 바인딩 : 화면값 -> 변수에 저장
  const handlePageSizeChange = (event: any) => {
    setPageSize(event.target.value); // 1페이지당 개수저장(3,6,9)
    setPage(1); // 현재페이지번호 : 1로 강제설정
  };

  // 삭제함수
  const deleteImage = (uuid: any) => {
    itemImagesService
      .deleteImg(uuid)
      .then((response: any) => {
        console.log(response.data);
        setMessage("삭제되었습니다.");
        // 재조회
        retrieveItemImages();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  return (
    <>
      {/* 검색어 start */}
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Image Name"
            value={searchImgTitle}
            onChange={onChangeSearchImgTitle}
          />
          </div>
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveItemImages}
            >
              Search
            </button>
          </div>
        
      </div>
      {/* 검색어 end */}
      {/* page start */}
      <div className="col-md-12 mt-3">
        <div className="mt-3">
          {"Items per Page: "}
          <select onChange={handlePageSizeChange} value={pageSize}>
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

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
        </div>
        {/* page end */}

        {/* upload 성공/실패 메세지 출력 시작 */}
        {message && (
          <div className="alert alert-success" role="alert">
            {message}
          </div>
        )}
        {/* upload 성공/실패 메세지 출력 끝 */}

        {/* 쇼핑카트 이미지 start */}
        <div className="row">
          {itemImages &&
            itemImages.map((data, index) => (
              <div className="col-sm-6" key={index}>
                <div className="card">
                  <img src={data.imgUrl} className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{data.imgTitle}</h5>
                    <Link to={"/item-images/" + data.uuid}>
                      <span className="badge bg-warning">Edit</span>
                    </Link>
                    <a
                      style={{ color: "inherit" }}
                      className="ms-2"
                      onClick={() => {
                        deleteImage(data.uuid);
                      }}
                    >
                      <span className="badge bg-danger">Delete</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* 쇼핑카트 이미지 end */}

        {/* 이미지 업로드 버튼 start */}
        <Link to={"/add-item-images/"}>
          <span className="badge bg-primary">이미지 업로드</span>
        </Link>
        {/* 이미지 업로드 버튼 end */}
    </>
  );
}

export default ItemImagesList;
