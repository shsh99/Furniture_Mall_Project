import React from 'react';
//custom
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import HeaderCom from './components/common/HeaderCom';
import { Route, Routes } from 'react-router-dom';
import FooterCom from './components/common/FooterCom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Cart from './pages/shop/cart/Cart';
import CheckOut from './pages/CheckOut';
import Service from './pages/Service';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Search from './pages/Search';
import NotFound from './components/common/NotFound';
import Promotion from './pages/shop/item/Promotion';
import InteriorItem from './pages/shop/item/InteriorItem';
import LikePage from './pages/shop/like/LikePage';
import BestItem from './pages/shop/item/bestItem/BestItem';
import Table from './pages/shop/table/TableList';
import TableList from './pages/shop/table/TableList';
import LivingRoom from './pages/shop/LivingRoom';
import BedRoom from './pages/shop/BedRoom';
import SimpleProductList from './pages/shop/chair/SimpleProductList';
import ProductList from './pages/shop/chair/ProductList';
import ChairList from './pages/shop/chair/ChairList';
import ProductChair1 from './pages/shop/chair/ProductChair1';

// 자주 묻는 질문(BOARD_FAQ)
import FaqList from './pages/board/faq/FaqList';
import AddFaq from './pages/board/faq/AddFaq';
import Faq from './pages/board/faq/Faq';

// 공지사항(BOARD_NOTICE)
import NoticeList from './pages/board/notice/NoticeList';
import AddNotice from './pages/board/notice/AddNotice';
import Notice from './pages/board/notice/Notice';

// 로그인(LOGIN)
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';

// Payment
import Payment from './pages/shop/pay/Payment';
import PaySuccess from './pages/shop/pay/PaySuccess';

// PurchaseList
import PurchaseList from './pages/customer/myPage/PurchaseList';

// Cansel
import Cansel from './pages/customer/myPage/Cansel';

// itemImageUpload
import ItemImageListPage from './pages/shop/itemImages/ItemImagesListPage';
import AddItemImagesPage from './pages/shop/itemImages/AddItemImagesPage';
import ItemImagesPage from './pages/shop/itemImages/ItemImagesPage';

// CodeCategory
import CodeCategoryListPage from './pages/admin/code/CodeCategoryListPage';
import AddCodeCategoryPage from './pages/admin/code/AddCodeCategoryPage';

// Code
import CodeListPage from './pages/admin/code/CodeListPage';
import AddCodePage from './pages/admin/code/AddCodePage';
import CodePage from './pages/admin/code/CodePage';

// Coupon
import AddCouponPage from './pages/admin/coupon/AddCouponPage';
import CouponPage from './pages/admin/coupon/CouponPage';
import CouponListPage from './pages/admin/coupon/CouponListPage';

// MemberCoupon
import MemberCouponListPage from './pages/admin/coupon/MemberCouponListPage';

function App() {
	return (
		<div className="App">
			<HeaderCom />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
				{/* <Route path="/search" element={<Search />} /> */}
				<Route path="/service" element={<Service />} />

				{/* shop & item */}
				<Route path="/shop" element={<Shop />} />
				<Route path="/best-item" element={<BestItem />} />
				<Route path="/promotion" element={<Promotion />} />
				<Route path="/interior-item" element={<InteriorItem />} />

				{/* 소파 */}

				{/* 테이블 */}
				<Route path="/table" element={<TableList />} />

				{/* 의자 */}
				{/* <Route path="/chair" element={<Chair />} /> */}
				<Route path="/chair" element={<ChairList />} />

				{/* 의자 상세조회 */}
				<Route path="/chair1" element={<ProductChair1 />} />
				{/* 우리가 쇼핑몰 */}
				<Route path="/chair2" element={<SimpleProductList />} />
				{/* 백연동 전체조회 */}
				<Route path="/chair3" element={<ProductList />} />

				{/* 거실 */}
				<Route path="/livingRoom" element={<LivingRoom />} />

				{/* 침실 */}
				<Route path="/bedRoom" element={<BedRoom />} />

				{/* 공간별 쇼핑 */}
				<Route path="/blog" element={<Blog />} />

				{/* 찜 & 장바구니 */}

				<Route path="/cart" element={<Cart />} />
				<Route path="/like-page" element={<LikePage />} />

				{/* 주문 & 결제 */}
				<Route path="/checkOut" element={<CheckOut />} />

				{/* 고객센터 */}
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />

				{/* 자주 묻는 질문 */}
				<Route path="/faq" element={<FaqList />} />
				<Route path="/add-faq" element={<AddFaq />} />
				<Route path="/faq/:faqNo" element={<Faq />} />

				{/* 공지사항 */}
				<Route path="/notice" element={<NoticeList />} />
				<Route path="/add-notice" element={<AddNotice />} />
				<Route path="/notice/:noticeNo" element={<Notice />} />

				{/* 로그인 */}
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				

				{/* itemImageUpload */}
				<Route path="/item-images" element={<ItemImageListPage />} />
				<Route
					path="/add-item-images"
					element={<AddItemImagesPage />}
				/>
				<Route path="/item-images/:uuid" element={<ItemImagesPage />} />

				{/* CodeCategory */}
				<Route
					path="/code-category"
					element={<CodeCategoryListPage />}
				/>
				<Route
					path="/add-code-category"
					element={<AddCodeCategoryPage />}
				/>

				{/* Code */}
				<Route path="/code" element={<CodeListPage />} />
				<Route path="/add-code" element={<AddCodePage />} />
				<Route path="/code/:codeId" element={<CodePage />} />

				<Route path="/blog" element={<Blog />} />

				{/* Payment */}
				<Route path="/payment" element={<Payment />} />
				<Route path="/paySuccess" element={<PaySuccess />} />

				{/* PurchaseList */}
				<Route path="/purchaselist" element={<PurchaseList />} />

				{/* Cansel */}
				<Route path="/cansel" element={<Cansel />} />

				{/* itemImageUpload */}
				<Route path="/item-images" element={<ItemImageListPage />} />
				<Route
					path="/add-item-images"
					element={<AddItemImagesPage />}
				/>
				<Route path="/item-images/:uuid" element={<ItemImagesPage />} />

				{/* CodeCategory */}
				<Route
					path="/code-category"
					element={<CodeCategoryListPage />}
				/>
				<Route
					path="/add-code-category"
					element={<AddCodeCategoryPage />}
				/>

				{/* Code */}
				<Route path="/code" element={<CodeListPage />} />
				<Route path="/add-code" element={<AddCodePage />} />
				<Route path="/code/:codeId" element={<CodePage />} />

				{/* Coupon */}
				<Route path="/coupon" element={<CouponListPage />} />
				<Route path="/add-coupon" element={<AddCouponPage />} />
				<Route path="/coupon/:couponId" element={<CouponPage />} />

				{/* MemberCoupon */}
				<Route
					path="/member-coupon"
					element={<MemberCouponListPage />}
				/>
			</Routes>

			<FooterCom />
		</div>
	);
}

export default App;
