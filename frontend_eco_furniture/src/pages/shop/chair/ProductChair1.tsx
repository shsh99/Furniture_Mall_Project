// 부모 컴포넌트에서 사용 예시
// ProductChair1.tsx
import React from 'react';
import ProductDetail from './ProductDetail';

const ProductChair1: React.FC = () => {
  const product = {
    id: 1,
    name: '샤모니 암 체어',
    description: '의자, 플라스틱.',
    imageUrls: [
      require("../../../assets/images/chair1/chair1.png"),
      require("../../../assets/images/chair1/chair1-1.jpg"),
      require("../../../assets/images/chair1/chair1-2.jpg"),
      require("../../../assets/images/chair1/chair1-3.jpg"),
      require("../../../assets/images/chair1/chair1-4.jpg"),
      require("../../../assets/images/chair1/chair1-5.jpg")
    ],
    price: '₩ 150,000',
    productReview: '★★★★☆',
    productInformation : "안녕", //제품 정보
    brandName : "이케아", // 브랜드명
    productNumber : "092.464.08", // 제품 번호
    reference : "다라", // 참고 내용
    material: "마바", // 소재
    management : "아아", // 관리
    noticeInformation: "사" // 고시 정보
    // 다른 제품 정보 추가
  };

  return (
    <div className="classification">
        <div style={{ color: "black", paddingTop: "15px" }}><h5 >모든제품 &gt; 의자 &gt; {product.name}</h5></div>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductChair1;
