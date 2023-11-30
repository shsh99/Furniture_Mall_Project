import React, { useEffect } from "react";
import initCustom from "../../assets/js/custom";
import { Link } from "react-router-dom";
import initSearch from "../../assets/js/script";
import { SideBar } from "../../pages/side/Sidebar";
import DropdownMenu from '../../pages/dropdown/DropdownMenu';
import DropdownMenu2 from "../../pages/dropdown/DropdownMenu2";
import DropdownMenu3 from "../../pages/dropdown/DropdownMenu3";




function HeaderCom() {
  	// TODO : 로그인 변수 정의
	// 공유저장소 변수 가져오기
	// auth = { isLoggedIn:true/false, user:user/null }
	// const { user: currentUser } = useSelector((state: RootState) => state.auth); 

  // useEffect 훅
  useEffect(() => {
    initCustom();
    initSearch();
  });


  const handleSubMenuClick = () => {
    console.log("HeaderCom - 모든 제품 클릭");
    // 부모 컴포넌트에서 수행할 동작을 여기에 추가하세요.
  };

  return (
    <>
      {/* 검색창 */}
      <div className="search-box position-relative overflow-hidden w-100">
        <div className="search-wrap">
          <div className="close-button position-absolute">
            <svg className="close" width="22" height="22">
              <use xlinkHref="#close"></use>
            </svg>
          </div>
          <form
            id="search-form"
            className="text-center pt-3"
            action=""
            method=""
          >
            <input
              type="text"
              className="search-input fs-5 p-4 bg-transparent"
              placeholder="Search..."
            />
            <svg className="search" width="22" height="22">
              <use xlinkHref="#search"></use>
            </svg>
          </form>
        </div>
      </div>
      {/* 검색창 */}

      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <SideBar />
        <div className="container">
          <Link to="/" className="navbar-brand">
            Eco Furniture<span>.</span>
          </Link>


          <div className="collapse navbar-collapse" id="navbarsFurni">

            <ul className="custom-navbar-nav navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-center">
                  <DropdownMenu />
                </a>
              </li>
              <li>
                <a className="nav-link text-center">
                  <DropdownMenu2 />
                </a>
              </li>
              <li>
                <a className="nav-link text-center">
                  <DropdownMenu3 />
                </a>
              </li>
            </ul>

            <div className="user-items ms-auto ">
              <ul className="custom-navbar-cta navbar-nav ms-auto mb-2 mb-md-2 mb-md-0">
                {/* 검색창 시작 */}
                <Link to="" className="search-item nav-link">
                  {/* 검색창 끝 */}
                  <img src={require("../../assets/images/find.svg").default} />
                </Link>
                <Link className="nav-link" to="#">
                  <img src={require("../../assets/images/user.svg").default} />
                </Link>
                <Link to="/cart" className="nav-link">
                  <img src={require("../../assets/images/cart.svg").default}/>
                </Link>
              </ul>
            </div>
          </div>
          					{/* TODO: 로그인&회원가입, 로그아웃 start */}
					{/* 로그인 시작 */}
					{/* {!currentUser && ( */}
						<>
            <ul className="custom-navbar-cta navbar-nav ms-auto mb-2 mb-md-2 mb-md-0">
							<li className="nav-item">
								<Link className="nav-link active" to="/register">
									회원가입
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link active" to="/login">
									로그인
								</Link>
							</li>
              <li className="nav-item">
								<Link className="nav-link active" to="/payment">
									결제
								</Link>
							</li>
             </ul>
						</>
					 {/* )} */}
					{/* 로그인 끝 */}

					{/* 로그인&회원가입, 로그아웃 end */}
        </div>
      </nav >
      <nav className="navbar navbar-expand-lg bg-dark navbar-light" id="templatemo_nav_top">
        <div className="container text-light d-flex justify-content-center">
          <div className="w-md-50 d-flex justify-content-between align-items-center">

            <div className="d-flex align-items-center">
              <i className="fa fa-envelope mx-2"></i>
              <Link className="navbar-sm-brand text-light text-decoration-none " to="">eco@company.com</Link>
            </div>
            &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
            <div className="d-flex align-items-center">
              <i className="fa fa-tree mx-2"></i>
              <Link className="navbar-sm-brand text-light text-decoration-none " to="/promotion">크리스마스 특별 세일</Link>
            </div>
            &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
            <div className="d-flex align-items-center">
              <i className="fa fa-phone mx-2"></i>
              <Link className="navbar-sm-brand text-light text-decoration-none" to="">쉽고 편한 전화 주문, 콜 오더</Link>
            </div>
          </div>

        </div>
        <div>
          <Link className="text-light" to="https://github.com/shsh99/Furniture_Mall_Project" target="_blank" rel="sponsored"><i className="fab fa-github fa-sm fa-fw me-2"></i></Link>
        </div>
      </nav>
    </>
  );
}

export default HeaderCom;
