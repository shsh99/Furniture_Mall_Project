// IUser 인터페이스

export default interface IUser {
    email?: any | null,
    password: string,
    username: string,
    codeName: string      // TODO: 권한코드명(roleUser, roleAdmin)
}

/* TODO: TB_USER */
// email       varchar2(1000) not null constraint pk_user primary key, -- id (email)
// password    varchar2(1000),                                         -- 암호
// username    varchar2(1000),                                         -- 유저명
// code_name   varchar2(1000),                                         -- 권한코드명(role_user, role_admin)

// delete_yn   varchar2(1) default 'n',
// insert_time varchar2(255),
// update_time varchar2(255),
// delete_time varchar2(255)

// CREATE TABLE TB_SHOP_CUSTOMERS
// (
//     CUST_EMAIL       VARCHAR2(100) NOT NULL,                 -- 이메일 / ID
//     CUST_NAME        VARCHAR2(50) NOT NULL,                  -- 이름
//     CUST_PASSWORD    VARCHAR2(255) NOT NULL,                 -- 패스워드
//     CUST_PHONE       VARCHAR2(20) NOT NULL,                  -- 연락처
//     CUST_GENDER      VARCHAR2(1) DEFAULT 'F',                -- 성별
//     CUST_BIRTHDAY    VARCHAR2(50) NOT NULL,                  -- 생일
//     CUST_ADDRESS     VARCHAR2(255),                          -- 주소
//     CUST_POINT       NUMBER(20,0) DEFAULT 0,                 -- 포인트

//     CUST_ENABLE      VARCHAR2(1) DEFAULT 'Y',                -- TODO: 규보씨
//     CREATE_DATE VARCHAR2(1000),                              -- 수정일자
//     UPDATE_DATE VARCHAR2(1000),                              -- 삭제여부
//     DELETE_YN   VARCHAR2(1) DEFAULT 'N',                     -- 삭제여부
//     CONSTRAINT PK_SHOP_CUSTOMERS PRIMARY KEY (CUST_EMAIL)    -- TODO: PK CUST_EMAIL
// );


// CREATE TABLE TB_SHOP_CUSTOMERS
// (
//     CUST_EMAIL       VARCHAR2(100) NOT NULL,
//     CUST_NAME        VARCHAR2(50) NOT NULL,
//     CUST_PASSWORD    VARCHAR2(255) NOT NULL,
//     CUST_PHONE       VARCHAR2(20) NOT NULL,
//     CUST_GENDER      VARCHAR2(1) DEFAULT 'F',
//     CUST_BIRTHDAY    VARCHAR2(50) NOT NULL,
//     CUST_ADDRESS     VARCHAR2(255),
//     CUST_POINT       NUMBER(20,0) DEFAULT 0,
//     CODE_ID          NUMBER(20),
//     CREATE_DATE VARCHAR2(1000),
//     UPDATE_DATE VARCHAR2(1000),
//     DELETE_YN   VARCHAR2(1) DEFAULT 'N',
//     CONSTRAINT PK_SHOP_CUSTOMERS PRIMARY KEY (CUST_EMAIL),
//     CONSTRAINT FK_CODE_ID FOREIGN KEY (CODE_ID) REFERENCES TB_CODE (CODE_ID)
// );