// IUser : 인터페이스

export default interface IUser {
    email?: any | null,   	// 이메일(아이디)
    password: string,	  	// 패스워드
    username: string,		    // 이름
    gender: string,		    // 성별
    birthday: string,		// 생년월일
    phone: string,		    // 휴대전화번호
    address: string,		// 주소
    codeName: string        /*  유저권한 TODO: 권한코드명(roleUser, roleAdmin) */
}

/* TODO: TB_USER */
// CREATE TABLE TB_USER (
// EMAIL       VARCHAR2(1000) NOT NULL CONSTRAINT PK_USER PRIMARY KEY,          -- 이메일(아이디) TODO: 기본키
// PASSWORD    VARCHAR2(1000) NOT NULL,                                         -- 패스워드
// USERNAME    VARCHAR2(1000)NOT NULL,                                          -- 이름
// GENDER    VARCHAR2(255)NULL,                                                 -- 성별
// BIRTHDAY    VARCHAR2(255)NULL,                                               -- 생년월일
// PHONE    VARCHAR2(255)NULL,                                                  -- 휴대전화
// ADDRESS    VARCHAR2(1000)NULL,                                               -- 휴대전화
// CODE_NAME   VARCHAR2(255)NOT NULL,                                           -- 유저권한 TODO: 권한코드명(roleUser, roleAdmin)

// DELETE_YN   VARCHAR2(1) DEFAULT 'N',                                         -- 삭제여부
// CREATE_DATE VARCHAR2(1000),                                                  -- 생성일자
// UPDATE_DATE VARCHAR2(1000),                                                  -- 수정일자
// DELETE_TIME VARCHAR2(1000)                                                   -- 삭제일자

// );

