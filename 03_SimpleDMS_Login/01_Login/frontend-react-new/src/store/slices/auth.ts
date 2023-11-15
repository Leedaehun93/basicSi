/* C:\Work\07_Si\03_SimpleDMS_Login\01_Login\frontend-react-new\src\store\slices\auth.ts */
// TODO: import
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import IUser from "../../types/auth/IUser";
import authService from "../../services/auth/authService";
import IAuth from "../../types/auth/IAuth";

// 로컬스토리지에서 user 라는 키이름으로 값 가져오기 : 결과 (문자열) -> 객체로 변환
// user : 웹토큰 있음
// 사용법 : JSON.parse(문자열객체) => 문자열객체 -> 실제객체로 변환
const user = JSON.parse(localStorage.getItem("user") || "null");
// TODO: ------------------- 공유함수 정의 ---------------------
// TODO: 회원가입 공유함수 (비동기함수) :
//  TODO :코드 해석:
//  createAsyncThunk(함수명, 화살표함수(변수, thunkAPI)=>{실행문}) - 리덕스 비동기 함수 적용
//  thunkAPI 역할 : 에러메세지 처리 -> thunkAPI.rejectWithValue(에러메세지)
//  async () => { await 함수명 };

// 비동기함수 처리방법(2가지)
// 1) 비동기함수 처리 : promise -> 함수실행.then().catch() TODO: 채택
// 2) 비동기함수 처리 : async () => { await 함수실행 }
export const register = createAsyncThunk(
  "auth/register",
  async (user: IUser, thunkAPI) => {
    try {
      const response = await authService.register(user); // 회원가입함수 실행
      return response.data; // 백엔드 결과값
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue("register 시 에러가 발생하였습니다.");
    }
  }
);

// TODO : 로그인 공유함수(비동기함수)
export const login = createAsyncThunk(
  "auth/login", // 함수명
  async (user: IUser, thunkAPI) => {
    // 비동기함수
    try {
      const data = await authService.login(user); // 백엔드 login 요청
      return { user: data }; // 백엔드 결과
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue("login 시 에러가 발생했습니다.");
    }
  }
);

// TODO : 로그아웃 공유함수(비동기함수)
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout(); // 로그아웃 함수 실행(리턴값 없음)
});

// TODO: ------------------- 공유변수 정의 ---------------------
// TODO : 공유변수 초기값 정의 : { isLoggedIn: true/false, user: user/null }
// TODO : user <= 로컬스토리지의 값
// user 가 있으면(로그인했으면) initialState = { isLoggedIn: true, user: user }
// user 가 없으면(로그아웃했으면) initialState = { isLoggedIn: false, user: null }
const initialState: IAuth = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

/* TODO: 현재 계정의 접속 상태 관리 코드 */ 
// todo: 실제 공유저장소 (리듀서 정의) : 공유변수의 값을 정의
const authSlice = createSlice({
    name: "auth",                  // 리듀서 이름 : auth
    initialState,                  // 위에서 3항연산자로 정의한 초기객체
    reducers: {},                  // 동기함수 정의할때 사용하는 속성
    // todo : 사용법 builder.addCase(비동기함수명.fulfilled, 화살표함수) : 비동기함수 성공시  화살표함수 실행됨
    // todo : 사용법 builder.addCase(비동기함수명.rejected, 화살표함수)  : 비동기함수 실패시  화살표함수 실행됨
    extraReducers: (builder) => {  // 비동기함수 정의시 사용 : register, login, logout 은 모두 비동기 함수임 
      builder
      // register(회원가입) 성공 -> isLoggedIn = false 저장
        .addCase(register.fulfilled, (state) => {
          state.isLoggedIn = false;
        })
      // register(회원가입) 실패 -> isLoggedIn = false 저장
        .addCase(register.rejected, (state) => {
          state.isLoggedIn = false;
        })
      // login(로그인) 성공 -> (state.)isLoggedIn = true 저장
      // login(로그인) 성공 -> (state.)user = (action.payload.)user 객체 저장
        .addCase(login.fulfilled, (state, action) => {
          state.isLoggedIn = true;
          state.user = action.payload.user;
        })
      // login(로그인) 실패 -> (state.)isLoggedIn = false 저장
      // login(로그인) 실패 -> (state.)user = null 저장
        .addCase(login.rejected, (state, action) => {
          state.isLoggedIn = false;
          state.user = null;
        })
      // logout(로그인) 성공 -> (state.)isLoggedIn = false 저장
      // logout(로그인) 성공 -> (state.)user = null 저장
        .addCase(logout.fulfilled, (state) => {
          state.isLoggedIn = false;
          state.user = null;
        });
    },
  });
  
  export default authSlice.reducer;
