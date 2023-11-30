// FooterCom.tsx
import React, { useEffect } from 'react'
import initCustom from '../../assets/js/custom';
import { Link } from 'react-router-dom';

function FooterCom() {
   useEffect(() => {
      initCustom();
   })

   return (
      <>
         <footer className="footer-section">
            <div className="container relative">

               <div className="row g-5 mb-5">
                  <div className="col-lg-4">
                     
                     <div className="mb-4 footer-logo-wrap mt-5"><Link to="#" className="footer-logo">Eco Furniture</Link></div>
                     <p className="mb-1">대표 : 이대훈</p>
                     <p className="mb-1">주소 : 부산 부산진구 중앙대로 749 4층</p>
                     <p className="mb-3">전화 : 010-5464-4614</p>

                     <ul className="list-unstyled custom-social">
                        <li><Link to="#"><span className="fa fa-brands fa-facebook-f"></span></Link></li>
                        <li><Link to="#"><span className="fa fa-brands fa-twitter"></span></Link></li>
                        <li><Link to="#"><span className="fa fa-brands fa-instagram"></span></Link></li>
                     </ul>
                  </div>

                  <div className="col-lg-8">
                     <div className="row links-wrap">
                        <div className="col-6 col-sm-6 col-md-3">
                           <ul className="list-unstyled">
                           <li><b>모든 제품</b></li>
                              <li><Link to="/best-item">베스트상품</Link></li>
                              <li><Link to="/promotion">프로모션</Link></li>
                              <li><Link to="/interior-item">인테리어소품</Link></li>
                              <li><Link to="/table">테이블</Link></li>
                              <li><Link to="/chair">의자</Link></li>
                           </ul>
                        </div>

                        <div className="col-6 col-sm-6 col-md-3">
                           <ul className="list-unstyled">
                           <li><b>공간별 쇼핑하기</b></li>
                              <li><Link to="/livingRoom">거실</Link></li>
                              <li><Link to="/bedRoom">침실</Link></li>                           </ul>
                        </div>

                        <div className="col-6 col-sm-6 col-md-3">
                           <ul className="list-unstyled">
                              <li><b>고객센터</b></li>
                              <li><Link to="/notice">공지사항</Link></li>
                              <li><Link to="/faq">자주 묻는 질문</Link></li>
                              <li><Link to="/reply-board">문의 하기</Link></li>
                           </ul>
                        </div>

                     </div>
                  </div>

               </div>

               <div className="border-top copyright">
                  <div className="row pt-4">
                     <div className="col-lg-6">
                        <p className="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a>
                           {/* <!-- License information: https://untree.co/license/ --> */}
                        </p>
                     </div>

                     <div className="col-lg-6 text-center text-lg-end">
                        <ul className="list-unstyled d-inline-flex ms-auto">
                           <li className="me-4"><Link to="#">이용안내 &amp; 이용약관</Link></li>
                           <li><Link to="#">개인정보처리방침</Link></li>
                        </ul>
                     </div>

                  </div>
               </div>

            </div>
         </footer>
      </>
   )
}

export default FooterCom