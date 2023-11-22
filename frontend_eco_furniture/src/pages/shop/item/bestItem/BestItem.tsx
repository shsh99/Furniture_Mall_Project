import React from 'react'

function BestItem() {
  return (
    <div>BestItem
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
				  id ="a"
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
                      <a className="product-item" href="cart.html">
                        <img
                          src="images/의자1.png"
                          className="d-block w-100"
                        />
                        <h3 className="product-title">북유럽 의자</h3>
                        <strong className="product-price">$50.00</strong>
						
                        <span className="icon-cross">
                          <img src="images/cross.svg" className="img-fluid" />
                        </span>
                      </a>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                      <a className="product-item" href="cart.html">
                        <img
                          src="images/의자2.png"
                          className="d-block w-100"
                        />
                        <h3 className="product-title">에어로 의자</h3>
                        <strong className="product-price">$78.00</strong>

                        <span className="icon-cross">
                          <img src="images/cross.svg" className="img-fluid" />
                        </span>
                      </a>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                      <a className="product-item" href="cart.html">
                        <img
                          src="images/의자3.png"
                          className="d-block w-100"
                        />
                        <h3 className="product-title">인체공학적 의자</h3>
                        <strong className="product-price">$43.00</strong>

                        <span className="icon-cross">
                          <img src="images/cross.svg" className="img-fluid" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* 1번 사진 끝 */}

                {/* 2번 사진 */}
                <div className="carousel-item">
				<div className="d-flex justify-content-between"> 
                    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                      <a className="product-item" href="cart.html">
                        <img
                          src="images/의자2.png"
                          className="d-block w-100"
                        />
                        <h3 className="product-title">에어로 의자</h3>
                        <strong className="product-price">$78.00</strong>

                        <span className="icon-cross">
                          <img src="images/cross.svg" className="img-fluid" />
                        </span>
                      </a>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                      <a className="product-item" href="cart.html">
                        <img
                          src="images/의자3.png"
                          className="d-block w-100"
                        />
                        <h3 className="product-title">인체공학적 의자</h3>
                        <strong className="product-price">$43.00</strong>

                        <span className="icon-cross">
                          <img src="images/cross.svg" className="img-fluid" />
                        </span>
                      </a>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                      <a className="product-item" href="cart.html">
                        <img
                          src="images/의자1.png"
                          className="d-block w-100"
                        />
                        <h3 className="product-title">북유럽 의자</h3>
                        <strong className="product-price">$50.00</strong>

                        <span className="icon-cross">
                          <img src="images/cross.svg" className="img-fluid" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* 2번 사진 끝*/}

                {/* 3번 사진 */}
				<div className="carousel-item">
				<div className="d-flex justify-content-between"> 
                    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                      <a className="product-item" href="cart.html">
                        <img
                          src="images/의자3.png"
                          className="d-block w-100"
                        />
                        <h3 className="product-title">인체공학적 의자</h3>
                        <strong className="product-price">$43.00</strong>

                        <span className="icon-cross">
                          <img src="images/cross.svg" className="img-fluid" />
                        </span>
                      </a>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                      <a className="product-item" href="cart.html">
                        <img
                          src="images/의자1.png"
                          className="d-block w-100"
                        />
                        <h3 className="product-title">북유럽 의자</h3>
                        <strong className="product-price">$50.00</strong>

                        <span className="icon-cross">
                          <img src="images/cross.svg" className="img-fluid" />
                        </span>
                      </a>
                    </div>
					<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                      <a className="product-item" href="cart.html">
                        <img
                          src="images/의자2.png"
                          className="d-block w-100"
                        />
                        <h3 className="product-title">에어로 의자</h3>
                        <strong className="product-price">$78.00</strong>

                        <span className="icon-cross">
                          <img src="images/cross.svg" className="img-fluid" />
                        </span>
                      </a>
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
  )
}

export default BestItem