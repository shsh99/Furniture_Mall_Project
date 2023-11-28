import React, { useEffect } from 'react'
import initCustom from '../../../assets/js/custom';

function Chair() {
    useEffect(()=>{
        initCustom();
    },[])
    
    return (
        <>
		
        {/* <!-- Start Hero Section --> */}
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
                  {/* <div className="product-section">
                     <div className="container">
                        <div className="row">
                        

                        </div>
                     </div>
                  </div> */}
               </div>
            </div>
         </div>
		{/* <!-- End Hero Section --> */}

        <div className="untree_co-section product-section before-footer-section">
		    <div className="container">
		      	<div className="row">

					{/* <!-- 의자 1 --> */}
					<div className="col-12 col-md-6 col-lg-4 mb-5">
						<a className="product-item" href="/chair1">
							<img src="images/의자1.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">검은색 의자</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- 의자 1 --> */}

                    {/* <!-- 의자 2 --> */}
					<div className="col-12 col-md-6 col-lg-4 mb-5">
						<a className="product-item" href="#">
							<img src="images/의자2.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- 의자 2 --> */}

                    {/* <!-- 의자 3 --> */}
					<div className="col-12 col-md-6 col-lg-4 mb-5">
						<a className="product-item" href="#">
							<img src="images/의자3.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- 의자 3 --> */}

					{/* <!-- 의자 4 --> */}
					<div className="col-12 col-md-6 col-lg-4 mb-5">
						<a className="product-item" href="#">
							<img src="images/의자4.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- 의자 4 --> */}

                    {/* <!-- 의자 5 --> */}
					<div className="col-12 col-md-6 col-lg-4 mb-5">
						<a className="product-item" href="#">
							<img src="images/의자5.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- 의자 5 --> */}

                    {/* <!-- 의자 6 --> */}
					<div className="col-12 col-md-6 col-lg-4 mb-5">
						<a className="product-item" href="#">
							<img src="images/의자6.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- 의자 6 --> */}

		      	</div>
		    </div>
		</div>
    </>
    )
}

export default Chair