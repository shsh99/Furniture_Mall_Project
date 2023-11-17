# Furniture_Mall_Project
![image](https://github.com/shsh99/Furniture_Mall_Project/assets/134079624/e345ed1e-88a5-473d-8a52-389513e7d75a)



가구 쇼핑몰 웹 개발 팀 프로젝트 
<br>

## 🚀 프로젝트 개요
- ***모든 팀원이 풀스택으로 개발에 참여했으며, 주 포지션은 아래와 같습니다.***
<br>

|   Name   |(팀장) 신동구  | 도권재 | 송기동 | 이대훈 | 박완수 | 조규보 |
| :------: | --- | --- | --- | --- | --- |--- |
| **Position** |상품 CRUD, 제품상세페이지 기능 |장바구니 crud, 상품 문의, 찜 기능 |결제, 로그인/회원가입 기능 |공지사항, QNA, 로그인/회원가입, 쿠폰발급 기능 |카테고리 지정, 주문 CRUD 기능 |이미지 파일 DB에 저장, 주문 CRUD 기능 |


- **프로젝트 기간 : 2023년 11월 00일 ~ 2023년 12월 00일**


<br>

## 🎮 기술 스택

### ✨ Front-End

<details>
    <summary>⚡️ FE 자세히 살펴보기</summary>
    <br>
    <ul>
        <li>bootstrap : 5.2 </li>
        <li>HTML5 </li>
        <li>CSS3 </li>
        <li>JavaScript :  </li>
        <li>TypeScript :  </li>
        <li>React :  </li>
       
    </ul>
</details>

  <br>

### 💻 Back-End

<details>
      <summary>⚡️ BE 자세히 살펴보기</summary>
      <br>
      <ul>
          <li>springboot : 2.7.17  </li>
          <li>SQL : </li>
          <li>jdk : 11.0.20  </li>
          <li>java : 11  </li>
<!--           <li>lombok </li>
          <li>MyBatis </li> -->
          <li>JSP </li>
<!--           <li>BCrypt HASH </li>
          <li>Apache Tomcat : 9.0 </li> -->
      </ul>
  </details>
  
  <br>
  
### 🛠 외부 API

<details>
      <summary>⚡️ API 자세히 살펴보기</summary>
      <br>
      <ul>
<!--           <li>카카오 소셜 로그인 API (OAuth 2.0 프로토콜)</li>
          <li>카카오페이 API</li>
          <li>이메일 전송 API (네이버 SMTP 프로토콜)</li>
          <li>구글 맵 API</li>
          <li>CoolSMS API</li>
          <li>DAUM 우편번호 찾기 API</li>
          <li>국가 코드 OPEN API</li> -->
      </ul>
</details>

  <br>


### 🙌🏻 Collaboration
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=Jira&logoColor=white"/> <img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=flat&logo=Slack&logoColor=white"/> <img src="https://img.shields.io/badge/Github-181717?style=flat&logo=Github&logoColor=white"/> <img src="https://img.shields.io/badge/SQL-4479A1?style=flat&logo=Notion&logoColor=white"/> <img 
src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=Notion&logoColor=white"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=Notion&logoColor=white"/>


<br>

## 1️⃣ 프로젝트 구조

<details>
    <summary>⚡️ 구조 자세히 살펴보기</summary> 
</details>

<br>

## 2️⃣ 프로젝트 개요
- 배운것을 최대한 활용할 수 있는 주제를 고르다가 쇼핑몰 웹 사이트를 구현하면 배운 기술들을 모두 활용할 수 있을 것 같아서 주제로 선정
- 얄라리얄라성

<br>

## 3️⃣ 기능 구분

#### 고객 페이지

#### 관리자 페이지

#### 공통 페이지

- 대충 이런식으로 진행될 것것것것


<br>

## 4️⃣ ERD & 테이블 명세서
#### 테이블 명세서 : https://docs.google.com/spreadsheets/d/1zpjjtAKGhq-PrGZjYdW3FrDrXBLRjHzK8iVUpqgpsR0/edit?usp=sharing

![image](https://github.com/shsh99/Furniture_Mall_Project/assets/134079624/993b9038-335d-465f-b4d3-aeaf0915e5b9)


<br>

## 5️⃣ SiteMap & WireFrame

<table>
<tr>
 <td> <b>고객</b></td>
 <td> <b>매니저</b></td>
 </tr>
<tr>
<td><img src="https://github.com/shsh99/Furniture_Mall_Project/assets/134079624/7fa1b7e8-92e9-4b48-a465-645e02d84e1c"
        ></td>
<td><img src="https://github.com/shsh99/Furniture_Mall_Project/assets/134079624/d8a42127-feed-4696-a252-ccb1661669b1"
></td>
</tr>
</table>
<br>

## 6️⃣ 주요 기능

<br>

## 7️⃣ 기능 - 고객

#### 회원가입
- 아이디 중복 확인
- 비밀번호 확인
- Validation(시스템 검증) 처리
- 주소 찾기 (DAUM 우편번호 찾기 API)

#### 로그인
- 카카오 소셜 로그인 (OAuth 2.0 프로토콜)
- 일반 로그인
- 아이디/비밀번호 찾기 (이메일 SMTP 프로토콜)

#### 고객 정보
- 고객 정보 조회
- 고객 정보 변경 (주소, 휴대폰 번호)
- 비밀번호 변경

#### 포인트 조회
- 포인트 전체 조회 (사용내역, 잔여 포인트)

#### 쿠폰 조회
- 쿠폰 전체 조회(사용 가능 쿠폰, 사용 내역, 사용한 쿠폰)

#### 상품 조회
- 검색창 상품 이름 조회
- 상품 상세조회

#### 찜 기능
- 상품 상세조회에서 마음에 드는 상품 찜 기능

#### 장바구니 기능
- 장바구니 조회 기능
- 찜 한 상품 장바구니 추가 기능
- 상품 장바구니 추가 기능
- 추가 상품 삭제 기능
- 장바구니 전체 결제, 체크 된 것만 결제 기능

#### 주문내역 조회

#### 상품 문의

#### 결제 
- 카카오 결제 api

<br>

## 8️⃣ 기능 - 관리자

#### 회원 관리
-

#### 상품 관리
- 상품 CRUD
- 상품 이미지 등록

#### 관리자 게시판
- 공지사항 게시판 crud
- 자주 묻는 질문 게시판 crud
- qna 게시판 (답글, 삭제)
- 상품 문의 (답글, 삭제)

#### 쿠폰 발급
- 쿠폰 CRUD
-
