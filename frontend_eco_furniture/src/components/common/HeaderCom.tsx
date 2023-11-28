import React, { useCallback, useEffect } from 'react';
import initCustom from '../../assets/js/custom';
import { Link } from 'react-router-dom';
import initSearch from '../../assets/js/script';
import { SideBar } from '../../pages/side/Sidebar';
import DropdownMenu from '../../pages/dropdown/DropdownMenu';
import DropdownMenu2 from '../../pages/dropdown/DropdownMenu2';
import DropdownMenu3 from '../../pages/dropdown/DropdownMenu3';
// TODO: 로그인
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/store';
import { logout } from '../../store/slices/auth';

function HeaderCom() {
	// TODO: 로그인 변수 정의
	// TODO : 공유저장소 변수 가져오기 : useSelector((state:RootState) => state.변수명);
	// TODO : auth = { isLoggedIn:true/false, user:user/null }
	const { user: currentUser } = useSelector((state: RootState) => state.auth);

	// TODO : 공유저장소 함수 가져오기 : logout()
	const dispatch = useAppDispatch();

	// TODO: 로그인 함수 정의
	// TODO : 공유저장소 함수 사용하기 : 로그아웃 정의
	// 사용법 : dispatch(공유함수명());
	// 리액트 성능개선을 위한 함수 : useCallback() : 캐싱됨
	const logOut = useCallback(() => {
		dispatch(logout());
	}, [dispatch]);

	// useEffect 훅
	useEffect(() => {
		initCustom();
		initSearch();
	}, [currentUser, logOut]);

	const handleSubMenuClick = () => {
		console.log('HeaderCom - 모든 제품 클릭');
		// 부모 컴포넌트에서 수행할 동작을 여기에 추가하세요.
	};

	return (
		<>
			{/* 검색창 */}
			<div className="search-box position-relative overflow-hidden w-100">
				<div className="search-wrap">
					<div className="close-button position-absolute">
						<svg className="close" width="22" height="22">
							<use xlinkHref="#close"></use>
						</svg>
					</div>
					<form
						id="search-form"
						className="text-center pt-3"
						action=""
						method=""
					>
						<input
							type="text"
							className="search-input fs-5 p-4 bg-transparent"
							placeholder="Search..."
						/>
						<svg className="search" width="22" height="22">
							<use xlinkHref="#search"></use>
						</svg>
					</form>
				</div>
			</div>
			{/* 검색창 */}

			<nav
				className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
				arial-label="Furni navigation bar"
			>
				<SideBar />
				<div className="container">
					<Link to="/" className="navbar-brand">
						Eco Furniture<span>.</span>
					</Link>

					<div className="collapse navbar-collapse" id="navbarsFurni">
						<ul className="custom-navbar-nav navbar-nav ms-auto">
							<li className="nav-item">
								<a className="nav-link text-center">
									<DropdownMenu />
								</a>
							</li>
							<li>
								<a className="nav-link text-center">
									<DropdownMenu2 />
								</a>
							</li>
							<li>
								<a className="nav-link text-center">
									<DropdownMenu3 />
								</a>
							</li>
						</ul>

						<div className="user-items ms-auto ">
							<ul className="custom-navbar-cta navbar-nav ms-auto mb-2 mb-md-2 mb-md-0">
								{/* 검색창 시작 */}
								<Link to="" className="search-item nav-link">
									{/* 검색창 끝 */}
									<img src="images/find.svg" />
								</Link>
								<a className="nav-link" href="#">
									<img src="images/user.svg" />
								</a>
								<Link to="/cart" className="nav-link">
									<img src="images/cart.svg" />
								</Link>
							</ul>
						</div>
					</div>

					{/* TODO: 로그인&회원가입, 로그아웃 start */}
					{/* 로그인되면(true) : 회원가입(숨김) - 로그인(숨김 : 로그아웃) */}
					{/* 로그인 시작 */}
					{!currentUser && (
						<>
							<ul className="custom-navbar-cta navbar-nav ms-auto mb-2 mb-md-2 mb-md-0">
								<a className="nav-link active" href="/register">
									회원가입
								</a>

								<a className="nav-link active" href="/login">
									로그인
								</a>
							</ul>
						</>
					)}
					{/* 로그인 끝 */}

					{/* 로그아웃 시작 */}
					{/* 로그아웃되면 : 회원가입(보임) - 로그인(보임 : 로그아웃(숨김)) */}
					{currentUser && (
						<a
							className="nav-link active"
							href="#"
							onClick={logOut}
						>
							로그아웃
						</a>
					)}
					{/* 로그아웃 끝 */}

					{/* 로그인&회원가입, 로그아웃 end */}
				</div>
			</nav>
			<nav
				className="navbar navbar-expand-lg bg-dark navbar-light"
				id="templatemo_nav_top"
			>
				<div className="container text-light d-flex justify-content-center">
					<div className="w-md-50 d-flex justify-content-between align-items-center">
						<div className="d-flex align-items-center">
							<i className="fa fa-envelope mx-2"></i>
							<a
								className="navbar-sm-brand text-light text-decoration-none "
								href=""
							>
								eco@company.com
							</a>
						</div>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						<div className="d-flex align-items-center">
							<i className="fa fa-tree mx-2"></i>
							<a
								className="navbar-sm-brand text-light text-decoration-none "
								href="/promotion"
							>
								크리스마스 특별 세일
							</a>
						</div>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						<div className="d-flex align-items-center">
							<i className="fa fa-phone mx-2"></i>
							<a
								className="navbar-sm-brand text-light text-decoration-none"
								href=""
							>
								쉽고 편한 전화 주문, 콜 오더
							</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default HeaderCom;
