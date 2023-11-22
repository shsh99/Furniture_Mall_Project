import React, { useEffect } from 'react'
import initCustom from '../assets/js/custom';

function Shop() {
    useEffect(()=>{
        initCustom();
    })
  return (
    <>
    {/* <!-- Start Hero Section --> */}
			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Shop</h1>
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

		      		{/* <!-- Start Column 1 --> */}
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<a className="product-item" href="#">
							<img src="images/product-3.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Nordic Chair</h3>
							<strong className="product-price">$50.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 1 --> */}
						
					{/* <!-- Start Column 2 --> */}
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<a className="product-item" href="#">
							<img src="images/product-1.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Nordic Chair</h3>
							<strong className="product-price">$50.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 2 --> */}

					{/* <!-- Start Column 3 --> */}
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<a className="product-item" href="#">
							<img src="images/product-2.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Kruzo Aero Chair</h3>
							<strong className="product-price">$78.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 3 --> */}

					{/* <!-- Start Column 4 --> */}
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<a className="product-item" href="#">
							<img src="images/product-3.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 4 --> */}


					{/* <!-- Start Column 1 --> */}
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<a className="product-item" href="#">
							<img src="images/product-3.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Nordic Chair</h3>
							<strong className="product-price">$50.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 1 --> */}
						
					{/* <!-- Start Column 2 --> */}
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<a className="product-item" href="#">
							<img src="images/product-1.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Nordic Chair</h3>
							<strong className="product-price">$50.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 2 --> */}

					{/* <!-- Start Column 3 --> */}
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<a className="product-item" href="#">
							<img src="images/product-2.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Kruzo Aero Chair</h3>
							<strong className="product-price">$78.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 3 --> */}

					{/* <!-- Start Column 4 --> */}
					<div className="col-12 col-md-4 col-lg-3 mb-5">
						<a className="product-item" href="#">
							<img src="images/product-3.png" className="img-fluid product-thumbnail"/>
							<h3 className="product-title">Ergonomic Chair</h3>
							<strong className="product-price">$43.00</strong>

							<span className="icon-cross">
								<img src="images/cross.svg" className="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 4 --> */}

		      	</div>
		    </div>
		</div>
    </>
  )
}

export default Shop