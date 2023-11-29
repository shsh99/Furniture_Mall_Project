import React, { useEffect } from "react";
import initCustom from "../assets/js/custom";
import { Link } from "react-router-dom";

function Home() {
	useEffect(() => {
		initCustom();
	});

	return (
		<>
			{/* <!-- Start Hero Section --> */}

			{/* <!-- End Hero Section --> */}

			{/* <!-- Start Product Section --> */}
			<div className="hero">
				<div className="container">
					<div className="product-section">
						<div className="container d-flex justify-content-center" >
							<div className="ml-3" >
								<div className="card-body" style={{ maxWidth: '400px', height: 'auto' }}>
									<h3 className="card-title ml-3 mr-3" style={{ fontWeight: 'bold', color: 'black', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }} >나만의 가장 완벽한 크리스마스</h3>

									<div className="card-body mt-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
										<img src="images/santa.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
									</div>
									<div className="card-body mt-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
										<img src="images/citem2.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
									</div>
								</div>
							</div>
							<div className="ml-3" style={{ maxWidth: '400px' }}>
								<img src="images/christmas.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: 'auto' }} />
								<p className="card-text mt-3" style={{
									fontWeight: 'bold',
									color: 'black', textOverflow: 'ellipsis'
								}}>
									우리 집에서 열리는 화려한 북유럽의 크리스마스 마켓!<br />  스칸디나비아 전통문화와 수공예에서 영감을 얻은 새로운 겨울 컬렉션으로 나만의 크리스마스를 준비해 보세요.
								</p>
							</div>

						</div>

					</div>
					<div className="d-flex row justify-content-between">
						<div className="col-lg-10">
							<h1 className="bestt">베스트 카테고리 쇼핑하기</h1>

						</div>
						<div className="product-section mb-5">
							<div className="container">
								<div className="row">
									{/* <!-- Start Column 1 --> */}

									{/* <!-- End Column 1 --> */}

									{/* carousel */}
									<div
										id="carouselExampleCaptions"
										className="carousel slide"
										data-bs-ride="carousel"
										data-bs-interval="3000"
									>
										<div className="carousel-indicators">
											<button
												type="button"
												data-bs-target="#carouselExampleCaptions"
												data-bs-slide-to="0"
												className="active"
												id="a"
												aria-current="true"
												aria-label="Slide 1"
											></button>
											<button
												type="button"
												data-bs-target="#carouselExampleCaptions"
												data-bs-slide-to="1"
												id="a"
												aria-label="Slide 2"
											></button>
											<button
												type="button"
												data-bs-target="#carouselExampleCaptions"
												data-bs-slide-to="2"
												id="a"
												aria-label="Slide 3"
											></button>
										</div>
										{/* 1번 사진 */}
										<div className="carousel-inner">
											<div className="carousel-item active">
												<div className="d-flex justify-content-between">
													<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
														<Link className="product-item" to="cart.html">
															<img
																src={require("../assets/images/chair1/chair1.png")}
																className="d-block w-100"
															/>
															<h3 className="product-title">북유럽 의자</h3>
															<strong className="product-price">$50.00</strong>


														</Link>
													</div>
													<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
														<Link className="product-item" to="cart.html">
															<img
																src={require("../assets/images/chair2/chair2.png")}
																className="d-block w-100"
															/>
															<h3 className="product-title">에어로 의자</h3>
															<strong className="product-price">$78.00</strong>


														</Link>
													</div>
													<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
														<Link className="product-item" to="cart.html">
															<img
																src={require("../assets/images/chair3/chair3.png")}
																className="d-block w-100"
															/>
															<h3 className="product-title">인체공학적 의자</h3>
															<strong className="product-price">$43.00</strong>


														</Link>
													</div>
												</div>
											</div>
											{/* 1번 사진 끝 */}

											{/* 2번 사진 */}
											<div className="carousel-item">
												<div className="d-flex justify-content-between">
													<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
														<Link className="product-item" to="cart.html">
															<img
																src={require("../assets/images/chair4/chair4.png")}
																className="d-block w-100"
															/>
															<h3 className="product-title">에어로 의자</h3>
															<strong className="product-price">$78.00</strong>


														</Link>
													</div>
													<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
														<Link className="product-item" to="cart.html">
															<img
																src={require("../assets/images/chair5/chair5.png")}
																className="d-block w-100"
															/>
															<h3 className="product-title">인체공학적 의자</h3>
															<strong className="product-price">$43.00</strong>


														</Link>
													</div>
													<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
														<Link className="product-item" to="cart.html">
															<img
																src={require("../assets/images/chair6/chair6.png")}
																className="d-block w-100"
															/>
															<h3 className="product-title">북유럽 의자</h3>
															<strong className="product-price">$50.00</strong>


														</Link>
													</div>
												</div>
											</div>
											{/* 2번 사진 끝*/}

											{/* 3번 사진 */}
											<div className="carousel-item">
												<div className="d-flex justify-content-between">
													<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
														<Link className="product-item" to="cart.html">
															<img
																src={require("../assets/images/chair1/chair1.png")}
																className="d-block w-100"
															/>
															<h3 className="product-title">인체공학적 의자</h3>
															<strong className="product-price">$43.00</strong>


														</Link>
													</div>
													<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
														<Link className="product-item" to="cart.html">
															<img
																src={require("../assets/images/chair2/chair2.png")}
																className="d-block w-100"
															/>
															<h3 className="product-title">북유럽 의자</h3>
															<strong className="product-price">$50.00</strong>


														</Link>
													</div>
													<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
														<Link className="product-item" to="cart.html">
															<img
																src={require("../assets/images/chair3/chair3.png")}
																className="d-block w-100"
															/>
															<h3 className="product-title">에어로 의자</h3>
															<strong className="product-price">$78.00</strong>


														</Link>
													</div>
												</div>
											</div>
											{/* 3번 사진 끝*/}
										</div>
										<button
											className="carousel-control-prev"
											type="button"
											data-bs-target="#carouselExampleCaptions"
											data-bs-slide="prev"
										>
											<span
												className="carousel-control-prev-icon"
												aria-hidden="true"
											></span>
											<span className="visually-hidden">Previous</span>
										</button>

										<button
											className="carousel-control-next"
											type="button"
											data-bs-target="#carouselExampleCaptions"
											data-bs-slide="next"
										>
											<span
												className="carousel-control-next-icon"
												aria-hidden="true"
											></span>
											<span className="visually-hidden">Next</span>
										</button>
									</div>
									{/* carousel end */}


								</div>
							</div>
						</div>
					</div>
				</div>
			</div >

			{/* <!-- End Product Section --> */}

			{/* <!-- Start Why Choose Us Section --> */}
			<div className="why-choose-section">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-6">
							<h2 className="section-title">진행중인 이벤트 및 프로모션</h2>
							<p>
								저희 Eco Furniture는 친환경 소재로 만든 가구와 인테리어 소품을
								사용합니다!
							</p>

							<div className="row my-5">
								<div className="col-6 col-md-6">
									<div className="feature">
										<div className="icon">
											<img
												src={require("../assets/images/truck.svg").default}
												alt="Image"
												className="imf-fluid"
											/>
										</div>
										<h3>빠른 배송 &amp; 무료 배송</h3>
										<p>
											저희 Eco Furniture는 언제나 고객님들을 위해 당일 배송,
											무료 배송을 지원합니다!.
										</p>
									</div>
								</div>

								<div className="col-6 col-md-6">
									<div className="feature">
										<div className="icon">
											<img
												src={require("../assets/images/bag.svg").default}
												alt="Image"
												className="imf-fluid"
											/>
										</div>
										<h3>한눈에 들어오는 상품</h3>
										<p>
											여러 상품들 중에 고민하시나요?
											<br /> 한눈에 원하는 상품을 찾을수 있게 정리되어있는
											카테고리와 메뉴를 보세요!
										</p>
									</div>
								</div>

								<div className="col-6 col-md-6">
									<div className="feature">
										<div className="icon">
											<img
												src={require("../assets/images/support.svg").default}
												alt="Image"
												className="imf-fluid"
											/>
										</div>
										<h3>12개월 무상 AS 서비스</h3>
										<p>
											저희 Eco Furniture는 구매한 상품에 대해 12개월 무상 AS
											서비스를 지원합니다!
										</p>
									</div>
								</div>

								<div className="col-6 col-md-6">
									<div className="feature">
										<div className="icon">
											<img
												src={require("../assets/images/return.svg").default}
												alt="Image"
												className="imf-fluid"
											/>
										</div>
										<h3>편리한 반품</h3>
										<p>
											고객님의 단순 변심, 인테리어가 어울리지 않아서, 제품에
											문제가 있어서 등 환불, 반품하시는 사유를 묻지 않습니다!
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-5">
							<div className="img-wrap">
								<img
									src={require("../assets/images/why-choose-us-img.jpg")}
									alt="Image"
									className="img-fluid"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- End Why Choose Us Section --> */}

			{/* <!-- Start We Help Section --> */}
			<div className="we-help-section">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-7 mb-5 mb-lg-0">
							<div className="imgs-grid">
								<div className="grid grid-1">
									<img src={require("../assets/images/img-grid-1.jpg")} alt="Untree.co" />
								</div>
								<div className="grid grid-2">
									<img src={require("../assets/images/img-grid-2.jpg")} alt="Untree.co" />
								</div>
								<div className="grid grid-3">
									<img src={require("../assets/images/img-grid-3.jpg")} alt="Untree.co" />
								</div>
							</div>
						</div>
						<div className="col-lg-5 ps-lg-5">
							<h2 className="section-title mb-4">
								원하는 인테리어, <br />
								모던한 디자인 인테리어를 쉽고 <br />
								간편하게 지원합니다!
							</h2>
							<p>샬라샬라</p>

							<ul className="list-unstyled custom-list my-4">
								<li>공간별 인테리어를 보여줍니다</li>
								<li>Donec vitae odio quis nisl dapibus malesuada</li>
								<li>Donec vitae odio quis nisl dapibus malesuada</li>
								<li>Donec vitae odio quis nisl dapibus malesuada</li>
							</ul>
							<p>
								<Link to="#" className="btn">
									Explore
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- End We Help Section --> */}

			{/* <!-- Start Popular Product --> */}
			<div className="popular-product">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
							<div className="product-item-sm d-flex">
								<div className="thumbnail">
									<img
										src={require("../assets/images/product-1.png")}
										alt="Image"
										className="img-fluid"
									/>
								</div>
								<div className="pt-3">
									<h3>Nordic Chair</h3>
									<p>
										Donec facilisis quam ut purus rutrum lobortis. Donec vitae
										odio{" "}
									</p>
									<p>
										<Link to="#">Read More</Link>
									</p>
								</div>
							</div>
						</div>

						<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
							<div className="product-item-sm d-flex">
								<div className="thumbnail">
									<img
										src={require("../assets/images/product-2.png")}
										alt="Image"
										className="img-fluid"
									/>
								</div>
								<div className="pt-3">
									<h3>Kruzo Aero Chair</h3>
									<p>
										Donec facilisis quam ut purus rutrum lobortis. Donec vitae
										odio{" "}
									</p>
									<p>
										<Link to="#">Read More</Link>
									</p>
								</div>
							</div>
						</div>

						<div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
							<div className="product-item-sm d-flex">
								<div className="thumbnail">
									<img
										src={require("../assets/images/product-3.png")}
										alt="Image"
										className="img-fluid"
									/>
								</div>
								<div className="pt-3">
									<h3>Ergonomic Chair</h3>
									<p>
										Donec facilisis quam ut purus rutrum lobortis. Donec vitae
										odio{" "}
									</p>
									<p>
										<Link to="#">Read More</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- End Popular Product --> */}

			{/* <!-- Start Blog Section --> */}
			<div className="blog-section">
				<div className="container">
					<div className="row mb-5">
						<div className="col-md-6">
							<h2 className="section-title">Recent Blog</h2>
						</div>
						<div className="col-md-6 text-start text-md-end">
							<Link to="#" className="more">
								View All Posts
							</Link>
						</div>
					</div>

					<div className="row">
						<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
							<div className="post-entry">
								<Link to="#" className="post-thumbnail">
									<img
										src={require("../assets/images/post-1.jpg")}
										alt="Image"
										className="img-fluid"
									/>
								</Link>
								<div className="post-content-entry">
									<h3>
										<Link to="#">First Time Home Owner Ideas</Link>
									</h3>
									<div className="meta">
										<span>
											by <Link to="#">Kristin Watson</Link>
										</span>{" "}
										<span>
											on <Link to="#">Dec 19, 2021</Link>
										</span>
									</div>
								</div>
							</div>
						</div>

						<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
							<div className="post-entry">
								<Link to="#" className="post-thumbnail">
									<img
										src={require("../assets/images/post-2.jpg")}
										alt="Image"
										className="img-fluid"
									/>
								</Link>
								<div className="post-content-entry">
									<h3>
										<Link to="#">How To Keep Your Furniture Clean</Link>
									</h3>
									<div className="meta">
										<span>
											by <Link to="#">Robert Fox</Link>
										</span>{" "}
										<span>
											on <Link to="#">Dec 15, 2021</Link>
										</span>
									</div>
								</div>
							</div>
						</div>

						<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
							<div className="post-entry">
								<Link to="#" className="post-thumbnail">
									<img
										src={require("../assets/images/post-3.jpg")}
										alt="Image"
										className="img-fluid"
									/>
								</Link>
								<div className="post-content-entry">
									<h3>
										<Link to="#">Small Space Furniture Apartment Ideas</Link>
									</h3>
									<div className="meta">
										<span>
											by <Link to="#">Kristin Watson</Link>
										</span>{" "}
										<span>
											on <Link to="#">Dec 12, 2021</Link>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- End Blog Section -->	 */}
		</>
	);
}

export default Home;
