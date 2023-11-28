import React from "react";

function Cansel() {
  return (
    <div className="hero">
      <div className="container">
        <div className="d-flex row justify-content-between">
          <div className="col-lg-10">
            <div className="mt-5">
              <h1 className="bestt">취소 / 환불</h1>
            </div>
          </div>
          <div className="col-lg-8 mt-3">
          <div className="mt-5">
                <img className="" src="https://fastly.picsum.photos/id/660/200/200.jpg?hmac=5UOdBCKDcPq_zS0RAVkvSD934EYVyCEdExCagJur-g8" />
                <div className="">
                취소환불할 상품명
                </div>
              </div>
            <div className="mb-3 ">
              <label className="form-label">취소 환불 사유</label>
              <textarea className="form-control row-3"></textarea>
            </div>
            <div className="mb-3" >
            <select className="form-select">
              <option selected>교환/환불 사유 선택</option>
              <option value="1">ㅡㅡ</option>
              <option value="2">ㅇㅇ</option>
            </select>
            </div>
            <div className="mb-3">
            <select className="form-select">
              <option selected>교환/환불 방법 선택</option>
              <option value="1">교환</option>
              <option value="2">환불</option>
            </select>
            </div>
            <button type="button" className="btn btn-primary btn-lg">
              교환 / 환불 요청
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cansel;
