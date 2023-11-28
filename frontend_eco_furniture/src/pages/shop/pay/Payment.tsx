import axios from 'axios';
import React, { useEffect, useState } from 'react';
import initCustom from '../../../assets/js/custom';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { Link } from 'react-router-dom';

function Payment() {
	useEffect(() => {
		initCustom();
	});

	const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);

	const handle = {
		// 버튼 클릭 이벤트
		clickButton: () => {
			setOpenPostcode((current) => !current);
		},

		// 주소 선택 이벤트
		selectAddress: (data: any) => {
			console.log(`
                주소: ${data.address},
                우편번호: ${data.zonecode}
            `);
			setOpenPostcode(false);
		},
	};

	// param 초기화
	const initialParams = {
		cid: 'TC0ONETIME', // 테스트 결제 아이디
		partner_order_id: 'partner_order_id',
		partner_user_id: 'partner_user_id',
		item_name: '초코파이',
		quantity: 1,
		total_amount: 2200,
		vat_amount: 200,
		tax_free_amount: 0,
		approval_url: 'http://localhost:3000/paySuccess',
		fail_url: 'http://localhost:3000/',
		cancel_url: 'http://localhost:3000/payment',
	};

	const [next_redirect_pc_url, setNext_redirect_pc_url] = useState('');
	const [tid, setTid] = useState('');
	const [params, setParams] = useState(initialParams);

	useEffect(() => {
		axios
			.post('/v1/payment/ready', params, {
				headers: {
					// 카카오 developers에 등록한 admin키를 헤더에 줘야 한다.
					Authorization: 'KakaoAK 7404793caab757d56142cba3d80fc41a',
					'Content-type':
						'application/x-www-form-urlencoded;charset=utf-8',
				},
			})
			.then((response) => {
				// 응답에서 필요한 data만 뽑는다.
				const {
					data: { next_redirect_pc_url, tid },
				} = response;

				console.log(next_redirect_pc_url);
				console.log(tid);
				// 응답 data로 state 갱신
				setNext_redirect_pc_url(next_redirect_pc_url);
				setTid(tid);
			});
	}, []);

	return (
		<>
			{/* <!-- Start Hero Section --> */}
			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>결제</h1>
							</div>
						</div>
						<div className="col-lg-7"></div>
					</div>
				</div>
			</div>
			{/* <!-- End Hero Section --> */}

			<div className="untree_co-section before-footer-section">
				<div className="container">
					<div className="row mb-5 d-flex justify-content-center">
						<div className="col-md-6">
							<div className="site-blocks-table">
								<div>
									<h5>주문 정보</h5>
									<div className="form-floating mb-2">
										<input
											type="text"
											className="form-control"
											id="floatingOrderName"
											placeholder="name"
										/>
										<label>주문자 이름</label>
									</div>
									<div className="form-floating mb-2">
										<input
											type="text"
											className="form-control"
											id="floatingOrderPhone"
											placeholder="Name"
										/>
										<label>주문자 전화번호</label>
									</div>
									<div className="form-floating">
										<input
											type="text"
											className="form-control"
											id="floatingOrderAddress"
											placeholder="Address"
										/>
										<label>주문자 주소</label>
										{/* <!-- Start Kakao Address API HTML button--!> */}
										<div>
											<button
												className="btn btn-outline-primary"
												onClick={handle.clickButton}
											>
												주소 조회
											</button>

											{openPostcode && (
												<DaumPostcodeEmbed
													onComplete={
														handle.selectAddress
													} // 값을 선택할 경우 실행되는 이벤트
													autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
													defaultQuery="판교역로 235" // 팝업을 열때 기본적으로 입력되는 검색어
												/>
											)}
										</div>
										{/* <!-- End Kakao Address API HTML button--!> */}
									</div>
								</div>

								<div>
									<h5 className="mt-3">배송 정보</h5>
									<div className="form-floating mb-2">
										<input
											type="text"
											className="form-control"
											id="floatingShipName"
											placeholder="name"
										/>
										<label>수령인 이름</label>
									</div>
									<div className="form-floating mb-2">
										<input
											type="text"
											className="form-control"
											id="floatingShipPhone"
											placeholder="Name"
										/>
										<label>수령인 전화번호</label>
									</div>
									<div className="form-floating">
										<input
											type="text"
											className="form-control"
											id="floatingShipAddress"
											placeholder="Address"
										/>
										<label>수령 주소</label>
										{/* <!-- Start Kakao Address API HTML button--!> */}
										<div>
											<button
												type="button"
												className="btn btn-primary"
												onClick={handle.clickButton}
											>
												주소 조회
											</button>

											{openPostcode && (
												<DaumPostcodeEmbed
													onComplete={
														handle.selectAddress
													} // 값을 선택할 경우 실행되는 이벤트
													autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
													defaultQuery="판교역로 235" // 팝업을 열때 기본적으로 입력되는 검색어
												/>
											)}
										</div>
										{/* <!-- End Kakao Address API HTML button--!> */}
									</div>
									<input
										type="checkbox"
										id="shippingInfo"
										name="shippingInfo"
									/>
									<label
										htmlFor="bill_info"
										className="check"
									>
										&nbsp;주문 정보와 배송 정보가 같습니다.
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="row mb-5">
						<form className="col-md-12" method="post">
							<div className="site-blocks-table">
								<table className="table">
									<thead>
										<tr>
											<th className="product-thumbnail">
												Image
											</th>
											<th className="product-name">
												Product
											</th>
											<th className="product-price">
												Price
											</th>
											<th className="product-quantity">
												Quantity
											</th>
											<th className="product-total">
												Total
											</th>
											<th className="product-remove">
												Remove
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="product-thumbnail">
												<img
													src="images/product-1.png"
													alt="Image"
													className="img-fluid"
												/>
											</td>
											<td className="product-name">
												<h2 className="h5 text-black">
													Product 1
												</h2>
											</td>
											<td>$49.00</td>
											<td>
												<div
													className="input-group mb-3 d-flex align-items-center quantity-container"
													style={{
														maxWidth: 120 + 'px',
													}}
												>
													<div className="input-group-prepend">
														<button
															className="btn btn-outline-black decrease"
															type="button"
														>
															&minus;
														</button>
													</div>
													<input
														type="text"
														className="form-control text-center quantity-amount"
														value="1"
														placeholder=""
														aria-label="Example text with button addon"
														aria-describedby="button-addon1"
													/>
													<div className="input-group-append">
														<button
															className="btn btn-outline-black increase"
															type="button"
														>
															{' '}
															&#43;{' '}
														</button>
													</div>
												</div>
											</td>
											<td>$49.00</td>
											<td>
												<a
													href="#"
													className="btn btn-black btn-sm"
												>
													X
												</a>
											</td>
										</tr>

										<tr>
											<td className="product-thumbnail">
												<img
													src="images/product-2.png"
													alt="Image"
													className="img-fluid"
												/>
											</td>
											<td className="product-name">
												<h2 className="h5 text-black">
													Product 2
												</h2>
											</td>
											<td>$49.00</td>
											<td>
												<div
													className="input-group mb-3 d-flex align-items-center quantity-container"
													style={{
														maxWidth: 120 + 'px',
													}}
												>
													<div className="input-group-prepend">
														<button
															className="btn btn-outline-black decrease"
															type="button"
														>
															&minus;
														</button>
													</div>
													<input
														type="text"
														className="form-control text-center quantity-amount"
														value={1}
														placeholder=""
														aria-label="Example text with button addon"
														aria-describedby="button-addon1"
													/>
													<div className="input-group-append">
														<button
															className="btn btn-outline-black increase"
															type="button"
														>
															{' '}
															&#43;{' '}
														</button>
													</div>
												</div>
											</td>
											<td>$49.00</td>
											<td>
												<a
													href="#"
													className="btn btn-black btn-sm"
												>
													X
												</a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
					</div>

					<div className="row">
						<div className="col-md-6"></div>
						<div className="col-md-6 pl-5">
							<div className="row justify-content-end">
								<div className="col-md-7">
									<div className="row">
										<div className="col-md-12 text-right border-bottom mb-5">
											<h3 className="text-black h4 text-uppercase">
												Cart Totals
											</h3>
										</div>
									</div>
									<div className="row mb-3">
										<div className="col-md-6">
											<span className="text-black">
												Subtotal
											</span>
										</div>
										<div className="col-md-6 text-right">
											<strong className="text-black">
												$230.00
											</strong>
										</div>
									</div>
									<div className="row mb-5">
										<div className="col-md-6">
											<span className="text-black">
												Total
											</span>
										</div>
										<div className="col-md-6 text-right">
											<strong className="text-black">
												$230.00
											</strong>
										</div>
									</div>

									<div className="row">
										<Link to={next_redirect_pc_url}>
											<button className="btn btn-primary text-light">
												Payment
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Payment;
