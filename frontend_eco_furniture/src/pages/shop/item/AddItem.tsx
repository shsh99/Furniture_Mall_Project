import React, { useEffect, useState } from 'react'
import ItemService from '../../../service/shop/item/ItemService';
import IItem from '../../../types/shop/item/IItem';

function AddItem() {
// todo: 변수 정의
  // todo: 객체 초기화
  const initialItem = {
    itemNo : null,
    itemName : "",
    itemPrice : 0,
    itemQty : 0,
    imgPath : ""
  };

 
  // item 객체
  const [item, setItem] = useState<IItem>(initialItem);
  // 저장버튼 클릭후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);

  // todo: 함수 정의
  // todo: input 태그에 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // 화면값
    setItem({ ...item, [name]: value }); // 변수저장
  };

  // 저장 함수
  const saveItem = () => {
    // 임시 객체 : 변수 <- 화면값
    var data = {
        itemName : item.itemName,
        itemPrice : item.itemPrice,
        itemQty : item.itemQty,
        imgPath : item.imgPath
    };

    ItemService.create(data) // 저장 요청
      .then((response: any) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 새폼 보여주기 함수 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
  const newItem = () => {
    setItem(initialItem); // 초기화
    setSubmitted(false); // submitted 변수 초기화
  };



  return (
    <>
        
    <div className="row">
      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>성공적으로 저장되었습니다.</h4>
          <button className="btn btn-success" onClick={newItem}>
            추가
          </button>
        </div>
      ) : (
        <>

          {/* 입력 양식 + 저장 시작 */}
          <div className="col-6 mx-auto">
            
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="itemName" className="col-form-label">
                상품명
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="itemName"
                  required
                  className="form-control"
                  value={item.itemName}
                  onChange={handleInputChange}
                  placeholder="상품명"
                  name="itemName"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="imgPath" className="col-form-label">
                  이미지 경로
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="imgPath"
                  required
                  className="form-control"
                  value={item.imgPath}
                  onChange={handleInputChange}
                  placeholder="imgPath"
                  name="imgPath"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="itemPrice" className="col-form-label">
                  가격
                </label>
              </div>
              <div className="col-9">
                <input
                  type="number"
                  id="itemPrice"
                  required
                  className="form-control"
                  value={item.itemPrice}
                  onChange={handleInputChange}
                  placeholder="itemPrice"
                  name="itemPrice"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="itemQty" className="col-form-label">
                  제품재고
                </label>
              </div>
              <div className="col-9">
                <input
                  type="number"
                  id="itemQty"
                  required
                  className="form-control"
                  value={item.itemQty}
                  onChange={handleInputChange}
                  placeholder="상품가격"
                  name="itemQty"
                />
              </div>
            </div>

            

            {/* 저장 버튼 시작 */}
            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveItem}
                className="btn btn-outline-primary ms-2 col"
              >
                저장
              </button>
            </div>
            {/* 저장 버튼 끝 */}
          </div>
          {/* 입력 양식 + 저장 끝 */}
        </>
      )}
    </div>
    </>
  )
}

export default AddItem