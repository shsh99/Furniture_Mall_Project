import React from "react";
//custom
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";

import HeaderCom from "./components/common/HeaderCom";
import { Route, Routes } from "react-router-dom";
import FooterCom from "./components/common/FooterCom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Cart from "./pages/shop/cart/Cart";
import CheckOut from "./pages/CheckOut";
import Service from "./pages/Service";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import NotFound from "./components/common/NotFound";
import Promotion from "./pages/shop/item/Promotion";
import InteriorItem from "./pages/shop/item/InteriorItem";
import Chair from "./pages/shop/chair/Chair";
import LikePage from "./pages/shop/like/LikePage";
import BestItem from "./pages/shop/item/bestItem/BestItem";
import Table from "./pages/shop/table/Table";
import Table1Info from "./pages/shop/table/Table1Info";
import Table2Info from "./pages/shop/table/Table2Info";
import Table3Info from "./pages/shop/table/Table3Info";
import Table4Info from "./pages/shop/table/Table4Info";
import Table5Info from "./pages/shop/table/Table5Info";
import Table6Info from "./pages/shop/table/Table6Info";
import FaqList from "./pages/board/faq/FaqList";
import AddFaq from "./pages/board/faq/AddFaq";
import Faq from "./pages/board/faq/Faq";
import NoticeList from "./pages/board/notice/NoticeList";
import AddNotice from "./pages/board/notice/AddNotice";
import Notice from "./pages/board/notice/Notice";
import ItemImageListPage from "./pages/shop/itemImages/ItemImagesListPage";
import AddItemImagesPage from "./pages/shop/itemImages/AddItemImagesPage";
import ItemImagesPage from "./pages/shop/itemImages/ItemImagesPage";

import CodeCategoryListPage from "./pages/admin/code/CodeCategoryListPage";
import AddCodeCategoryPage from "./pages/admin/code/AddCodeCategoryPage";
import CodeListPage from "./pages/admin/code/CodeListPage";
import AddCodePage from "./pages/admin/code/AddCodePage";
import CodePage from "./pages/admin/code/CodePage";
// TODO: Login
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

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
        <Route path="/chair" element={<Chair />} />
        {/* 테이블 */}
        <Route path="/table" element={<Table />} />
        {/* 테이블1 */}
        <Route path="/table-1" element={<Table1Info />} />
        {/* 테이블2 */}
        <Route path="/table-2" element={<Table2Info />} />
        {/* 테이블3 */}
        <Route path="/table-3" element={<Table3Info />} />
        {/* 테이블4 */}
        <Route path="/table-4" element={<Table4Info />} />
        {/* 테이블5 */}
        <Route path="/table-5" element={<Table5Info />} />
        {/* 테이블6 */}
        <Route path="/table-6" element={<Table6Info />} />

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

        {/* TODO: 자주 묻는 질문 */}
        <Route path="/faq" element={<FaqList />} />
        <Route path="/add-faq" element={<AddFaq />} />
        <Route path="/faq/:faqNo" element={<Faq />} />

        {/* TODO: 공지사항 */}
        <Route path="/notice" element={<NoticeList />} />
        <Route path="/add-notice" element={<AddNotice />} />
        <Route path="/notice/:noticeNo" element={<Notice />} />

        {/* TODO: 로그인 */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* itemImageUpload */}
        <Route path="/item-images" element={<ItemImageListPage />} />
        <Route path="/add-item-images" element={<AddItemImagesPage />} />
        <Route path="/item-images/:uuid" element={<ItemImagesPage />} />

        {/* CodeCategory */}
        <Route path="/code-category" element={<CodeCategoryListPage />} />
        <Route path="/add-code-category" element={<AddCodeCategoryPage />} />

        {/* Code */}
        <Route path="/code" element={<CodeListPage />} />
        <Route path="/add-code" element={<AddCodePage />} />
        <Route path="/code/:codeId" element={<CodePage />} />
      </Routes>

      <FooterCom />
    </div>
  );
}

export default App;
