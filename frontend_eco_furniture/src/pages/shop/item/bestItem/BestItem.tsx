import React from 'react'
import { Link } from 'react-router-dom'

function BestItem() {
  return (
    <div className="hero">
      <div className="container">
        <div className="d-flex row justify-content-between">
          <div className="col-lg-10">
            <div className="mt-5">
              <h1 className="bestt">베스트 카테고리 쇼핑하기</h1>

              <div className="d-flex mt-5">
                <h2>친환경 소재만을 엄선해 제작한 가구 </h2>
              </div>
            </div>
          </div>
          <div className="product-section">
            <div className="container">
              <div className="row">
                {/* <!-- Start Column 1 --> */}

                {/* <!-- End Column 1 --> */}

                {/* carousel */}
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="3000"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      className="active"
                      id="a"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      id="a"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      id="a"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  {/* 1번 사진 */}
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="d-flex justify-content-between">
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                          <Link className="product-item" to="cart.html">
                            <img
                              src={require("../../../../assets/images/chair1/chair1.png")}
                              className="d-block w-100"
                            />
                            <h3 className="product-title">북유럽 의자</h3>
                            <strong className="product-price">$50.00</strong>


                          </Link>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                          <Link className="product-item" to="cart.html">
                            <img
                              src={require("../../../../assets/images/chair2/chair2.png")}
                              className="d-block w-100"
                            />
                            <h3 className="product-title">에어로 의자</h3>
                            <strong className="product-price">$78.00</strong>


                          </Link>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                          <Link className="product-item" to="cart.html">
                            <img
                              src={require("../../../../assets/images/chair3/chair3.png")}
                              className="d-block w-100"
                            />
                            <h3 className="product-title">인체공학적 의자</h3>
                            <strong className="product-price">$43.00</strong>


                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* 1번 사진 끝 */}

                    {/* 2번 사진 */}
                    <div className="carousel-item">
                      <div className="d-flex justify-content-between">
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                          <Link className="product-item" to="cart.html">
                            <img
                              src={require("../../../../assets/images/chair2/chair2.png")}
                              className="d-block w-100"
                            />
                            <h3 className="product-title">에어로 의자</h3>
                            <strong className="product-price">$78.00</strong>


                          </Link>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                          <Link className="product-item" to="cart.html">
                            <img
                              src={require("../../../../assets/images/chair3/chair3.png")}
                              className="d-block w-100"
                            />
                            <h3 className="product-title">인체공학적 의자</h3>
                            <strong className="product-price">$43.00</strong>


                          </Link>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                          <Link className="product-item" to="cart.html">
                            <img
                              src={require("../../../../assets/images/chair1/chair1.png")}
                              className="d-block w-100"
                            />
                            <h3 className="product-title">북유럽 의자</h3>
                            <strong className="product-price">$50.00</strong>


                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* 2번 사진 끝*/}

                    {/* 3번 사진 */}
                    <div className="carousel-item">
                      <div className="d-flex justify-content-between">
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                          <Link className="product-item" to="cart.html">
                            <img
                              src={require("../../../../assets/images/chair3/chair3.png")}
                              className="d-block w-100"
                            />
                            <h3 className="product-title">인체공학적 의자</h3>
                            <strong className="product-price">$43.00</strong>


                          </Link>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                          <Link className="product-item" to="cart.html">
                            <img
                              src={require("../../../../assets/images/chair1/chair1.png")}
                              className="d-block w-100"
                            />
                            <h3 className="product-title">북유럽 의자</h3>
                            <strong className="product-price">$50.00</strong>


                          </Link>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                          <Link className="product-item" to="cart.html">
                            <img
                              src={require("../../../../assets/images/chair2/chair2.png")}
                              className="d-block w-100"
                            />
                            <h3 className="product-title">에어로 의자</h3>
                            <strong className="product-price">$78.00</strong>


                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* 3번 사진 끝*/}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>

                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                {/* carousel end */}


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestItem