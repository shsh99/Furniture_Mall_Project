import React, { useEffect } from 'react'
import initCustom from '../assets/js/custom';

function Blog() {
	useEffect(() => {
		initCustom();
	})
	return (
		<>
			<div className="owl-carousel owl-theme owl-loaded">
				<div className="owl-stage-outer">
					<div className="owl-stage">
						<div className="owl-item">
							<div className="card" style={{ width: 18 + "rem" }}>
								<img src="images/의자1.png" className="card-img-top" alt="..." />
								<div className="card-body">
									<p className="card-text">죄송합니다 이게 한계에요</p>
								</div>
							</div>
						</div>
						<div className="owl-item">
							<div className="card" style={{ width: 18 + "rem" }}>
								<img src="images/의자1.png" className="card-img-top" alt="..." />
								<div className="card-body">
									<p className="card-text">죄송합니다 이게 한계에요</p>
								</div>
							</div>
						</div>
						<div className="owl-item">
							<div className="card" style={{ width: 18 + "rem" }}>
								<img src="images/의자1.png" className="card-img-top" alt="..." />
								<div className="card-body">
									<p className="card-text">죄송합니다 이게 한계에요</p>
								</div>
							</div>
						</div>
						<div className="owl-item">
							<div className="card" style={{ width: 18 + "rem" }}>
								<img src="images/의자1.png" className="card-img-top" alt="..." />
								<div className="card-body">
									<p className="card-text">죄송합니다 이게 한계에요</p>
								</div>
							</div>
						</div>
						<div className="owl-item">
							<div className="card" style={{ width: 18 + "rem" }}>
								<img src="images/의자1.png" className="card-img-top" alt="..." />
								<div className="card-body">
									<p className="card-text">죄송합니다 이게 한계에요</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


		</>
	)
}

export default Blog