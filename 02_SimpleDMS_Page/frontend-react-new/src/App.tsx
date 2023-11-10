/* C:\Work\07_Si\02_SimpleDMS_Page\frontend-react-new\src\App.tsx */
// TODO: import
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
import AddFaq from "./pages/normal/faq/AddFaq";
import AddCinemaFaq from "./pages/normal/cinema/AddCinemaFaq";
import Faq from "./pages/normal/faq/Faq";
import CinemaFaqList from "./pages/normal/cinema/CinemaFaqList";
import CinemaFaq from "./pages/normal/cinema/CinemaFaq";
import ReplyBoardList from "./pages/normal/reply-board/ReplyBoardList";
import ThreadBoardList from "./pages/normal/thread-board/ThreadBoardList";
import AddReplyBoard from "./pages/normal/reply-board/AddReplyBoard";
import AddThreadBoard from "./pages/normal/thread-board/AddThreadBoard";
import ReplyBoard from "./pages/normal/reply-board/ReplyBoard";
import ThreadBoard from "./pages/normal/thread-board/ThreadBoard";
import CodeCategoryList from "./pages/admin/CodeCategoryList";
import AddCodeCategory from "./pages/admin/AddCodeCategory";
import AddCode from "./pages/admin/AddCode";
import CodeList from "./pages/admin/CodeList";
import Code from "./pages/admin/Code";
import SimpleProduct from "./pages/shop/simple-product/SimpleProduct";
import ProductList from "./pages/shop/product/ProductList";
import AddSimpleProduct from "./pages/shop/simple-product/AddSimpleProduct";
import AddProduct from "./pages/shop/product/AddProduct";
import Product from "./pages/shop/product/Product";
import SimpleCart from "./pages/shop/simple-product/SimpleCart";
import SimpleCartList from "./pages/shop/simple-product/SimpleCartList";
import CinemaList from "./pages/shop/cinema/CinemaList";
import Cinema from "./pages/shop/cinema/Cinema";
import ThemaLoadList from "./pages/shop/thema-load/ThemaLoadList";
import FileDbList from "./pages/advanced/FileDbList";


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

          {/* TODO : dept */}
          <Route path="/dept" element={<DeptList />} />
          <Route path="/add-dept" element={<AddDept />} />
          <Route path="/dept/:dno" element={<Dept />} />

          {/* TODO : emp */}
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

          {/* TODO : qna */}
          <Route path="/qna" element={<QnaList />} />
          <Route path="/Add-qna" element={<AddQna />} />
          <Route path="/qna/:qno" element={<Qna />} />

          {/* TODO : customer */}
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

          {/* TODO : faq */}
          <Route path="/faq" element={<FaqList />} />
          <Route path="/Add-faq" element={<AddFaq />} />
          <Route path="/faq/:no" element={<Faq />} />

          {/* TODO : cinemafaq */}
          {/* 연습5) cinema faq 전체조회 기능을 구현하세요.
              (단, 화면에 아코디언으로 보여주세요)
              프론트 - ICinemaFaq.ts (타입 : schema.sql )
                      CinemaFaqService.ts (axios 공통 crud 함수)
                      CinemaFaqList.tsx (전체조회)
                      App.tsx (메뉴 달기 : /cinema-faq)
              벡엔드 - 모델 엔티티 : CinemaFaq
                      CinemaFaqRepository
                      CinemaFaqService
                      CinemaFaqController
           */}
          <Route path="/cinema-faq" element={<CinemaFaqList />} />

          {/* 연습 6) cinemaFaq 추가 기능을 작성하세요
                프론트 - App.tsx : url - /add-cinema-faq
                        AddCinemaFaq.tsx (추가페이지)
                벡엔드 - CinemaService (저장함수)
                        CinemaController (저장함수)
           */}
          <Route path="/Add-Cinema-faq" element={<AddCinemaFaq />} />

          {/* 연습 1) cinema faq 에 상세조회 기능을 추가하세요
              프론트/벡엔드 모두 작성하세요(수정/삭제/상세조회 기능)
           */}
          <Route path="/cinema-faq/:cfno" element={<CinemaFaq />} />

          {/* TODO : reply-board */}
          <Route path="/reply-board" element={<ReplyBoardList />} />
          <Route path="/Add-reply-board" element={<AddReplyBoard />} />

          {/* TODO : <Route path="/reply-board/bid/:bid/boardParent/:boardParent" element={<Cinemafaq />} /> 정리 */}
          {/* 정리: boardParent = 0 이면 부모글을 클릭 */}
          {/* 정리: boardParent = 0 아니면 자식글을 클릭 */}
          <Route
            path="/reply-board/bid/:bid/boardParent/:boardParent"
            element={<ReplyBoard />}
          />

          {/* TODO : thread-board */}
          {/* 연습 1) url : /thread-board 쓰레드보드(답변형게시판)
              프론트: ThreadBoardList (전체조회 페이지)
              계층형 기능을 추가하세요 (프론트 / 벡엔드)
           */}
          <Route path="/thread-board" element={<ThreadBoardList />} />

          {/* 연습 1) threadBoardList 전체조회 페이지에  
              답변글 추가 기능을 추가하세요
          */}

          {/* 연습 2) url : add-thread-board  추가페이지 작성하세요 
            프론트/벡엔드 모두 작성
        */}
          <Route path="/Add-thread-board" element={<AddThreadBoard />} />

          <Route
            path="/thread-board/tid/:tid/tparent/:tparent"
            element={<ThreadBoard />}
          />
          {/* TODO : codeCategory(대분류 공통코드(부모)) */}
          <Route path="/code-category" element={<CodeCategoryList />} />
          <Route path="/add-code-category" element={<AddCodeCategory />} />

          {/* TODO : code(소분류 공통코드(자식)) */}
          <Route path="/code" element={<CodeList />} />
          <Route path="/add-code" element={<AddCode />} />
          <Route path="/code/:codeId" element={<Code />} />

          {/* TODO : (shop)simple-product */}
          <Route path="/simple-product" element={<SimpleProduct />} />
          <Route path="/add-simple-product" element={<AddSimpleProduct />} />

          {/* TODO : (연습)product */}
          <Route path="/product" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product/:pno" element={<Product />} />

          {/* TODO: 장바구니 상세조회 */}
          <Route path="/simple-cart/:spno" element={<SimpleCart />} />
          {/* TODO: 장바구니 전체조회 */}
          <Route path="/simple-cart" element={<SimpleCartList />} />

          {/* TODO: cinema */}
          {/* 박스오피스 순위 전체조회 */}
          <Route path="/cinema" element={<CinemaList />} />
          {/* TODO: 영화 상세조회 */}
          <Route path="/cinema/:movieCd" element={<Cinema />} />

          {/* TODO: 부산 테마길( busan thema load ) */}
          <Route path="/thema-load" element={<ThemaLoadList />} />
          
          {/* TODO: 파일 업로드 */}
          <Route path="/fileDb" element={<FileDbList />} />

          {/* NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* 라우터 정의 끝 */}
      </div>
    </div>
  );
}

export default App;
