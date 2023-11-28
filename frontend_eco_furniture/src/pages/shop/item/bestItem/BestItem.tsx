import React from "react";

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
                {/* <!-- Start Popular Product --> */}
                <div className="popular-product">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                        <div className="product-item-sm d-flex">
                          <div className="thumbnail">
                            <img
                              src="images/product-1.png"
                              alt="Image"
                              className="img-fluid"
                            />
                          </div>
                          <div className="pt-3">
                            <h3>Nordic Chair</h3>
                            <p>
                              Donec facilisis quam ut purus rutrum lobortis.
                              Donec vitae odio{" "}
                            </p>
                            <p>
                              <a href="#">Read More</a>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                        <div className="product-item-sm d-flex">
                          <div className="thumbnail">
                            <img
                              src="images/product-2.png"
                              alt="Image"
                              className="img-fluid"
                            />
                          </div>
                          <div className="pt-3">
                            <h3>Kruzo Aero Chair</h3>
                            <p>
                              Donec facilisis quam ut purus rutrum lobortis.
                              Donec vitae odio{" "}
                            </p>
                            <p>
                              <a href="#">Read More</a>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                        <div className="product-item-sm d-flex">
                          <div className="thumbnail">
                            <img
                              src="images/product-3.png"
                              alt="Image"
                              className="img-fluid"
                            />
                          </div>
                          <div className="pt-3">
                            <h3>Ergonomic Chair</h3>
                            <p>
                              Donec facilisis quam ut purus rutrum lobortis.
                              Donec vitae odio{" "}
                            </p>
                            <p>
                              <a href="#">Read More</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Popular Product --> */}
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
                          <a className="product-item" href="cart.html">
                            <img
                              src="images/의자1.png"
                              className="d-block w-100"
                            />
                            <h3 className="product-title">북유럽 의자</h3>
                            <strong className="product-price">$50.00</strong>
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

                <div className="d-flex row justify-content-center mt-5 ">
                  <div className="col-lg-10 ">
                    <div className="mt-5 ">
                      <h2
                        className="post-entry mb-5"
                        style={{
                          fontWeight: "bold",
                          color: "black",
                          fontSize: 1.5 + "rem",
                        }}
                      >
                        분위기 있게 크리스마스 장식하기
                      </h2>
                      <div className="d-flex justify-content-around align-items-center">
                        <div className="mx-2 ">
                          <img
                            src="images/santa.jpg"
                            className="d-block img-fluid mx-1"
                            alt="..."
                            style={{
                              width: "200px",
                              height: "150px",
                              borderRadius: 20 + "px",
                            }}
                          />
                          <p className="text-center">겨울 조명</p>
                        </div>
                        <div className="mx-2">
                          <img
                            src="images/citem2.jpg"
                            className="d-block img-fluid mx-1"
                            alt="..."
                            style={{
                              width: "200px",
                              height: "150px",
                              borderRadius: 20 + "px",
                            }}
                          />
                          <p className="text-center">겨울 장식/데코</p>
                        </div>
                        <div className="mx-2">
                          <img
                            src="images/item2.jpg"
                            className="d-block img-fluid mx-1"
                            alt="..."
                            style={{
                              width: "200px",
                              height: "150px",
                              borderRadius: 20 + "px",
                            }}
                          />
                          <p className="text-center">겨울 화분 </p>
                        </div>
                        <div className="mx-2">
                          <img
                            src="images/ctree1.jpg"
                            className="d-block img-fluid mx-1"
                            alt="..."
                            style={{
                              width: "200px",
                              height: "150px",
                              borderRadius: 20 + "px",
                            }}
                          />
                          <p className="text-center">크리스마스 트리</p>
                        </div>
                        <div className="mx-2">
                          <img
                            src="images/item1.jpg"
                            className="d-block img-fluid mx-1"
                            alt="..."
                            style={{
                              width: "200px",
                              height: "150px",
                              borderRadius: 20 + "px",
                            }}
                          />
                          <p className="text-center">크리스마스 데코</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="untree_co-section product-section before-footer-section">
                  <div className="container">
                    <div className="row">
                      {/* <!-- 책상 1 --> */}

                      <div className="col-12 col-md-6 col-lg-4 mb-5">
                        <a className="product-item" href="/table-1">
                          <img
                            src="images/책상1.png"
                            className="img-fluid product-thumbnail"
                          />
                          <h3 className="product-title">Nordic Chair</h3>
                          <strong className="product-price">$50.00</strong>

                          <span className="icon-cross">
                            <img src="images/cross.svg" className="img-fluid" />
                          </span>
                        </a>
                      </div>
                      {/* <!-- 책상 1 --> */}

                      {/* <!-- 책상 2 --> */}
                      <div className="col-12 col-md-6 col-lg-4 mb-5">
                        <a className="product-item" href="/table-2">
                          <img
                            src="images/책상2.png"
                            className="img-fluid product-thumbnail"
                          />
                          <h3 className="product-title">Nordic Chair</h3>
                          <strong className="product-price">$50.00</strong>

                          <span className="icon-cross">
                            <img src="images/cross.svg" className="img-fluid" />
                          </span>
                        </a>
                      </div>
                      {/* <!-- 책상 2 --> */}

                      {/* <!-- 책상 3 --> */}
                      <div className="col-12 col-md-6 col-lg-4 mb-5">
                        <a className="product-item" href="/table-3">
                          <img
                            src="images/책상3.png"
                            className="img-fluid product-thumbnail"
                          />
                          <h3 className="product-title">Kruzo Aero Chair</h3>
                          <strong className="product-price">$78.00</strong>

                          <span className="icon-cross">
                            <img src="images/cross.svg" className="img-fluid" />
                          </span>
                        </a>
                      </div>
                      {/* <!-- 책상 3 --> */}

                      {/* <!-- 책상 4 --> */}
                      <div className="col-12 col-md-6 col-lg-4 mb-5">
                        <a className="product-item" href="/table-4">
                          <img
                            src="images/책상4.png"
                            className="img-fluid product-thumbnail"
                          />
                          <h3 className="product-title">Ergonomic Chair</h3>
                          <strong className="product-price">$43.00</strong>

                          <span className="icon-cross">
                            <img src="images/cross.svg" className="img-fluid" />
                          </span>
                        </a>
                      </div>
                      {/* <!-- 책상 4 --> */}

                      {/* <!-- 책상 5 --> */}
                      <div className="col-12 col-md-6 col-lg-4 mb-5">
                        <a className="product-item" href="/table-5">
                          <img
                            src="images/책상5.png"
                            className="img-fluid product-thumbnail"
                          />
                          <h3 className="product-title">Ergonomic Chair</h3>
                          <strong className="product-price">$43.00</strong>

                          <span className="icon-cross">
                            <img src="images/cross.svg" className="img-fluid" />
                          </span>
                        </a>
                      </div>
                      {/* <!-- 책상 5 --> */}

                      {/* <!-- 책상 6 --> */}
                      <div className="col-12 col-md-6 col-lg-4 mb-5">
                        <a className="product-item" href="/table-6">
                          <img
                            src="images/책상6.png"
                            className="img-fluid product-thumbnail"
                          />
                          <h3 className="product-title">Ergonomic Chair</h3>
                          <strong className="product-price">$43.00</strong>

                          <span className="icon-cross">
                            <img src="images/cross.svg" className="img-fluid" />
                          </span>
                        </a>
                      </div>
                      {/* <!-- 책상 6 --> */}
                      
                    </div>
                  </div>
                </div>
{/* <!-- Start Blog Section --> */}
<div className="blog-section">
                        <div className="container">
                          <div className="row mb-5">
                            <div className="col-md-6">
                              <h2 className="section-title">Recent Blog</h2>
                            </div>
                            <div className="col-md-6 text-start text-md-end">
                              <a href="#" className="more">
                                View All Posts
                              </a>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                              <div className="post-entry">
                                <a href="#" className="post-thumbnail">
                                  <img
                                    src="images/post-1.jpg"
                                    alt="Image"
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="post-content-entry">
                                  <h3>
                                    <a href="#">First Time Home Owner Ideas</a>
                                  </h3>
                                  <div className="meta">
                                    <span>
                                      by <a href="#">Kristin Watson</a>
                                    </span>{" "}
                                    <span>
                                      on <a href="#">Dec 19, 2021</a>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                              <div className="post-entry">
                                <a href="#" className="post-thumbnail">
                                  <img
                                    src="images/post-2.jpg"
                                    alt="Image"
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="post-content-entry">
                                  <h3>
                                    <a href="#">
                                      How To Keep Your Furniture Clean
                                    </a>
                                  </h3>
                                  <div className="meta">
                                    <span>
                                      by <a href="#">Robert Fox</a>
                                    </span>{" "}
                                    <span>
                                      on <a href="#">Dec 15, 2021</a>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                              <div className="post-entry">
                                <a href="#" className="post-thumbnail">
                                  <img
                                    src="images/post-3.jpg"
                                    alt="Image"
                                    className="img-fluid"
                                  />
                                </a>
                                <div className="post-content-entry">
                                  <h3>
                                    <a href="#">
                                      Small Space Furniture Apartment Ideas
                                    </a>
                                  </h3>
                                  <div className="meta">
                                    <span>
                                      by <a href="#">Kristin Watson</a>
                                    </span>{" "}
                                    <span>
                                      on <a href="#">Dec 12, 2021</a>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Blog Section -->	 */}
                {/* <!-- Start We Help Section --> */}
                <div className="we-help-section">
                  <div className="container">
                    <div className="row justify-content-between">
                      <div className="col-lg-7 mb-5 mb-lg-0">
                        <div className="imgs-grid">
                          <div className="grid grid-1">
                            <img src="images/img-grid-1.jpg" alt="Untree.co" />
                          </div>
                          <div className="grid grid-2">
                            <img src="images/img-grid-2.jpg" alt="Untree.co" />
                          </div>
                          <div className="grid grid-3">
                            <img src="images/img-grid-3.jpg" alt="Untree.co" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 ps-lg-5">
                        <h2 className="section-title mb-4">
                          원하는 인테리어, <br />
                          모던한 디자인 인테리어를 쉽고 <br />
                          간편하게 지원합니다!
                        </h2>
                        <p>샬라샬라</p>

                        <ul className="list-unstyled custom-list my-4">
                          <li>공간별 인테리어를 보여줍니다</li>
                          <li>Donec vitae odio quis nisl dapibus malesuada</li>
                          <li>Donec vitae odio quis nisl dapibus malesuada</li>
                          <li>Donec vitae odio quis nisl dapibus malesuada</li>
                        </ul>
                        <p>
                          <a href="#" className="btn">
                            Explore
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End We Help Section --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestItem;
