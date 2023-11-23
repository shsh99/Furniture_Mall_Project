import React, { useEffect } from "react";
import initCustom from "../../assets/js/custom";
import { Link } from "react-router-dom";
import initSearch from "../../assets/js/script";
import { SideBar } from "../../pages/side/Sidebar";
import DropdownMenu from '../../pages/dropdown/DropdownMenu';
import DropdownMenu2 from "../../pages/dropdown/DropdownMenu2";
import DropdownMenu3 from "../../pages/dropdown/DropdownMenu3";




function HeaderCom() {
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
                  <img src="images/find.svg" />
                </Link>
                <a className="nav-link" href="#">
                  <img src="images/user.svg" />
                </a>
                <Link to="/cart" className="nav-link">
                  <img src="images/cart.svg" />
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav >
      <nav className="navbar navbar-expand-lg bg-dark navbar-light" id="templatemo_nav_top">
        <div className="container text-light d-flex justify-content-center">
          <div className="w-md-50 d-flex justify-content-between align-items-center">

            <div className="d-flex align-items-center">
              <i className="fa fa-envelope mx-2"></i>
              <a className="navbar-sm-brand text-light text-decoration-none " href="">eco@company.com</a>
            </div>
            &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
            <div className="d-flex align-items-center">
              <i className="fa fa-tree mx-2"></i>
              <a className="navbar-sm-brand text-light text-decoration-none " href="/promotion">크리스마스 특별 세일</a>
            </div>
            &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
            <div className="d-flex align-items-center">
              <i className="fa fa-phone mx-2"></i>
              <a className="navbar-sm-brand text-light text-decoration-none" href="">쉽고 편한 전화 주문, 콜 오더</a>
            </div>
          </div>

        </div>
        <div>
          <a className="text-light" href="https://github.com/shsh99/Furniture_Mall_Project" target="_blank" rel="sponsored"><i className="fab fa-github fa-sm fa-fw me-2"></i></a>
        </div>
      </nav>
    </>
  );
}

export default HeaderCom;
