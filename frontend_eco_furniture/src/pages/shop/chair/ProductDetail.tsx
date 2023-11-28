// ProductDetail.tsx

import React, { useState } from "react";
import Bar from "./Bar";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Like from "../Like";

interface ProductDetailProps {
  product: {
    id: number;
    name: string;
    description: string;
    imageUrls: string[];
    price: string;
    productReview: string;
    productInformation: string;
    brandName : string;
    productNumber : string;
    reference: string;
    material: string;
    management: string;
    noticeInformation : string;
    // 다른 제품 정보 필드 추가
  };
}




const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);
  const [showSubMenu3, setShowSubMenu3] = useState(false);

  function handleSubMenuClick() {
    setShowSubMenu((prevState) => !prevState);
    setShowSubMenu2(false);
    setShowSubMenu3(false);
  }

  function handleSubMenuClick2() {
    setShowSubMenu2((prevState) => !prevState);
    setShowSubMenu(false);
    setShowSubMenu3(false);
  }

  function handleSubMenuClick3() {
    setShowSubMenu3((prevState) => !prevState);
    setShowSubMenu(false);
    setShowSubMenu2(false);
  }

  const groupedImages = [];
  for (let i = 0; i < product.imageUrls.length; i += 2) {
    groupedImages.push(product.imageUrls.slice(i, i + 2));
  }

  return (
    <>
      <hr style={{ marginLeft: "-50px" }} />
      <div className="hero">
        <div className="container">
          <div className="d-flex row ">
            <div className="col-lg-10">
              <div className="product-detail-container" >
                <div className="product-detail-content" style={{ width: '80vw', display: 'flex', alignItems: 'center' }} >
                  <div className="product-detail-images" style={{ position: 'relative' }}>
                    {groupedImages.map((group, groupIndex) => (
                      <div key={groupIndex} className="image-group" style={{ display: 'flex' }}>
                        {group.map((imageUrl, index) => (
                          <div key={index} style={{ flex: '1', margin: '5px' }}>
                            <img
                              src={imageUrl}
                              alt={`${product.name} - ${groupIndex * 2 + index + 1}`}
                              style={{
                                width: '100%', /* 이미지 너비 */
                                maxWidth: '400px', /* 이미지 너비 */
                                height: '400px', /* 이미지 높이 */
                                objectFit: 'cover', /* 이미지 비율 유지 */
                                backgroundColor: 'white'
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  {/* 버튼 */}
                  <div className="product-detail-text" style={{
                    position: 'sticky', // 'sticky' -> 'absolute'로 변경
                    top: 0,
                    padding: '30px',
                    alignSelf: 'flex-start',
                    marginLeft: '100px',
                    borderRadius: '20px',
                    alignItems: 'center',
                    width: '23vw',
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    color : "black",
                    left: 'calc(50% - 200px)', // 가운데 정렬을 위해 적절한 left 값 설정
                  }}>
                    <div className="font-color">
                    <div className="d-flex">
                      <h2>
                        <b>{product.name}</b>
                      </h2>
                      <div style={{marginLeft: '15px'}}>
                      <Like/>
                      </div>
                    </div>
                      <h6>{product.description}  </h6>
                      
                      <br /> 
                      <h3>{product.price}</h3>
                      <h5>{product.productReview}</h5>
                      <Bar/>
                      <br />
                      <div style={{ borderRadius: '10px', border: '1px solid black', padding: '5px' }}>
                        <div className="box">
                          <button
                            className="arrow-button4"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            style={{
                              border: 'none', // 테두리 없음
                              background: 'none', // 배경색 없음
                              outline: 'none', // 포커스 아웃라인 제거
                            }}
                          >
                            <b style={{ marginRight: "180px", padding: "0" }}>제품정보</b>
                            →
                          </button>
                        </div>

                        <div className="box2" style={{ borderTop: '1px solid black', width: '100%' }}>
                          <button
                            className="arrow-button4"
                            data-bs-toggle="modal"
                            data-bs-target="#modal1"
                            style={{
                              border: 'none', // 테두리 없음
                              background: 'none', // 배경색 없음
                              outline: 'none', // 포커스 아웃라인 제거
                            }}
                          >
                            <b style={{ marginRight: "195px", padding: "0" }}>상품평</b>
                            →
                          </button>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      
                    <button className="purchase-button" style={{ color: 'white', backgroundColor: 'blue', borderRadius: '10px', border: 'none' }}>
                        장바구니
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <button className="purchase-button" style={{ color: 'white', backgroundColor: 'green', borderRadius: '10px', border: 'none' }}>
                        구매하기
                      </button>
                    </div>
                  </div>

                </div>


                {/* 제품 설명 칸 */}
                <div className="text1">
                  <div className="section-with-line">
                    <div className="border-line"></div>
                    <div className="line-margin">

                      <hr style={{}} />

                      <h3>
                        {/* 제품 설명 <button className="arrow-button">→</button> */}
                        {/* 동구씨 모달 */}
                        {/* 제품설명 버튼  & 모달 */}
                        <button
                          type="button"
                          className="btn btn-primary "
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          style={{
                            color: "black",
                            border: "none",
                            backgroundColor: "transparent",
                          }}
                        >
                          <h3>
                            <span
                              className="align-self-center me-2"
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              제품 정보 <FaArrowRight style={{ marginLeft: "800px" }} />
                            </span>
                          </h3>
                        </button>
                      </h3>
                      <hr />
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div
                          className="modal-dialog "
                          style={{ marginTop: "0", marginRight: "0", marginLeft: "auto" }}
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h4
                                className="modal-title"
                                id="exampleModalLabel"
                                style={{ fontWeight: "bold", color: "black" }}
                              >
                                제품 설명
                              </h4>

                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                            <div style={{ color: "black" }}>
                                        {product.productInformation}
                                      </div>
                              <br />
                              <h3 style={{ color: "black" }}>브랜드</h3>
                              <div style={{ color: "black" }}>
                                        {product.brandName}
                                      </div>
                              <br />
                              <p style={{ color: "black" }}>제품 번호</p>

                              <p
                                style={{
                                  color: "white",
                                  background: "black",
                                  display: "inline-block",
                                  padding: "1px",
                                  margin: "1px",
                                }}
                              >
                                <div style={{ color: "white" }}>
                                        {product.productNumber}
                                      </div>
                              </p>

                              <ul className="side-text">
                                <hr style={{ marginLeft: "-50px" }} />
                                <a onClick={handleSubMenuClick} title="Alguma coisa">
                                  <p
                                    style={{
                                      color: "black",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    참고 <MdOutlineKeyboardArrowDown />
                                  </p>
                                </a>
                                {/* 열렸을 때 */}
                                {showSubMenu && (
                                  <ul style={{ marginTop: "0px" }}>
                                    <div style={{ color: "black" }}>
                                        {product.reference}
                                      </div>
                                      <br/>
                                  </ul>
                                )}

                                <hr style={{ marginLeft: "-50px" }} />
                                <a onClick={handleSubMenuClick2} title="Alguma coisa">
                                  <p
                                    style={{
                                      color: "black",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    소재 & 관리 <MdOutlineKeyboardArrowDown />
                                  </p>
                                </a>

                                {showSubMenu2 && (
                                  <ul style={{ marginTop: "0px" }}>
                                    <a
                                      className="sub-side"
                                      href="/blog"
                                      style={{ textDecoration: "none", color: "inherit" }}
                                    >
                                      <p
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          marginBottom: "5px",
                                        }}
                                      >
                                        소재{" "}
                                      </p>
                                      <div style={{ color: "black" }}>
                                        {product.material}
                                      </div>
                                      <br/>
                                      <p
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                          marginBottom: "5px",
                                        }}
                                      >
                                        제품관리{" "}
                                      </p>
                                      <div style={{ color: "black" }}>
                                        {product.management}
                                      </div>
                                      <br/>
                                      
                                    </a>
                                  </ul>
                                )}
                                <hr style={{ marginLeft: "-50px" }} />
                                <a onClick={handleSubMenuClick3} title="Alguma coisa">
                                  <p
                                    style={{
                                      color: "black",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    고시 정보 <MdOutlineKeyboardArrowDown />
                                  </p>
                                </a>
                                {showSubMenu3 && (
                                  <ul style={{ marginTop: "0px" }}>
                                    <div style={{ color: "black" }}>
                                        {product.noticeInformation}
                                      </div>
                                      <br/>
                                  </ul>
                                )}

                                {/* )} */}
                              </ul>
                              <hr style={{ marginLeft: "-50px" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 제품설명 버튼  & 모달 끝 */}
                      {/* 동구씨 모달 */}
                    </div>
                    <div className="border-line"></div>
                  </div>

                  <div className="section-with-line">
                    <div className="line-margin">

                      <h3>
                        {/* 치수 <button className="arrow-button2">→</button> */}
                        {/* 상품평 버튼 & 모달 */}
                        <button
                          type="button"
                          className="btn btn-primary d-flex flex-column align-items-start"
                          data-bs-toggle="modal"
                          data-bs-target="#modal1"
                          style={{
                            color: "black",
                            border: "none",
                            backgroundColor: "transparent",
                          }}
                        >
                          <h3>
                            <span
                              className="align-self-center me-2"
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              상품평 <FaArrowRight style={{ marginLeft: "840px" }} />
                            </span>
                          </h3>

                          <div>
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStarOutline /> (10)
                          </div>
                        </button>
                      </h3>
                      <hr />
                      <div
                        className="modal fade"
                        id="modal1"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div
                          className="modal-dialog "
                          style={{ marginTop: "0", marginRight: "0", marginLeft: "auto" }}
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h4
                                className="modal-title"
                                id="exampleModalLabel"
                                style={{ fontWeight: "bold", color: "black" }}
                              >
                                상품평
                              </h4>

                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <br /> <br />
                              <h3 style={{ color: "black" }}>4</h3>
                              <p>
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStarOutline /> (10)
                              </p>
                              <br />
                              <button
                                type="button"
                                className="btn btn-light text-light"
                                data-bs-target="#exampleModalToggle2"
                                data-bs-toggle="modal"
                                data-bs-dismiss="modal"
                                style={{ width: "100%" }}
                              >
                                상품평 쓰기
                              </button>
                              <div className="modal-body">
                              
                                <Bar />
                                <br />

                                <hr />
                                <h3>별점</h3>
                                <p>
                                  상판에 다리를 부착하기 위한 나사가 포함되어 있습니다.
                                </p>
                                <p>
                                  지역사회의 규칙에 따라 재활용 또는 에너지 회수를 위해
                                  분리 배출할 수 있습니다.
                                </p>
                                <hr />
                                <h3>소재 & 관리</h3>
                                <p>
                                  상판에 다리를 부착하기 위한 나사가 포함되어 있습니다.
                                </p>
                                <p>
                                  지역사회의 규칙에 따라 재활용 또는 에너지 회수를 위해
                                  분리 배출할 수 있습니다.
                                </p>
                              </div>
                              <hr style={{ marginLeft: "-50px" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 상품평 버튼 & 모달 끝 */}
                    </div>
                    <div className="border-line"></div>
                  </div>
                  <div className="section-with-line"></div>
                </div>

                {/* carousel2 */}
                <div className="carousel2">
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

                    <div className="d-flex mt-5">
                      <h3 style={{ color: 'black' }}>관련 제품</h3>
                    </div>
                    {/* 1번 사진 */}
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="d-flex justify-content-between">
                          <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                              <img
                                src="images/의자1/의자1.png"
                                className="d-block w-100"
                              />
                              <h3 className="product-title">북유럽 의자</h3>
                              <strong className="product-price">$50.00</strong>
                            </a>
                          </div>
                          <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                              <img
                                src="images/의자2/의자2.png"
                                className="d-block w-100"
                              />
                              <h3 className="product-title">에어로 의자</h3>
                              <strong className="product-price">$78.00</strong>
                            </a>
                          </div>
                          <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                              <img
                                src="images/의자3/의자3.png"
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
                                src="images/의자4/의자4.png"
                                className="d-block w-100"
                              />
                              <h3 className="product-title">에어로 의자</h3>
                              <strong className="product-price">$78.00</strong>
                            </a>
                          </div>
                          <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                              <img
                                src="images/의자5/의자5.png"
                                className="d-block w-100"
                              />
                              <h3 className="product-title">인체공학적 의자</h3>
                              <strong className="product-price">$43.00</strong>
                            </a>
                          </div>
                          <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                              <img
                                src="images/의자6/의자6.png"
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
                                src="images/의자3/의자3.png"
                                className="d-block w-100"
                              />
                              <h3 className="product-title">인체공학적 의자</h3>
                              <strong className="product-price">$43.00</strong>
                            </a>
                          </div>
                          <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                              <img
                                src="images/의자1/의자1.png"
                                className="d-block w-100"
                              />
                              <h3 className="product-title">북유럽 의자</h3>
                              <strong className="product-price">$50.00</strong>
                            </a>
                          </div>
                          <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                              <img
                                src="images/의자2/의자2.png"
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
                </div>
                {/* carousel end */}
              </div >
            </div>

          </div>

        </div>

      </div >
      <hr style={{ marginLeft: "-50px" }} />
      <div className="container">
        <div className="row g-5 my-5 justify-content-center" style={{ marginTop: '30px' }}>
          <div className="col-lg-3 mb-lg-4">
            <div className="feature">
              <div className="icon">
                <img
                  src="images/truck.svg"
                  alt="Image"
                  className="imf-fluid"
                />
              </div>
              <h3>빠른 배송 &amp; 무료 배송</h3>
              <p>
                저희 Eco Furniture는 언제나 고객님들을 위해 당일 출고,
                무료 배송을 지원합니다!
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="feature">
              <div className="icon">
                <img
                  src="images/bag.svg"
                  alt="Image"
                  className="imf-fluid"
                />
              </div>
              <h3>한눈에 들어오는 상품</h3>
              <p>
                여러 상품들 중에 고민하시나요?
                <br /> 한눈에 원하는 상품을 찾을수 있게 정리되어있는
                카테고리와 메뉴를 보세요!
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="feature">
              <div className="icon">
                <img
                  src="images/support.svg"
                  alt="Image"
                  className="imf-fluid"
                />
              </div>
              <h3>12개월 무상 AS 서비스</h3>
              <p>
                저희 Eco Furniture는 구매한 상품에 대해 12개월 무상 AS
                서비스를 지원합니다!
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="feature">
              <div className="icon">
                <img
                  src="images/return.svg"
                  alt="Image"
                  className="imf-fluid"
                />
              </div>
              <h3>편리한 반품</h3>
              <p>
                인테리어가 어울리지 않아서, 제품에 문제가 있어서 등 환불, 반품을 하실 때 신속하게 처리합니다!
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ProductDetail;