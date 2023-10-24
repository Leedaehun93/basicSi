import React from "react";
// app css import
import "./assets/css/app.css";

import HeaderCom from "./components/common/HeaderCom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import NotFound from "./pages/common/NotFound";
import DeptList from "./pages/basic/dept/DeptList";
import EmpList from "./pages/basic/emp/EmpList";
import AddDept from "./pages/basic/dept/AddDept";
import AddEmp from "./pages/basic/emp/AddEmp";
import Dept from "./pages/basic/dept/Dept";
import Emp from "./pages/basic/emp/Emp";
import QnaList from "./pages/basic/qna/QnaList";
import CustomerList from "./pages/basic/customer/CustomerList";
import AddQna from "./pages/basic/qna/AddQna";
import AddCustomer from "./pages/basic/customer/AddCustomer";
import Qna from "./pages/basic/qna/Qna";
import Customer from "./pages/basic/customer/Customer";
import FaqList from "./pages/normal/faq/FaqList";

function App() {
  return (
    <div className="App">
      <HeaderCom />
      {/* <!-- 구분 막대 시작 --> */}
      <div className="gutter text-center text-muted fade-in-box">
        <div>클론 코딩 예제 사이트에 오신 것을 환영합니다.</div>
      </div>
      {/* <!-- 구분 막대 끝 --> */}
      <div id="content-wrapper">
        {/* 라우터 정의 시작 */}
        <Routes>
          {/* login */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* TODO: dept */}
          <Route path="/dept" element={<DeptList />} />
          <Route path="/add-dept" element={<AddDept />} />
          <Route path="/dept/:dno" element={<Dept />} />

          {/* TODO: emp */}
          {/* todo: emp 에 전체조회 + 페이징 기능 추가하세요
              프론트 : EmpList.tsx (전체조회페이지), App.tsx (메뉴 추가 : /emp)
              벡엔드 : EmpRepository.java, EmpService, EmpController
          */}
          <Route path="/emp" element={<EmpList />} />

          {/* 연습2) 사원에 추가페이지 메뉴를 다세요
            AddEmp.tsx(추가페이지)
                url - /add-emp
                벡엔드 - EmpService (저장함수)
                        EmpController (저장함수)
         */}
          <Route path="/add-emp" element={<AddEmp />} />

          {/* 연습 3) 사원에 상세조회/수정/삭제 기능 추가하기
            Emp.tsx(상세조회)
            App.tsx (라우터 url : /emp/:eno )
            벡엔드 : (EmpService, EmpController)
         */}
          <Route path="/emp/:eno" element={<Emp />} />

          {/* TODO: qna */}
          <Route path="/qna" element={<QnaList />} />
          <Route path="/Add-qna" element={<AddQna />} />
          <Route path="/qna/:qno" element={<Qna />} />

          {/* TODO: customer */}
          {/* 연습 4) customer 전체조회 페이지를 만들고,
          다양한 검색 기능을 추가하세요 (참고 : qna)
            ( fullName(이름), email(이메일)  : select 태그 넣기)
            프론트 : CustomerList.tsx (전체 조회 페이지)
                    ICustomer.ts (타입, schema.sql )
                    CustomerService.ts (axios CRUD 함수)\
                    App.tsx (url : /customer )
            벡엔드 : Customer.java (엔티티)
                    CustomerRepository(fullName/email like 검색)
                    CustomerSerive  (fullName/email like 검색)
                    CustomerController(fullName/email like 검색)
           */}
          <Route path="/customer" element={<CustomerList />} />

          {/* 연습 5) url : add-customer  
              추가페이지 만들기(AddCustomer.tsx)
              1) 일단 프론트만 만들기
              2) 벡엔드도 만들기(저장함수)
           */}
          <Route path="/Add-customer" element={<AddCustomer />} />

          {/* 연습 6) customer 에 상세조회/수정/삭제 기능을 추가하세요
              프론트 : url - /customer/:cid (상세조회)
                      Customer.tsx(상세조회 페이지)
              벡엔드 : CustomerService(수정/상세조회/삭제 함수)
                      CustomerController(수정/상세조회/삭제 함수)
           */}
           <Route path="/customer/:cid" element={<Customer />} />

           {/* faq */}
           <Route path="/faq" element={<FaqList />} />

          {/* NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* 라우터 정의 끝 */}
      </div>
    </div>
  );
}

export default App;
