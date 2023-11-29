import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// 화살표 아이콘
// import { FaArrowRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

// 별모양 아이콘 <별 IoMdStar /> <빈 별 IoMdStarOutline /> <반 별 IoMdStarHalf />
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { Button } from "@mui/material";
import StarRate from "../../StarRate";
import Bar from "./Bar";
import { Link } from "react-router-dom";

function Chair1Info() {

 
  
  

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
  return (
    <>
      제품 상세페이지
      <div className="col-12 col-md-6 col-lg-4 mb-5">
        <a className="product-item">
          <img src={require("../../../assets/images/chair1/chair1.png")} className="img-fluid product-thumbnail" />
          <h3 className="product-title">샤모니 a암 체어(Black)</h3>
          <strong className="product-price">$43.00</strong>
        </a>
      </div>
      LINNMON 린몬 / ADILS 아딜스 테이블, 화이트, 100x60 cm ￦45,000가격 ￦
      45000 (81)
      <hr/>
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
       <span className="align-self-center me-2" style={{  display: "flex", alignItems: "center" }}>제품 설명 <FaArrowRight style={{ marginLeft: "400px" }} /></span>
      </button>

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
              <p>
                다리받침의 높이를 조절할 수 있어서 고르지 않은 바닥에도
                안정적으로 세울 수 있습니다.
              </p>
              <br />
              <h3 style={{ color: "black" }}>디자이너</h3>
              <p>IKEA of Sweden</p>
              <br />
              <p style={{}}>제품 번호</p>

              <p
                style={{
                  color: "white",
                  background: "black",
                  display: "inline-block",
                  padding: "1px",
                  margin: "1px",
                }}
              >
                092.464.08
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
                    <p>상판에 다리를 부착하기 위한 나사가 포함되어 있습니다.</p>
                    <p>
                      지역사회의 규칙에 따라 재활용 또는 에너지 회수를 위해 분리
                      배출할 수 있습니다.
                    </p>
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
                    <Link
                      className="sub-side"
                      to="/blog"
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
                      <p
                        style={{
                          color: "black",
                        }}
                      >
                        밑면 패브릭 : <br />
                        폴리에스테르 100% (100% 재활용)
                      </p>
                      <p
                        style={{
                          color: "black",
                        }}
                      >
                        프레임 : <br />
                        스틸, 에폭시/폴리에스테르 파우더코팅
                      </p>
                      <p
                        style={{
                          color: "black",
                        }}
                      >
                        시트 : <br />
                        적층 무늬목, 폴리우레탄 폼 35kg/cu.m., 폴리프로필렌
                        부직포
                      </p>
                      <p
                        style={{
                          color: "black",
                        }}
                      >
                        등받이 : <br />
                        폴리프로필렌 플라스틱, 폴리에스테르충전재
                      </p>
                      <p
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          marginBottom: "5px",
                        }}
                      >
                        제품관리{" "}
                      </p>
                      <p
                        style={{
                          color: "black",
                        }}
                      >
                        중성세제를 희석한 물로 닦아주세요.
                        <br />
                        깨끗한 천으로 물기를 닦아주세요.
                        <br />
                        안전한 사용을 위해 필요시 나사를 다시 조여주세요.
                      </p>
                      <p
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          marginBottom: "5px",
                        }}
                      >
                        커버{" "}
                      </p>
                      <p
                        style={{
                          color: "black",
                        }}
                      >
                        세탁하지 마세요.
                        <br />
                        표백하지 마세요.
                        <br />
                        건조기에 넣지 마세요.<br />
                        다림질하지 마세요.<br />
                        드라이클리닝하지 마세요.<br />
                        진공청소기를 사용하세요.<br />
                        가벼운 얼룩은 섬유세제를 이용하거나 물 또는 중성세제에 적신 스펀지로 지워주세요.
                      </p>
                    </Link>
                   
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
                    안전 및 규정 준수  <MdOutlineKeyboardArrowDown />
                  </p>
                </a>
                {showSubMenu3 && (
                  <ul style={{ marginTop: "0px" }}>
                    <a className="sub-side"  style={{ textDecoration: "none", color: "inherit" }}>
                      <p>의자는 가정용으로 적합 판정을 받았으며 EN 12520 및 EN 1022의 내구성과 안전성 기준에 부합하는 제품입니다. </p>
                    </a>
                  
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
      <hr/>
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
       <span className="align-self-center me-2" style={{  display: "flex", alignItems: "center" }}>상품평 <FaArrowRight style={{ marginLeft: "420px" }} /></span>
        
      <div><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /> (10)</div>

      </button>
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
              <p><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarOutline /> (10)</p>
              <br />
              <button
                type="button"
                className="btn btn-light text-light"
                data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" 
                data-bs-dismiss="modal"
                style={{ width: '100%' }}
              >
                상품평 쓰기
              </button>
              <div className="modal-body">
              <h5 style={{ marginTop:'10px',color: "black" }}>평점</h5>
              <Bar/>
              <br />
             

              <hr />
              <h3>참고</h3>
              <p>상판에 다리를 부착하기 위한 나사가 포함되어 있습니다.</p>
              <p>
                지역사회의 규칙에 따라 재활용 또는 에너지 회수를 위해 분리
                배출할 수 있습니다.
              </p>
              <hr />
              <h3>소재 & 관리</h3>
              <p>상판에 다리를 부착하기 위한 나사가 포함되어 있습니다.</p>
              <p>
                지역사회의 규칙에 따라 재활용 또는 에너지 회수를 위해 분리
                배출할 수 있습니다.
              </p>
            </div>
             
              <hr style={{ marginLeft: "-50px" }} />
            </div>
          </div>
        </div>
      </div>
      {/* 상품평 버튼 & 모달 끝 */}
     
      <hr/>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#Modal"
      >
        설마 한페이지에 모달 2개 들어가면 작동이 안되나?
      </button>
      <div
        className="modal fade"
        id="Modal"
        tabIndex={-1}
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ marginTop: "0", marginRight: "0", marginLeft: "auto" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h4
                className="modal-title"
                id="ModalLabel"
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
              <p>
                다리받침의 높이를 조절할 수 있어서 고르지 않은 바닥에도
                안정적으로 세울 수 있습니다.
              </p>
              <h3 style={{ color: "black" }}>디자이너</h3>
              <p>IKEA of Sweden</p>
              <br />
              <p>제품 번호</p>

              <p
                style={{
                  color: "white",
                  background: "black",
                  display: "inline-block",
                  padding: "1px",
                  margin: "1px",
                }}
              >
                092.464.08
              </p>

              <hr />
              <h3>참고</h3>
              <p>상판에 다리를 부착하기 위한 나사가 포함되어 있습니다.</p>
              <p>
                지역사회의 규칙에 따라 재활용 또는 에너지 회수를 위해 분리
                배출할 수 있습니다.
              </p>
              <hr />
              <h3>소재 & 관리</h3>
              <p>상판에 다리를 부착하기 위한 나사가 포함되어 있습니다.</p>
              <p>
                지역사회의 규칙에 따라 재활용 또는 에너지 회수를 위해 분리
                배출할 수 있습니다.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light text-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-light-outline-light text-light"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
     <br />
     <br />
     <br />
      <form className="mb-3" name="myform" id="myform" method="post">
	<fieldset>
		<span className="text-bold">별점을 선택해주세요</span>
		<input type="radio" name="reviewStar" value="5" id="rate1"/><label
			htmlFor="rate1"><IoMdStar /></label>
		<input type="radio" name="reviewStar" value="4" id="rate2"/><label
			htmlFor="rate2"><IoMdStar /></label>
		<input type="radio" name="reviewStar" value="3" id="rate3"/><label
			htmlFor="rate3"><IoMdStar /></label>
		<input type="radio" name="reviewStar" value="2" id="rate4"/><label
			htmlFor="rate4"><IoMdStar /></label>
		<input type="radio" name="reviewStar" value="1" id="rate5"/><label
			htmlFor="rate5"><IoMdStar /></label>
	</fieldset>
	<div>
		<textarea className="col-auto form-control" id="reviewContents"
				  placeholder="상품 리뷰를 작성해주세요."></textarea>
	</div>
</form>		

{/* 모달 상품평 */}
<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex={-1}>
  <div className="modal-dialog " style={{ marginTop: "0", marginRight: "0", marginLeft: "auto" }}>
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalToggleLabel2">상품평 쓰기</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       상품평을 작성하세요...
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>
<a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a>



   </>
  );
}

export default Chair1Info;
