import React from 'react'

function Promotion() {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="d-flex row justify-content-between">
                        <div className="col-lg-10">
                            <div className="mt-5">
                                <h1 className="bestt">크리스마스 마켓</h1>
                                <div className="d-flex justify-content-around align-items-center">
                                    <div className="mx-2">
                                        <img src="images/santa.jpg" className="d-block img-fluid mx-1" alt="..." style={{ width: '200px', height: '150px' }} />
                                        <p className="text-center">겨울 조명</p>
                                    </div>
                                    <div className="mx-2">
                                        <img src="images/citem2.jpg" className="d-block img-fluid mx-1" alt="..." style={{ width: '200px', height: '150px' }} />
                                        <p className="text-center">겨울 장식/데코</p>
                                    </div>
                                    <div className="mx-2">
                                        <img src="images/item2.jpg" className="d-block img-fluid mx-1" alt="..." style={{ width: '200px', height: '150px' }} />
                                        <p className="text-center">겨울 화분 </p>
                                    </div>
                                    <div className="mx-2">
                                        <img src="images/ctree1.jpg" className="d-block img-fluid mx-1" alt="..." style={{ width: '200px', height: '150px' }} />
                                        <p className="text-center">크리스마스 트리</p>
                                    </div>
                                    <div className="mx-2">
                                        <img src="images/item1.jpg" className="d-block img-fluid mx-1" alt="..." style={{ width: '200px', height: '150px' }} />
                                        <p className="text-center">크리스마스 데코</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="product-section">
                            <div className="container d-flex justify-content-center" >
                                <div className="ml-3" >
                                    <div className="card-body" style={{ maxWidth: '400px', height: 'auto' }}>
                                        <h3 className="card-title ml-3 mr-3" style={{ fontWeight: 'bold', color: 'black', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }} >나만의 가장 완벽한 크리스마스</h3>
                                        <p className="card-text mt-3" style={{
                                            color: 'black', textOverflow: 'ellipsis'
                                        }}>
                                            우리 집에서 열리는 화려한 북유럽의 크리스마스 마켓!<br />  스칸디나비아 전통문화와 수공예에서 영감을 얻은 새로운 겨울 컬렉션으로 나만의 크리스마스를 준비해 보세요.
                                        </p>
                                        <div className="card-body mt-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <img src="images/santa.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-3" style={{ maxWidth: '400px' }}>
                                    <img src="images/christmas.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: 'auto' }} />
                                </div>
                            </div>
                        </div>

                        <div className="d-flex ">
                            <h2>분위기 있는 제품 </h2>
                        </div>
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
                                            <a className="product-item" href="cart.html">
                                                <img
                                                    src="images/의자1.png"
                                                    className="d-block w-100"
                                                />
                                                <h3 className="product-title">북유럽 의자</h3>
                                                <strong className="product-price">$50.00</strong>


                                            </a>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                                            <a className="product-item" href="cart.html">
                                                <img
                                                    src="images/의자2.png"
                                                    className="d-block w-100"
                                                />
                                                <h3 className="product-title">에어로 의자</h3>
                                                <strong className="product-price">$78.00</strong>


                                            </a>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                                            <a className="product-item" href="cart.html">
                                                <img
                                                    src="images/의자3.png"
                                                    className="d-block w-100"
                                                />
                                                <h3 className="product-title">인체공학적 의자</h3>
                                                <strong className="product-price">$43.00</strong>


                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* 1번 사진 끝 */}

                                {/* 2번 사진 */}
                                <div className="carousel-item">
                                    <div className="d-flex justify-content-between">
                                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                                            <a className="product-item" href="cart.html">
                                                <img
                                                    src="images/의자2.png"
                                                    className="d-block w-100"
                                                />
                                                <h3 className="product-title">에어로 의자</h3>
                                                <strong className="product-price">$78.00</strong>


                                            </a>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                                            <a className="product-item" href="cart.html">
                                                <img
                                                    src="images/의자3.png"
                                                    className="d-block w-100"
                                                />
                                                <h3 className="product-title">인체공학적 의자</h3>
                                                <strong className="product-price">$43.00</strong>


                                            </a>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                                            <a className="product-item" href="cart.html">
                                                <img
                                                    src="images/의자1.png"
                                                    className="d-block w-100"
                                                />
                                                <h3 className="product-title">북유럽 의자</h3>
                                                <strong className="product-price">$50.00</strong>


                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* 2번 사진 끝*/}

                                {/* 3번 사진 */}
                                <div className="carousel-item">
                                    <div className="d-flex justify-content-between">
                                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                                            <a className="product-item" href="cart.html">
                                                <img
                                                    src="images/의자3.png"
                                                    className="d-block w-100"
                                                />
                                                <h3 className="product-title">인체공학적 의자</h3>
                                                <strong className="product-price">$43.00</strong>


                                            </a>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                                            <a className="product-item" href="cart.html">
                                                <img
                                                    src="images/의자1.png"
                                                    className="d-block w-100"
                                                />
                                                <h3 className="product-title">북유럽 의자</h3>
                                                <strong className="product-price">$50.00</strong>


                                            </a>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                                            <a className="product-item" href="cart.html">
                                                <img
                                                    src="images/의자2.png"
                                                    className="d-block w-100"
                                                />
                                                <h3 className="product-title">에어로 의자</h3>
                                                <strong className="product-price">$78.00</strong>


                                            </a>
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
                        <div className="col-lg-10 mt-5">
                            <div className="mt-5">
                                <p style={{ fontWeight: 'bold', color: 'black' }}>분위기 있게 크리스마스 장식하기</p>
                                <div className="d-flex justify-content-around align-items-center">
                                    <div className="mx-2">
                                        <img src="images/citem1.jpg" className="d-block img-fluid mx-1" alt="..." style={{ width: '200px', height: '150px' }} />
                                        <p className="text-center">겨울 조명</p>
                                    </div>
                                    <div className="mx-2">
                                        <img src="images/citem2.jpg" className="d-block img-fluid mx-1" alt="..." style={{ width: '200px', height: '150px' }} />
                                        <p className="text-center">겨울 장식/데코</p>
                                    </div>
                                    <div className="mx-2">
                                        <img src="images/item2.jpg" className="d-block img-fluid mx-1" alt="..." style={{ width: '200px', height: '150px' }} />
                                        <p className="text-center">겨울 화분 </p>
                                    </div>
                                    <div className="mx-2">
                                        <img src="images/ctree1.jpg" className="d-block img-fluid mx-1" alt="..." style={{ width: '200px', height: '150px' }} />
                                        <p className="text-center">크리스마스 트리</p>
                                    </div>
                                    <div className="mx-2">
                                        <img src="images/santa.jpg" className="d-block img-fluid mx-1" alt="..." style={{ width: '200px', height: '150px' }} />
                                        <p className="text-center">크리스마스 데코</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>


    )
}

export default Promotion