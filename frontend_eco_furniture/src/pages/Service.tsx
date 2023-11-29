import React, { useEffect } from 'react'
import initCustom from '../assets/js/custom';
import { Link } from 'react-router-dom';

function Service() {
	useEffect(() => {
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
								<h1>Services</h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><Link to="" className="btn btn-secondary me-2">Shop Now</Link><a href="#" className="btn btn-white-outline">Explore</a></p>
							</div>
						</div>
						<div className="col-lg-7">
							{/* <div className="hero-img-wrap">
								<img src="images/couch.png" className="img-fluid"/>
							</div> */}
						</div>
					</div>
				</div>
			</div>
			{/* <!-- End Hero Section --> */}

			{/* <!-- Start Why Choose Us Section --> */}
			<div className="why-choose-section">
				<div className="container">


					<div className="row my-5">
						<div className="col-6 col-md-6 col-lg-3 mb-4">
							<div className="feature">
								<div className="icon">
									<img src={require("../assets/images/truck.svg").default} alt="Image" className="imf-fluid" />
								</div>
								<h3>Fast &amp; Free Shipping</h3>
								<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3 mb-4">
							<div className="feature">
								<div className="icon">
									<img src={require("../assets/images/bag.svg").default} alt="Image" className="imf-fluid" />
								</div>
								<h3>Easy to Shop</h3>
								<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3 mb-4">
							<div className="feature">
								<div className="icon">
									<img src={require("../assets/images/support.svg").default} alt="Image" className="imf-fluid" />
								</div>
								<h3>24/7 Support</h3>
								<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3 mb-4">
							<div className="feature">
								<div className="icon">
									<img src={require("../assets/images/return.svg").default} alt="Image" className="imf-fluid" />
								</div>
								<h3>Hassle Free Returns</h3>
								<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3 mb-4">
							<div className="feature">
								<div className="icon">
									<img src={require("../assets/images/truck.svg").default} alt="Image" className="imf-fluid" />
								</div>
								<h3>Fast &amp; Free Shipping</h3>
								<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3 mb-4">
							<div className="feature">
								<div className="icon">
									<img src={require("../assets/images/bag.svg").default} alt="Image" className="imf-fluid" />
								</div>
								<h3>Easy to Shop</h3>
								<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3 mb-4">
							<div className="feature">
								<div className="icon">
									<img src={require("../assets/images/support.svg").default} alt="Image" className="imf-fluid" />
								</div>
								<h3>24/7 Support</h3>
								<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3 mb-4">
							<div className="feature">
								<div className="icon">
									<img src={require("../assets/images/return.svg").default} alt="Image" className="imf-fluid" />
								</div>
								<h3>Hassle Free Returns</h3>
								<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
							</div>
						</div>

					</div>

				</div>
			</div>
			{/* <!-- End Why Choose Us Section --> */}

			{/* <!-- Start Product Section --> */}
			<div className="product-section pt-0">
				<div className="container">
					<div className="row">

						{/* <!-- Start Column 1 --> */}
						<div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
							<h2 className="mb-4 section-title">Crafted with excellent material.</h2>
							<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
							<p><Link to="#" className="btn">Explore</Link></p>
						</div>
						{/* <!-- End Column 1 --> */}

						{/* <!-- Start Column 2 --> */}
						<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
							<Link className="product-item" to="#">
								<img src={require("../assets/images/product-1.png")} className="img-fluid product-thumbnail" />
								<h3 className="product-title">Nordic Chair</h3>
								<strong className="product-price">$50.00</strong>

								<span className="icon-cross">
									<img src={require("../assets/images/cross.svg").default} className="img-fluid" />
								</span>
							</Link>
						</div>
						{/* <!-- End Column 2 --> */}

						{/* <!-- Start Column 3 --> */}
						<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
							<Link className="product-item" to="#">
								<img src={require("../assets/images/product-2.png")} className="img-fluid product-thumbnail" />
								<h3 className="product-title">Kruzo Aero Chair</h3>
								<strong className="product-price">$78.00</strong>

								<span className="icon-cross">
									<img src={require("../assets/images/cross.svg").default} className="img-fluid" />
								</span>
							</Link>
						</div>
						{/* <!-- End Column 3 --> */}

						{/* <!-- Start Column 4 --> */}
						<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
							<Link className="product-item" to="#">
								<img src={require("../assets/images/product-3.png")}  className="img-fluid product-thumbnail" />
								<h3 className="product-title">Ergonomic Chair</h3>
								<strong className="product-price">$43.00</strong>

								<span className="icon-cross">
									<img src={require("../assets/images/cross.svg").default} className="img-fluid" />
								</span>
							</Link>
						</div>
						{/* <!-- End Column 4 --> */}

					</div>
				</div>
			</div>
			{/* <!-- End Product Section --> */}
		</>
	)
}

export default Service