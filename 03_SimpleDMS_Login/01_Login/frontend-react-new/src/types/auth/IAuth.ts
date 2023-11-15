/* C:\Work\07_Si\03_SimpleDMS_Login\01_Login\frontend-react-new\src\types\auth\IAuth .ts */
// IAuth 인터페이스

// TODO: import
import IUser from "./IUser";

// 유저 상태정보 : 로그인여부
export default interface IAuth {
  isLoggedIn: boolean; // 로그인상태(true/false)
  user?: IUser | null; // 유저객체
}
