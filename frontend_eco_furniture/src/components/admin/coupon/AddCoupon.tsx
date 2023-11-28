import React, { useState } from "react";
import ICoupon from "../../../types/admin/coupon/ICoupon";
import CouponService from "../../../service/admin/coupon/CouponService";

function AddCoupon() {
  const initialCoupon = {
    couponId: 0,
    couponName: "",
    discountValue: 0,
    couponEndTime: "",
  };

  const [coupon, setCoupon] = useState<ICoupon>(initialCoupon);
  // 저장버튼 클릭후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);

  // 함수 정의
  const handleInputChange = (event: any) => {
    const { name, value } = event.target; // 화면값
    setCoupon({ ...coupon, [name]: value });
  };

  const saveCoupon = () => {
    var data = {
      couponId: coupon.couponId,
      couponName: coupon.couponName,
      discountValue: coupon.discountValue,
      couponEndTime: coupon.couponEndTime
    };

    CouponService.create(data) // 저장 요청
      .then((response: any) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 새폼 보여주기
  const newCodeCategory = () => {
    setCoupon(initialCoupon);
    setSubmitted(false);
  };

  return (
    <>
      <div className="row">
        {submitted ? (
          <div className="col-6 mx-auto">
            <h4>등록이 성공적으로 완료되었습니다.</h4>
            <button className="btn btn-success" onClick={newCodeCategory}>
              저장
            </button>
          </div>
        ) : (
          <>
            <div className="col-6 mx-auto">
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
                    할인율
                  </label>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    id="discountValue"
                    required
                    className="form-control"
                    value={coupon.discountValue}
                    onChange={handleInputChange}
                    placeholder="discountValue"
                    name="discountValue"
                  />
                </div>
              </div>

              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="couponEndTime" className="col-form-label">
                    쿠폰소멸일
                  </label>
                </div>
                <div className="col-9">
                  <input
                    type="date"
                    id="couponEndTime"
                    required
                    className="form-control"
                    value={coupon.couponEndTime}
                    onChange={handleInputChange}
                    placeholder="couponEndTime"
                    name="couponEndTime"
                  />
                </div>
              </div>

              <div className="row g-3 mt-3 mb-3">
                <button
                  onClick={saveCoupon}
                  className="btn btn-outline-primary ms-2 col"
                >
                  저장
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default AddCoupon;
