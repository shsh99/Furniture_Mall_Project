# Eco Furniture Mall

![image](https://github.com/shsh99/Furniture_Mall_Project/assets/134079624/e345ed1e-88a5-473d-8a52-389513e7d75a)

## 가구 쇼핑몰 웹 개발 팀 프로젝트

Spring Boot와 React를 활용한 풀스택 가구 쇼핑몰 웹 애플리케이션입니다.

---

## 프로젝트 개요

**프로젝트 기간**: 2023년 11월 15일 ~ 2023년 12월 03일

### 팀 구성

> 모든 팀원이 풀스택으로 개발에 참여했으며, 주 포지션은 아래와 같습니다.

| Name | (팀장) 신동구 | 도권재 | 송기동 | 이대훈 | 박완수 | 조규보 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Position** | 로그인/회원가입 , 상품 CRUD, 제품상세페이지 | 장바구니, 상품문의, 찜 기능 | 결제 | 공지사항, QNA, 쿠폰발급 | 카테고리, 주문 CRUD | 이미지 파일 관리, 주문 CRUD |

---

## 기술 스택

### Front-End

| 기술 | 버전 |
|:---|:---|
| React | 18.2.0 |
| TypeScript | - |
| Redux Toolkit | 1.9.7 |
| React Router DOM | 6.20.0 |
| Material-UI | 5.14.18 |
| Bootstrap | 5.0 |
| Styled Components | 6.1.1 |
| Axios | 1.6.2 |
| Formik + Yup | 2.4.5, 1.3.2 |

### Back-End

| 기술 | 버전 |
|:---|:---|
| Spring Boot | 2.7.17 |
| Java | 11 |
| JPA/Hibernate | - |
| Spring Security | - |
| Oracle Database | 19c |
| Lombok | - |
| Gradle | - |

### 외부 API

- **카카오페이 API** - 결제 처리
- **DAUM 우편번호 찾기 API** - 주소 검색

### 협업 도구

<img src="https://img.shields.io/badge/Java-007396?style=flat&logo=java&logoColor=white"/> <img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=flat&logo=springboot&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Oracle-F80000?style=flat&logo=oracle&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white"/> <img src="https://img.shields.io/badge/Google Cloud-4285F4?style=flat&logo=googlecloud&logoColor=white"/>

---

## 프로젝트 구조

```
Furniture_Mall_Project/
├── ecoFurniture/                    # 백엔드 (Spring Boot)
│   ├── src/main/java/com/project/ecofurniture/
│   │   ├── config/                  # 설정 (WebConfig, Security)
│   │   ├── controller/              # REST API 컨트롤러
│   │   │   ├── admin/               # 관리자 (코드, 쿠폰)
│   │   │   ├── auth/                # 인증
│   │   │   ├── board/               # 게시판 (공지, FAQ)
│   │   │   ├── customer/            # 고객 (포인트)
│   │   │   └── shop/                # 쇼핑 (상품, 장바구니, 찜)
│   │   ├── service/                 # 비즈니스 로직
│   │   ├── repository/              # 데이터 접근 (JPA)
│   │   ├── model/
│   │   │   ├── entity/              # JPA Entity
│   │   │   ├── dto/                 # Data Transfer Objects
│   │   │   └── common/              # 공통 클래스
│   │   └── security/                # JWT, UserDetails
│   └── src/main/resources/
│       └── application.properties   # 설정 파일
│
├── frontend_eco_furniture/          # 프론트엔드 (React)
│   ├── public/                      # 정적 파일
│   │   └── images/                  # 상품 이미지
│   └── src/
│       ├── components/              # 재사용 컴포넌트
│       │   ├── admin/               # 관리자 컴포넌트
│       │   ├── common/              # Header, Footer 등
│       │   └── shop/                # 쇼핑 컴포넌트
│       ├── pages/                   # 페이지 컴포넌트
│       │   ├── admin/               # 관리자 페이지
│       │   ├── auth/                # 인증 페이지
│       │   ├── board/               # 게시판 페이지
│       │   ├── shop/                # 쇼핑 페이지
│       │   └── customer/            # 고객 페이지
│       ├── service/                 # API 서비스 (Axios)
│       ├── store/                   # Redux 상태관리
│       ├── types/                   # TypeScript 인터페이스
│       └── utils/                   # 유틸리티 함수
│
└── README.md
```

---

## 주요 기능

### 고객 기능

#### 회원 관리
- **회원가입**: 이메일 중복 확인, 비밀번호 유효성 검증, DAUM 주소 API 연동
- **로그인**: JWT 토큰 기반 인증
- **비밀번호 찾기**: 이메일 SMTP를 통한 비밀번호 재설정
- **마이페이지**: 고객 정보 조회/수정, 회원탈퇴

#### 상품
- **상품 조회**: 전체 조회, 카테고리별 조회 (의자, 테이블, 거실, 침실)
- **상품 검색**: 상품명 검색
- **상품 상세**: 상세 정보, 이미지 갤러리

#### 쇼핑
- **찜 기능**: 상품 찜하기/취소, 찜 목록 조회
- **베스트 아이템**: 찜이 많은 순으로 인기 상품 표시
- **장바구니**: 상품 추가/삭제, 수량 변경, 전체/선택 결제
- **결제**: 카카오페이 API 연동
- **주문 내역**: 주문 조회

#### 포인트 & 쿠폰
- **포인트 조회**: 잔여 포인트, 사용 내역
- **쿠폰 조회**: 보유 쿠폰, 사용 내역

#### 게시판
- **상품 문의**: 상품 관련 질문 작성
- **상품평**: 구매 상품에 대한 리뷰 작성

---

### 관리자 기능

#### 상품 관리
- **상품 CRUD**: 상품 등록/수정/삭제
- **상품 이미지**: 이미지 업로드 및 관리

#### 회원 관리
- **회원 조회**: 전체 회원 목록 조회

#### 게시판 관리
- **공지사항**: CRUD
- **FAQ**: CRUD
- **QNA**: 답변 작성, 삭제

#### 코드 & 쿠폰 관리
- **코드 관리**: 권한/카테고리 코드 관리
- **쿠폰 관리**: 쿠폰 생성, 발급, 조회

---

## ERD & 테이블 명세서

#### 테이블 명세서
[Google Sheets 링크](https://docs.google.com/spreadsheets/d/1zpjjtAKGhq-PrGZjYdW3FrDrXBLRjHzK8iVUpqgpsR0/edit?usp=sharing)

#### ERD
![ERD](https://github.com/shsh99/Furniture_Mall_Project/assets/134079624/993b9038-335d-465f-b4d3-aeaf0915e5b9)

### 주요 테이블

| 테이블명 | 설명 |
|:---|:---|
| TB_USER | 사용자 정보 (email, name, password, phone, address, point) |
| TB_SHOP_ITEMS | 상품 정보 (itemName, itemPrice, itemQty, imgPath) |
| TB_SHOP_CART | 장바구니 (user_id, item_no, qty, price) |
| TB_SHOP_LIKE | 찜 목록 (user_id, item_no) |
| TB_BOARD_NOTICE | 공지사항 (title, content, admin_id) |
| TB_BOARD_FAQ | FAQ (title, content) |
| TB_ADMIN_CODE | 코드 관리 (code_name, code_value) |
| TB_ADMIN_COUPON | 쿠폰 (coupon_name, discount_rate, expiry_date) |
| TB_CUSTOMER_POINT_HISTORIES | 포인트 내역 (user_id, point_amount, usage_type) |

---

## 사이트맵

<table>
<tr>
  <td align="center"><b>고객</b></td>
  <td align="center"><b>관리자</b></td>
</tr>
<tr>
  <td><img src="https://github.com/shsh99/Furniture_Mall_Project/assets/134079624/7fa1b7e8-92e9-4b48-a465-645e02d84e1c" width="400"/></td>
  <td><img src="https://github.com/shsh99/Furniture_Mall_Project/assets/134079624/d8a42127-feed-4696-a252-ccb1661669b1" width="400"/></td>
</tr>
</table>

---

## API 엔드포인트

### 인증 API
| Method | Endpoint | 설명 |
|:---:|:---|:---|
| POST | `/api/auth/signin` | 로그인 |
| POST | `/api/auth/signup` | 회원가입 |
| POST | `/api/auth/checkInfo` | 정보 확인 |
| POST | `/api/auth/changePw` | 비밀번호 변경 |

### 상품 API
| Method | Endpoint | 설명 |
|:---:|:---|:---|
| GET | `/api/shop/items` | 상품 목록 조회 |
| GET | `/api/shop/items/{id}` | 상품 상세 조회 |
| POST | `/api/shop/items` | 상품 등록 (관리자) |
| PUT | `/api/shop/items/{id}` | 상품 수정 (관리자) |
| DELETE | `/api/shop/items/{id}` | 상품 삭제 (관리자) |

### 장바구니 API
| Method | Endpoint | 설명 |
|:---:|:---|:---|
| GET | `/api/shop/cart` | 장바구니 조회 |
| POST | `/api/shop/cart` | 장바구니 추가 |
| PUT | `/api/shop/cart/{id}` | 수량 변경 |
| DELETE | `/api/shop/cart/{id}` | 장바구니 삭제 |

### 게시판 API
| Method | Endpoint | 설명 |
|:---:|:---|:---|
| GET | `/api/board/notice` | 공지사항 목록 |
| GET | `/api/board/faq` | FAQ 목록 |
| POST | `/api/board/notice` | 공지사항 작성 (관리자) |
| POST | `/api/board/faq` | FAQ 작성 (관리자) |

---

## 의존성 (Backend)

```gradle
// Spring Boot
implementation 'org.springframework.boot:spring-boot-starter-web'
implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
implementation 'org.springframework.boot:spring-boot-starter-validation'
implementation 'org.springframework.boot:spring-boot-starter-aop'
implementation 'org.springframework.boot:spring-boot-starter-mail'
implementation 'org.springframework.security:spring-security-crypto'

// Database
runtimeOnly 'com.oracle.database.jdbc:ojdbc8'

// Utils
compileOnly 'org.projectlombok:lombok'
annotationProcessor 'org.projectlombok:lombok'
implementation 'commons-io:commons-io:2.6'
implementation 'commons-fileupload:commons-fileupload:1.3.1'
implementation 'com.google.code.gson:gson:2.8.6'

// Dev Tools
developmentOnly 'org.springframework.boot:spring-boot-devtools'
testImplementation 'org.springframework.boot:spring-boot-starter-test'
```

---

## 실행 방법

### Backend (Spring Boot)

```bash
cd ecoFurniture
./gradlew bootRun
```
- 서버 실행: `http://localhost:8080`

### Frontend (React)

```bash
cd frontend_eco_furniture
npm install
npm start
```
- 클라이언트 실행: `http://localhost:3000`

---

## 라이선스

이 프로젝트는 학습 목적으로 제작되었습니다.
