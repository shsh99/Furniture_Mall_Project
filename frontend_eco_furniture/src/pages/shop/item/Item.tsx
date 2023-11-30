import React, { useEffect, useState } from "react";
import IItem from "../../../types/shop/item/IItem";
import { useNavigate, useParams } from "react-router-dom";
import ItemService from "../../../service/shop/item/ItemService";

function Item() {
  // todo: 변수 정의
  // 전체조회 페이지에서 전송한 기본키(spno)
  const { itemNo } = useParams();
  // 강제페이지 이동 함수
  let navigate = useNavigate();

  // simpleProduct 초기화(상세조회 : 기본키 있음)
  // todo: 객체 초기화
  const initialItem = {
    itemNo: null,
    itemName: "",
    itemPrice: 0,
    itemQty: 0,
    imgPath: ""
  };

  // Item 객체
  const [item, setItem] =
    useState<IItem>(initialItem);
  // 화면에 수정 성공에 메세지 찍기 변수
  const [message, setMessage] = useState<string>("");
  // todo: 장바구니 물품 개수를 저장할 변수
  let [amount, setAmount] = useState<number>(0);

  // todo: 함수 정의
  // Item 상세조회 함수
  const getItem = (itemNo: string) => {
    ItemService.get(itemNo) // 벡엔드로 상세조회 요청
      .then((response: any) => {
        setItem(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 화면이 뜰때 실행되는 이벤트 + itemNo 값이 바뀌면 실행
  useEffect(() => {
    if (itemNo) getItem(itemNo);
  }, [itemNo]);

  // todo: 장바구니 저장 함수
  // 저장 함수
  const saveCart = () => {
    var data = {
        itemName: item.itemName,
        itemPrice: item.itemPrice,
        itemQty: item.itemQty,
        imgPath: item.imgPath
    };

    ItemService.create(data) // 저장 요청
      .then((response: any) => {
        console.log(response.data);
        setMessage("장바구니에 저장되었습니다.");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  //   todo: /simple-cart(장바구니) 전체 조회 페이지로 이동하는 함수
  const goCart = () => {
    navigate("/cart");
  };

  //   todo: 장바구니 개수 증가 함수
  const increaseCount = () => {
    amount += 1;
    setAmount(amount); // 현재 증가값 저장
  };

  //   todo: 장바구니 개수 감소 함수
  const decreaseCount = () => {
    if (amount > 0) {
        amount -= 1;
        amount -= 1;
      setAmount(amount); // 현재 감소값 저장
    }
  };

  // todo: 주문 결과 표시 함수
  const goOrder = () => {
    if (amount == 0) {
      setMessage("장바구니 개수를 증가시켜주세요");
      return;
    }
    alert(`주문했습니다. ${item.itemName}, ${amount}`);
  };

  return (
    <>
      <div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={item.imgPath}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.itemName}</h5>
                <h5 className="card-title">원 {item.itemPrice}</h5>
           
                <div
                  className="btn-group col"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button
                    type="button"
                    className="btn btn-outline-secondary opacity-50"
                    onClick={decreaseCount}
                  >
                    -
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    disabled
                  >
                    {amount}
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary opacity-50"
                    onClick={increaseCount}
                  >
                    +
                  </button>
                </div>

                <div className="mt-3">
                  <button
                    type="submit"
                    onClick={saveCart}
                    className="btn btn-primary w-25"
                  >
                    장바구니에 담기
                  </button>

                  <button
                    type="submit"
                    onClick={goCart}
                    className="btn btn-success w-25 ms-2"
                  >
                    장바구니로 가기
                  </button>
                </div>

                <div className="mt-3">
                  <button
                    type="button"
                    onClick={goOrder}
                    className="btn btn-warning w-25"
                  >
                    바로 주문하기
                  </button>
                </div>

                {message && (
                  <p className="alert alert-success mt-3 text-center">
                    {message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
