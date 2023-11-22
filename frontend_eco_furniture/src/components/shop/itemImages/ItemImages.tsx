import React, { useEffect, useState } from "react";
import IItemImages from "../../../types/shop/itemImages/IItemImages";
import itemImagesService from "../../../service/shop/itemImages/itemImagesService";
import { useParams } from "react-router-dom";

function ItemImages() {
  // todo : 변수정의
  // 전체조회 페이지에서 전송한 기본키(dno)
  const { uuid } = useParams();

  // 객체 초기화(상세조회 : 기본키 있음)
  const initialItemImages = {
    uuid: null, // 기본키(범용적으로 유일한 값을 만들어주는 값)

    imgTitle: "",

    imgUrl: "",
  };
  // uploadFileDb 수정될객체
  const [uploadItemImages, setUploadItemImages] =
    useState<IItemImages>(initialItemImages);
  // 화면에 수정 성공 메세지 찍기 변수
  const [message, setMessage] = useState<string>("");

  // todo : 이미지 선택 변수
  const [selectedFiles, setSelectedFiles] = useState<FileList>();

  // todo : 함수 정의
  // 상세조회 함수
  const getItemImages = (uuid: string) => {
    itemImagesService
      .getItemImages(uuid) // 백엔드로 상세조회 요청
      .then((response: any) => {
        setUploadItemImages(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 화면이 뜰때 실행되는 이벤트 + dno 값이 바뀌면 실행
  useEffect(() => {
    if (uuid) getItemImages(uuid);
  }, [uuid]);

  // input 태그 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUploadItemImages({ ...uploadItemImages, [name]: value });
  };
  // 수정 함수(파일첨부)
  const updateItemImages = () => {
    // 파일 선택한 변수
    let currentFile = selectedFiles?.[0]; // 1st 선택한 첨부파일

    itemImagesService
      .updateItemImages(uploadItemImages, currentFile) // 백엔드로 수정요청
      .then((response: any) => {
        console.log(response.data);
        setMessage("수정되었습니다.");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // todo : 파일 선택상자에서 이미지 선택시 실행되는 함수
  // 파일 선택상자 html 태그 : <input type="file"/>
  const selectFile = (event: any) => {
    // 화면에서 이미지 선택시 저장된 객체 : event.target.files
    // 변수명 as 타입 : 개발자가 변수가 무조건 특정타입이라고 보증함
    //                 (타입스크립트에서 체크 안함)
    setSelectedFiles(event.target.files as FileList);
  };

  return (
    <>
      <div>
        {/* 이미지명(imgTitle) 입력 박스 시작 */}
        <div className="edit-form">
          <div className="mb-3 col-md-12">
            <label htmlFor="fileTitle" className="form-label">
              이미지명
            </label>
            <input
              type="text"
              className="form-control"
              id="fileTitle"
              required
              name="fileTitle"
              value={uploadItemImages.imgTitle}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* 이미지명 입력 박스 끝 */}


        <div className="mb-3 col-md-12">
          <img src={uploadItemImages.imgUrl} className="card-img-top" alt="" />
        </div>

        {/* upload 선택상자/버튼 start */}
        <label className="btn btn-default p-0 mb-3 ">
          <input type="file" onChange={selectFile} />
        </label>

        <button
          className="btn btn-success mb-3 "
          disabled={!selectedFiles}
          onClick={updateItemImages}
        >
          Update
        </button>
        {/* upload 선택상자/버튼 end */}

        {/* upload 성공/실패 메세지 출력 시작 */}
        {message && (
          <div className="alert alert-success" role="alert">
            {message}
          </div>
        )}
        {/* upload 성공/실패 메세지 출력 끝 */}
      </div>
    </>
  );
}

export default ItemImages;
