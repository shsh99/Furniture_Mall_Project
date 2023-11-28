import React, { useState } from 'react';

interface BlogEntry {
  image: string;
  title: string;
}

function BedRoom() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  // 블로그 엔트리 정보를 담은 배열
  const blogEntries: BlogEntry[] = [
    { image: "images/침실/침실1.jpg", title: "살로몬 직사각 침실" },
    { image: "images/침실/침실2.jpg", title: "살로몬 직사각 침실" },
    { image: "images/침실/침실3.jpg", title: "살로몬 직사각 침실" },
    { image: "images/침실/침실4.jpg", title: "살로몬 직사각 침실" },
    { image: "images/침실/침실5.jpg", title: "살로몬 직사각 침실" },
    { image: "images/침실/침실6.jpg", title: "살로몬 직사각 침실" },
    // ... (나머지 블로그 엔트리)
  ];

  // 이미지 클릭 시 모달 열기
  const handleImageClick = (e: React.MouseEvent<HTMLAnchorElement>, image: string) => {
    e.preventDefault();
    setModalImage(image);
  };

  // 모달 닫기
  const closeModal = () => {
    setModalImage(null);
  }

  return (
   <>
   {/* <!-- Start Hero Section --> */}
   <div className="hero">
      <div className="container">
         <div className="row justify-content-between">
            <div className="col-lg-5">
               <div className="intro-excerpt">
                  <h1>침실</h1>
               </div>
            </div>
            <div className="col-lg-7">

            </div>
         </div>
      </div>
   </div>
   {/* <!-- End Hero Section --> */}



      {/* Start Blog Section */}
      <div className="blog-section">
        <div className="container">
          <div className="row">
            {/* 각각의 블로그 엔트리 */}
            {blogEntries.map((entry, index) => (
              <div className="col-12 col-sm-6 col-md-4 mb-5" key={index}>
                <div className="post-entry">
                  {/* 클릭 시 모달 열기 */}
                  <a href="#" onClick={(e) => handleImageClick(e, entry.image)}>
                    <img
                      src={entry.image}
                      alt="Image"
                      className="img-fluid"
                      style={{ width: '600px', height: '300px' , borderRadius: '20px' }}
                    />
                  </a>
                  <div className="post-content-entry">
                    <h3>
                      <a href="#">{entry.title}</a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Blog Section */}

      {/* 모달 */}
      {modalImage && (
        <div className="room-modal" onClick={closeModal}>
          <div className="room-modal-content" >
            <img src={modalImage} alt="Modal Image" className="img-fluid" />
          </div>
        </div>
      )}

<div className="container-xxl mt-5 pt-5">
                            <div className="container">



                                <div className="owl-carousel project-carousel " style={{ borderRadius: '20px' }}>

            <article >
              <div className="item mb-5 card" style={{ height: 'auto' }}>

                <div className="position-relative" >
                  <img className="img-fluid"  src="images/santa.jpg" alt="" />
                </div>
                <div className="p-4">
                  <h3>제품명</h3>
                  <span>내용</span>
                </div>

              </div>
            </article>

            <article>
              <div className="item mb-5 card" style={{ height: 'auto' }}>

                <div className="position-relative">
                  <img className="img-fluid" style={{ height: "" }} src="images/item1.jpg" alt="" />
                </div>
                <div className="p-4">
                  <h3>제품명</h3>
                  <span>내용</span>
                </div>

              </div>
            </article>

            <article>
              <div className="item mb-5 card" style={{ height: 'auto' }}>

                <div className="position-relative">
                  <img className="img-fluid" style={{ height: "" }} src="images/item2.jpg" alt="" />
                </div>
                <div className="p-4">
                  <h3>제품명</h3>
                  <span>내용</span>
                </div>

              </div>
            </article>

            <article>
              <div className="item mb-5 card" style={{ height: 'auto' }}>

                <div className="position-relative">
                  <img className="img-fluid" style={{}} src="images/ctree1.jpg" alt="" />
                </div>
                <div className="p-4">
                  <h3>제품명</h3>
                  <span>내용</span>
                </div>

              </div>
            </article>

          </div>
                            </div>
                        </div>
                        <div className="popular-product">
            <div className="container">
               <div className="row g-5 my-5 justify-content-center">
                  <div className="col-lg-3 mb-lg-4">
                     <div className="product-item-sm d-flex">
                        <div className="icon">
                           <img
                              src="images/truck.svg"
                              alt="Image"
                              className="imf-fluid"
                           />
                        </div>
                        <div className="pt-3">
                           <h3>빠른 배송 &amp; 무료 배송</h3>
                           <p>
                              저희 Eco Furniture는 언제나 고객님들을 위해 당일 출고,
                              무료 배송을 지원합니다!
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-3 mb-lg-4">
                     <div className="product-item-sm d-flex">
                        <div className="icon">
                           <img
                              src="images/bag.svg"
                              alt="Image"
                              className="imf-fluid"
                           />
                        </div>
                        <div className="pt-3">
                           <h3>한눈에 들어오는 상품</h3>
                           <p>
                              여러 상품들 중에 고민하시나요?
                              <br /> 한눈에 원하는 상품을 찾을수 있게 정리되어있는
                              카테고리와 메뉴를 보세요!
                           </p>

                        </div>
                     </div>
                  </div>

                  <div className="col-lg-3 mb-lg-4">
                     <div className="product-item-sm d-flex">
                        <div className="icon">
                           <img
                              src="images/support.svg"
                              alt="Image"
                              className="imf-fluid"
                           />
                        </div>
                        <div className="pt-3">
                           <h3>12개월 무상 AS 서비스</h3>
                           <p>
                              저희 Eco Furniture는 구매한 상품에 대해 12개월 무상 AS
                              서비스를 지원합니다!
                           </p>

                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 mb-lg-4">
                     <div className="product-item-sm d-flex">
                        <div className="icon">
                           <img
                              src="images/return.svg"
                              alt="Image"
                              className="imf-fluid"
                           />
                        </div>
                        <div className="pt-3">
                           <h3>편리한 반품</h3>
                           <p>
                              인테리어가 어울리지 않아서, 제품에 문제가 있어서 등 환불, 반품을 하실 때 신속하게 처리합니다!
                           </p>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

		</>
	)
}

export default BedRoom
