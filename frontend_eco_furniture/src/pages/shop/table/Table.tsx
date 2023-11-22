import React, { useEffect } from 'react'
import initCustom from '../../../assets/js/custom';

function Table() {
    useEffect(()=>{
        initCustom();
    },[])
    return (
        <>
        {/* <!-- Start Hero Section --> */}
			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>테이블</h1>
							</div>
						</div>
						<div className="col-lg-7">
							
						</div>
					</div>
				</div>
			</div>
		{/* <!-- End Hero Section --> */}

        <div className="untree_co-section product-section before-footer-section">
		    <div className="container">
		      	<div className="row">

		      		{/* <!-- 책상 1 --> */}
					<div className="col-12 col-md-6 col-lg-4 mb-5">
						<a className="product-item" href="/table-1">
							<img src="images/책상1.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Nordic Chair</h3>
							<strong className="product-price">$50.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- 책상 1 --> */}
						
					{/* <!-- 책상 2 --> */}
					<div className="col-12 col-md-6 col-lg-4 mb-5">
					<a className="product-item" href="/table-2">
							<img src="images/책상2.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Nordic Chair</h3>
							<strong className="product-price">$50.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- 책상 2 --> */}

					{/* <!-- 책상 3 --> */}
					<div className="col-12 col-md-6 col-lg-4 mb-5">
					<a className="product-item" href="/table-3">
							<img src="images/책상3.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Kruzo Aero Chair</h3>
							<strong className="product-price">$78.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- 책상 3 --> */}


					{/* <!-- 책상 4 --> */}
					<div className="col-12 col-md-6 col-lg-4 mb-5">
					<a className="product-item" href="/table-4">
							<img src="images/책상4.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- 책상 4 --> */}

                    {/* <!-- 책상 5 --> */}
					<div className="col-12 col-md-6 col-lg-4 mb-5">
					<a className="product-item" href="/table-5">
							<img src="images/책상5.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- 책상 5 --> */}

                    {/* <!-- 책상 6 --> */}
					<div className="col-12 col-md-6 col-lg-4 mb-5">
					<a className="product-item" href="/table-6">
							<img src="images/책상6.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- 책상 6 --> */}

		      	</div>
		    </div>
		</div>
    </>
    )
}

export default Table
