import React from "react";
import { Link } from "react-router-dom";

function PurchaseList() {
  return (
    <>
      {/* <!-- Start Hero Section --> */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>구매 내역</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero Section --> */}
      <div className="container mb-5">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                구매상품 #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <img src="https://fastly.picsum.photos/id/253/150/150.jpg?hmac=C2Phfhk2ClWO0_Qc4-cgrdFyoUBWj0OAl6g6pzx2G9c" />
                &nbsp; 개좋은 의자1
                <div className="btn-group-sm row justify-content-end">
                  <div className="col-5">
                    <Link to="https://www.cjlogistics.com/ko/tool/parcel/tracking">
                      <button
                        type="button"
                        className="mb-1 btn btn-primary mr-1"
                      >
                        배송 조회
                      </button>
                    </Link>

                    <button type="button" className="mb-1 btn btn-primary mr-1">
                      상세 조회
                    </button>
                    <Link to="/cancel">
                      <button
                        type="button"
                        className="mb-1 btn btn-primary mr-1"
                      >
                        취소 / 환불
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                구매상품 #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <img src="https://fastly.picsum.photos/id/924/150/150.jpg?hmac=PUnP5e3AsBGlUktyXFmeXXX0qEyzwr3tAXbU9CLEIK4" />{" "}
                &nbsp; 개좋은 의자1
                <div className="btn-group-sm row justify-content-end">
                  <div className="col-5">
                    <Link to="https://www.cjlogistics.com/ko/tool/parcel/tracking">
                      <button
                        type="button"
                        className="mb-1 btn btn-primary mr-1"
                      >
                        배송 조회
                      </button>
                    </Link>
                    <button type="button" className="mb-1 btn btn-primary mr-1">
                      상세 조회
                    </button>
                    <Link to="/cancel">
                      <button
                        type="button"
                        className="mb-1 btn btn-primary mr-1"
                      >
                        취소 / 환불
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                구매상품 #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <img src="https://fastly.picsum.photos/id/594/150/150.jpg?hmac=PDpkdpMrHKPg-aGfvHCWEJrn-7lwAnt9VrhXIs_070Q" />
                &nbsp; 개좋은 의자1
                <div className="btn-group-sm row justify-content-end">
                  <div className="col-5">
                    <Link to="https://www.cjlogistics.com/ko/tool/parcel/tracking">
                      <button
                        type="button"
                        className="mb-1 btn btn-primary mr-1"
                      >
                        배송 조회
                      </button>
                    </Link>
                    <button type="button" className="mb-1 btn btn-primary mr-1">
                      상세 조회
                    </button>
                    <Link to="/cancel">
                      <button
                        type="button"
                        className="mb-1 btn btn-primary mr-1"
                      >
                        취소 / 환불
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PurchaseList;
