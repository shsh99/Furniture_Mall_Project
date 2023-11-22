import { useState } from "react";

import { Container, Content, ClosedSideBar, OpenSideBar } from "./Styles";
import { MdSettings } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

import { IoNotificationsSharp } from "react-icons/io5";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { DiReact } from "react-icons/di";
import { BsBackspace } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";



import logoImg from "../../assets/images/4.png";
// import userImg from "../../assets/images/post-1.jpg";

// type OnSubMenuClickHandler = () => void;


// interface SideBarProps {
//   onSubMenuClick?: OnSubMenuClickHandler;
// }

export function SideBar() {
  const [sideBar, setSideBar] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);
  const [showSubMenu3, setShowSubMenu3] = useState(false);

  function handleChangeSideBar() {
    setSideBar((prevState) => !prevState);
    setShowSubMenu(false);
    setShowSubMenu2(false);
    setShowSubMenu3(false);
  }

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
    <Container>
      <Content>
        {!sideBar ? (
          <ClosedSideBar>
            <nav>
              <button onClick={handleChangeSideBar} style={{ color: "#002" }}>
                <CiMenuBurger />
              </button>

              {/* <img src={logoImg} alt="Eu" /> */}

              {/* Links principais do app */}
              {/* <ul>
                                <a href="/" title="Alguma coisa">
                                    <DiReact />
                                </a>
                                <a href="/" title="Alguma coisa">
                                    <DiReact />
                                </a>
                                <a href="/" title="Alguma coisa">
                                    <DiReact />
                                </a>
                                <a href="/" title="Alguma coisa">
                                    <DiReact />
                                </a>
                            </ul> */}
            </nav>
            {/* <div>
                            Icones que pode não ser tão principais no app
                            <ul>
                                <a href="/" title="Notificações">
                                    <IoNotificationsSharp />
                                </a>
                                <a href="/" title="Configurações">
                                    <MdSettings />
                                </a>
                                <a href="/" title="Sair da conta">
                                    <RiLogoutCircleRLine />
                                </a>
                            </ul>

                            <span>
                                <img src={userImg} alt="Eu" />
                            </span>
                        </div> */}
          </ClosedSideBar>
        ) : (
          <OpenSideBar>
            <section className="sideBack">
              <nav>
                <span>
                  {/* <button onClick={handleChangeSideBar}>
                                        <BsBackspace />
                                    </button> */}
                  <ul>
                    <h1>Menu</h1>
                  </ul>
                </span>

                <div className="sidebar">
                  {/* <img src={logoImg} alt="logo"></img> */}
                </div>


                {/* Icones principais do app */}

                <ul className="side-text">
                  <a onClick={handleSubMenuClick} title="Alguma coisa">
                    <p>모든 제품</p>
                  </a>
                  {/* 열렸을 때 */}
                  {showSubMenu && (
                    <ul style={{ marginTop: "0px" }}>
                      <a className="sub-side" href="/best-item">
                        <p>베스트</p>
                      </a>
                      <a href="/promotion">
                        <p>프로모션</p>
                      </a>
                      <a href="/interior-item">
                        <p>인테리어 소품</p>
                      </a>
                      <a href="/table">
                        <p>테이블</p>
                      </a>
                      <a href="/chair">
                        <p>의자</p>
                      </a>
                    </ul>
                  )}
                  {/* 안 열렸을때 */}
                  {/* {!showSubMenu && ( */}
                  <>
                    <a onClick={handleSubMenuClick2} title="Alguma coisa">
                      <p>공간별 인테리어</p>
                    </a>

                    {showSubMenu2 && (
                      <ul style={{ marginTop: "0px" }}>
                        <a className="sub-side" href="/blog">
                          <p>거실</p>
                        </a>
                        <a href="/blog">
                          <p>침실</p>
                        </a>

                      </ul>
                    )}
                    <a onClick={handleSubMenuClick3} title="Alguma coisa">
                      <p>고객센터</p>
                    </a>
                    {showSubMenu3 && (
                      <ul style={{ marginTop: "0px" }}>
                        <a className="sub-side" href="/notice">
                          <p>공지사항</p>
                        </a>
                        <a href="/faq">
                          <p>자주 묻는 질문</p>
                        </a>
                      </ul>
                    )}
                  </>
                  {/* )} */}
                </ul>
              </nav>
              <div>
                <ul>
                  <a href="/like-page">
                    <p>
                      <CiHeart />
                      &nbsp; &nbsp;찜
                    </p>
                  </a>
                  <a href="/">
                    <p>
                      {" "}
                      <MdSettings />
                      &nbsp; &nbsp; 설정
                    </p>
                  </a>
                  <a href="/">
                    <p>
                      <RiLogoutCircleRLine />
                      &nbsp; &nbsp; 나가기{" "}
                    </p>
                  </a>
                </ul>

                <span>
                  {/* <img src={userImg} alt="Eu" /> */}
                  {/* 요거 지우면 안됨 */}
                  <p>Eco Furniture Mall Web Developer</p>
                </span>
              </div>
            </section>
            <aside onClick={handleChangeSideBar} />
          </OpenSideBar>
        )}
      </Content>
    </Container>
  );
}
