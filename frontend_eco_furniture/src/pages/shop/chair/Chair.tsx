import React, { useEffect } from 'react'
import initCustom from '../../../assets/js/custom';
import { Link } from 'react-router-dom';

function Chair() {
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
								<h1>의자</h1>
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

					{/* <!-- 의자 1 --> */}
					<div className="col-12 col-md-6 col-lg-4 mb-5">
						<Link className="product-item" to="#">
							<img src={require("../../../assets/images/chair1/chair1.png")} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src={require("../../../assets/images/cross.svg").default} className="img-fluid"/>
							</span>
						</Link>
					</div>
					{/* <!-- 의자 1 --> */}

                    {/* <!-- 의자 2 --> */}
					<div className="col-12 col-md-6 col-lg-4 mb-5">
						<Link className="product-item" to="#">
							<img src={require("../../../assets/images/chair2/chair2.png")} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src={require("../../../assets/images/cross.svg").default} className="img-fluid"/>
							</span>
						</Link>
					</div>
					{/* <!-- 의자 2 --> */}

                    {/* <!-- 의자 3 --> */}
					<div className="col-12 col-md-6 col-lg-4 mb-5">
						<Link className="product-item" to="#">
							<img src={require("../../../assets/images/chair3/chair3.png")} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src={require("../../../assets/images/cross.svg").default} className="img-fluid"/>
							</span>
						</Link>
					</div>
					{/* <!-- 의자 3 --> */}

					{/* <!-- 의자 4 --> */}
					<div className="col-12 col-md-6 col-lg-4 mb-5">
						<Link className="product-item" to="#">
							<img src={require("../../../assets/images/chair4/chair4.png")} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src={require("../../../assets/images/cross.svg").default} className="img-fluid"/>
							</span>
						</Link>
					</div>
					{/* <!-- 의자 4 --> */}

                    {/* <!-- 의자 5 --> */}
					<div className="col-12 col-md-6 col-lg-4 mb-5">
						<Link className="product-item" to="#">
							<img src={require("../../../assets/images/chair5/chair5.png")} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src={require("../../../assets/images/cross.svg").default} className="img-fluid"/>
							</span>
						</Link>
					</div>
					{/* <!-- 의자 5 --> */}

                    {/* <!-- 의자 6 --> */}
					<div className="col-12 col-md-6 col-lg-4 mb-5">
						<Link className="product-item" to="#">
							<img src={require("../../../assets/images/chair6/chair6.png")} className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src={require("../../../assets/images/cross.svg").default} className="img-fluid"/>
							</span>
						</Link>
					</div>
					{/* <!-- 의자 6 --> */}

		      	</div>
		    </div>
		</div>
    </>
    )
}

export default Chair