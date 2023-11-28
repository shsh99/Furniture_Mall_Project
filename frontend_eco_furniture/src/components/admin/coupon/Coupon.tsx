import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ICoupon from "../../../types/admin/coupon/ICoupon";
import CouponService from "../../../service/admin/coupon/CouponService";

function Coupon() {
  // todo : 변수 정의
  // 객체 초기화
  const initialCoupon = {
    couponId: 0,
    couponName: "",
    discountValue: 0,
    couponEndTime: "",
  };

  // 수정 될 객체
  const [coupon, setCoupon] = useState<ICoupon>(initialCoupon);
  // 화면에 수정 성공에 메세지 찍기 변수
  const [message, setMessage] = useState<string>("");

  const { couponId } = useParams();

  let navigate = useNavigate();

  // TODO: 함수 정의
  // 상세 조회 함수
  const getFaq = (couponId: string) => {
    CouponService.get(couponId) // 벡엔드로 상세조회 요청
      .then((response: any) => {
        setCoupon(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 화면이 뜰때 실행되는 이벤트 + faqNo 값이 바뀌면 실행
  useEffect(() => {
    if (couponId) getFaq(couponId);
  }, [couponId]);

  // input 태그 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCoupon({ ...coupon, [name]: value });
  };

  // 수정 함수
  const updateCoupon = () => {
    CouponService.update(coupon.couponId, coupon) // 벡엔드로 수정요청
      .then((response: any) => {
        console.log(response.data);
        setMessage("수정되었습니다.");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 삭제 함수
  const deleteCoupon = () => {
    CouponService.remove(coupon.couponId) // 벡엔드로 삭제요청
      .then((response: any) => {
        console.log(response.data);
        // 페이지 이동
        navigate("/coupon");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <>
      {coupon ? (
        <div className="col-6 mx-auto">
          <form>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="couponName" className="col-form-label">
                  쿠폰명
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="couponName"
                  required
                  className="form-control"
                  value={coupon.couponName}
                  onChange={handleInputChange}
                  placeholder="couponName"
                  name="couponName"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="discountValue" className="col-form-label">
                  discountValue
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="content"
                  required
                  className="form-control"
                  value={coupon.discountValue}
                  onChange={handleInputChange}
                  placeholder="discountValue"
                  name="discountValue"
                />
              </div>
            </div>
          </form>

          <div className="row g-3 mt-3 mb-3">
            <button
              type="submit"
              onClick={updateCoupon}
              className="btn btn-outline-success ms-2 col"
            >
              Update
            </button>

            <button
              onClick={deleteCoupon}
              className="btn btn-outline-danger ms-3 col"
            >
              Delete
            </button>
          </div>

          {message && (
            <p className="alert alert-success mt-3 text-center">{message}</p>
          )}
        </div>
      ) : (
        <div className="col-6 mx-auto">
          <br />
          <p>쿠폰을 눌러주세요.</p>
        </div>
      )}
    </>
  );
}

export default Coupon;
