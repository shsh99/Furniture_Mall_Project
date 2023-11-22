import IItemImages from "../../../types/shop/itemImages/IItemImages";
import http from "../../../utils/http-common";

// 전체 조회 + like 검색(paging 기능)
const getImages = (imgTitle:string, page:number, size:number): Promise<any> => {
    return http.get(`/shop/item-images?imgTitle=${imgTitle}&page=${page}&size=${size}`);
  };
  
  // 상세 조회
  const getItemImages = (uuid:any): Promise<any> => {
    return http.get(`/shop/item-images/get/${uuid}`);
  };
  
  // 저장 함수
  // updateItemImages : 제목 + 타이틀 속성 가진 객체
  // itemImages : 실제 이미지(첨부파일)
  // FormData 객체를 이용해서 백엔드로 전송
  const upload = (updateItemImages:IItemImages,itemImages:any): Promise<any> => {
    // FormData 객체 생성 : Map 자료구조와 유사(키, 값)
    let formData = new FormData();
    formData.append("imgTitle", updateItemImages.imgTitle);
    formData.append("itemImages", itemImages); // 첨부파일
    return http.post("/shop/item-images/upload", formData, {
      headers:{
        "Content-Type" : "multipart/form-data"
      }
    });
  };
  
  // 수정 함수
  const updateItemImages = (uploadItemImages:IItemImages, itemImages:any): Promise<any> => {

    console.log("update() parameter ; ", uploadItemImages);
  
    let formData = new FormData();
  
    formData.append("imgTitle", uploadItemImages.imgTitle);
    formData.append("itemImages", itemImages); // 첨부파일
  
    return http.put(`/shop/item-images/${uploadItemImages.uuid}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
    });
  };
  
  // 삭제 함수(uuid)
  const deleteImg = (uuid:any):Promise<any> => {
    return http.delete<any>(`/shop/item-images/deletion/${uuid}`);
  };
  
  const itemImagesService = {
    getImages, //  전체조회
    getItemImages, // 상세조회
    upload, // insert (저장)
    updateItemImages, // 수정
    deleteImg,  // 삭제
  };
  
  export default itemImagesService;