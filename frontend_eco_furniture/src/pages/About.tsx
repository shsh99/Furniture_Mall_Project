import React, { useEffect } from 'react'
import initCustom from '../assets/js/custom'

function About() {
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
								<h1>About Us</h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
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
					<div className="row justify-content-between align-items-center">
						<div className="col-lg-6">
							<h2 className="section-title">Why Choose Us</h2>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

							<div className="row my-5">
								<div className="col-6 col-md-6">
									<div className="feature">
										<div className="icon">
											<img src="images/truck.svg" alt="Image" className="imf-fluid" />
										</div>
										<h3>Fast &amp; Free Shipping</h3>
										<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
									</div>
								</div>

								<div className="col-6 col-md-6">
									<div className="feature">
										<div className="icon">
											<img src="images/bag.svg" alt="Image" className="imf-fluid" />
										</div>
										<h3>Easy to Shop</h3>
										<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
									</div>
								</div>

								<div className="col-6 col-md-6">
									<div className="feature">
										<div className="icon">
											<img src="images/support.svg" alt="Image" className="imf-fluid" />
										</div>
										<h3>24/7 Support</h3>
										<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
									</div>
								</div>

								<div className="col-6 col-md-6">
									<div className="feature">
										<div className="icon">
											<img src="images/return.svg" alt="Image" className="imf-fluid" />
										</div>
										<h3>Hassle Free Returns</h3>
										<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
									</div>
								</div>

							</div>
						</div>

						<div className="col-lg-5">
							<div className="img-wrap">
								<img src="images/why-choose-us-img.jpg" alt="Image" className="img-fluid" />
							</div>
						</div>

					</div>
				</div>
			</div>
			{/* <!-- End Why Choose Us Section --> */}

			{/* <!-- Start Team Section --> */}
			<div className="untree_co-section">
				<div className="container">

					<div className="row mb-5">
						<div className="col-lg-5 mx-auto text-center">
							<h2 className="section-title">Our Team</h2>
						</div>
					</div>

					<div className="row">

						{/* <!-- Start Column 1 --> */}
						<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
							<img src="images/person_1.jpg" className="img-fluid mb-5" />
							<h3><a href="#"><span className="">Lawson</span> Arnold</a></h3>
							<span className="d-block position mb-4">CEO, Founder, Atty.</span>
							<p>Separated they live in.
								Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
							<p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>
						</div>
						{/* <!-- End Column 1 --> */}

						{/* <!-- Start Column 2 --> */}
						<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
							<img src="images/person_2.jpg" className="img-fluid mb-5" />

							<h3><a href="#"><span className="">Jeremy</span> Walker</a></h3>
							<span className="d-block position mb-4">CEO, Founder, Atty.</span>
							<p>Separated they live in.
								Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
							<p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>

						</div>
						{/* <!-- End Column 2 --> */}

						{/* <!-- Start Column 3 --> */}
						<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
							<img src="images/person_3.jpg" className="img-fluid mb-5" />
							<h3><a href="#"><span className="">Patrik</span> White</a></h3>
							<span className="d-block position mb-4">CEO, Founder, Atty.</span>
							<p>Separated they live in.
								Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
							<p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>
						</div>
						{/* <!-- End Column 3 --> */}

						{/* <!-- Start Column 4 --> */}
						<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
							<img src="images/person_4.jpg" className="img-fluid mb-5" />

							<h3><a href="#"><span className="">Kathryn</span> Ryan</a></h3>
							<span className="d-block position mb-4">CEO, Founder, Atty.</span>
							<p>Separated they live in.
								Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
							<p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>


						</div>
						{/* <!-- End Column 4 --> */}



					</div>
				</div>
			</div>
			{/* <!-- End Team Section --> */}



			{/* <!-- Start Testimonial Slider --> */}
			<div className="testimonial-section before-footer-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-7 mx-auto text-center">
							<h2 className="section-title">Testimonials</h2>
						</div>
					</div>

					<div className="row justify-content-center">
						<div className="col-lg-12">
							<div className="testimonial-slider-wrap text-center">

								<div id="testimonial-nav">
									<span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
									<span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
								</div>

								<div className="testimonial-slider">

									<div className="item">
										<div className="row justify-content-center">
											<div className="col-lg-8 mx-auto">

												<div className="testimonial-block text-center">
													<blockquote className="mb-5">
														<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
													</blockquote>

													<div className="author-info">
														<div className="author-pic">
															<img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
														</div>
														<h3 className="font-weight-bold">Maria Jones</h3>
														<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
													</div>
												</div>

											</div>
										</div>
									</div>
									{/* <!-- END item --> */}

									<div className="item">
										<div className="row justify-content-center">
											<div className="col-lg-8 mx-auto">

												<div className="testimonial-block text-center">
													<blockquote className="mb-5">
														<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
													</blockquote>

													<div className="author-info">
														<div className="author-pic">
															<img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
														</div>
														<h3 className="font-weight-bold">Maria Jones</h3>
														<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
													</div>
												</div>

											</div>
										</div>
									</div>
									{/* <!-- END item --> */}

									<div className="item">
										<div className="row justify-content-center">
											<div className="col-lg-8 mx-auto">

												<div className="testimonial-block text-center">
													<blockquote className="mb-5">
														<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
													</blockquote>

													<div className="author-info">
														<div className="author-pic">
															<img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
														</div>
														<h3 className="font-weight-bold">Maria Jones</h3>
														<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
													</div>
												</div>

											</div>
										</div>
									</div>
									{/* <!-- END item --> */}

								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- End Testimonial Slider --> */}
		</>
	)
}

export default About