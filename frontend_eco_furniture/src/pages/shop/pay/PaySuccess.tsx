import React from "react";
import { Link } from "react-router-dom";

function PaySuccess() {
  return (
    <>
      {/* <!-- Start Hero Section --> */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>결제 성공</h1>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      {/* <!-- End Hero Section --> */}

      {/* 결제 완료 후 행동 선택 */}
      <div className="container">
      <div className="col-lg-5 mb-5">
              <div className="intro-excerpt">
               <h2>결제가 완료되었습니다.</h2>
              </div>
            </div>
            <div className="col-lg-7 mb-5">
                <Link to="/purchaseList">
            <button type="button" className="btn btn-primary">PurchaseList</button>
            </Link>
            <Link to="/">
            <button type="button" className="btn btn-primary ms-2">Home</button>
            </Link>

            </div>
      </div>
    </>
  );
}

export default PaySuccess;
