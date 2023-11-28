// IAuth 인터페이스

import IUser from "./IUser";

// 유저 상태정보 : 로그인여부
export default interface IAuth {
  
  isLoggedIn: boolean; // 로그인 상태정보 boolean(true면 로그인 상태, false면 로그아웃 상태)
  
  user?: IUser | null; // 유저객체 속성에 대한 값의 존재 여부 확인
}
