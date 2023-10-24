import React, { useEffect } from "react";
import initMain from "../../assets/js/scripts";

function HeaderCom() {
  useEffect(() => {
    initMain();
  });

  return (
    <div>
      {/* nav 메뉴 시작 */}
      <div className="nav-wrapper bg-light">
        <nav className="navbar navbar-expand-lg p-2">
          <div className="container-fluid">
            <a className="navbar-brand" href="*">
              <img
                src={require("../../assets/img/simple-coding2.png")}
                alt=""
                width="24"
                height="24"
              />
              &nbsp;&nbsp;Simple Coding
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* <!-- me-auto : 왼쪽 정렬(여백이 오른쪽에 자동으로 만들어짐) --> */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* home 시작 */}
                <li className="nav-item me-2">
                  <a className="nav-link active" href="/">
                    Home
                  </a>
                </li>
                {/* home 끝 */}

                {/* 기초메뉴 시작 */}
                <li className="nav-item menu-toggle dropdown me-2">
                  <a
                    className="sidebar-subject nav-link active"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    기초
                  </a>
                  <div className="sidebar-wrapper">
                    <ul className="sidebar-nav row">
                      {/* <!-- 메뉴:제목 --> */}
                      <li className="dropdown-item col-12 ms-5 mb-2 fw-bolder fs-5">
                        맛보기 예제
                      </li>
                      {/* <!-- 1행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a href="/dept" className="nav-link active ms-2">
                          Dept
                        </a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a href="/add-dept" className="nav-link active ms-2">
                          Add Dept
                        </a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 1행 끝--> */}

                      {/* <!-- 2행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a href="/emp" className="nav-link active ms-2">
                          Emp(연습)
                        </a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a href="/add-emp" className="nav-link active ms-2">
                          Add Emp(연습)
                        </a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 2행 끝--> */}

                      {/* <!-- 3행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a href="/qna" className="nav-link active ms-2">
                          Qna(다양한검색))
                        </a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a href="/add-qna" className="nav-link active ms-2">
                          AddQna(다양한검색)
                        </a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 3행 끝 --> */}

                      {/* <!-- 4행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a href="/customer" className="nav-link active ms-2">
                          Customer(연습)
                        </a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a
                          href="/add-customer"
                          className="nav-link active ms-2"
                        >
                          Customer(연습)
                        </a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 4행 끝 --> */}
                    </ul>
                  </div>
                </li>
                {/* 기초메뉴 끝 */}

                {/* 보통메뉴 시작 */}
                <li className="nav-item menu-toggle dropdown me-2">
                  <a
                    className="sidebar-subject nav-link active"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    보통
                  </a>
                  <div className="sidebar-wrapper">
                    <ul className="sidebar-nav row">
                      {/* <!-- 메뉴:제목 --> */}
                      <li className="dropdown-item col-12 ms-5 mb-2 fw-bolder fs-5">
                        다양한 메뉴
                      </li>
                      {/* <!-- 1행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a href="/faq" className="nav-link active ms-2">
                          Faq(아코디언)
                        </a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a href="/add-faq" className="nav-link active ms-2">
                          Add Faq
                        </a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 1행 끝--> */}

                      {/* <!-- 2행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a href="/cinema-faq" className="nav-link active ms-2">
                          Cinema faq(연습)
                        </a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a
                          href="/add-cinema-faq"
                          className="nav-link active ms-2"
                        >
                          Add Cinema(연습)
                        </a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 2행 끝--> */}

                      {/* <!-- 3행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a href="reply-board" className="nav-link active ms-2">
                          Reply List
                        </a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a
                          href="add-reply-board"
                          className="nav-link active ms-2"
                        >
                          Add Reply
                        </a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 3행 끝 --> */}

                      {/* <!-- 4행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a
                          href="/thread-board"
                          className="nav-link active ms-2"
                        >
                          Thread List(연습)
                        </a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a
                          href="/add-thread-board"
                          className="nav-link active ms-2"
                        >
                          Add Thread(연습)
                        </a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 4행 끝 --> */}
                    </ul>
                  </div>
                </li>
                {/* 보통메뉴 끝 */}

                {/* 쇼핑몰 시작 */}
                <li className="nav-item menu-toggle dropdown me-2">
                  <a
                    className="sidebar-subject nav-link active"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    쇼핑몰
                  </a>
                  <div className="sidebar-wrapper">
                    <ul className="sidebar-nav row">
                      {/* <!-- 메뉴:제목 --> */}
                      <li className="dropdown-item col-12 ms-5 mb-2 fw-bolder fs-5">
                        쇼핑몰 핵심 메뉴
                      </li>
                      {/* <!-- 1행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a
                          href="/simple-product"
                          className="nav-link active ms-2"
                        >
                          Sim. Prod. List
                        </a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a
                          href="/add-simple-product"
                          className="nav-link active ms-2"
                        >
                          Add Sim. Prod.(adm)
                        </a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 1행 끝--> */}

                      {/* <!-- 2행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a href="/product" className="nav-link active ms-2">
                          Product List(연습)
                        </a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a href="/add-product" className="nav-link active ms-2">
                          Add Product(연습)
                        </a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 2행 끝--> */}

                      {/* <!-- 3행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a href="/cinema" className="nav-link active ms-2">
                          Daily Cinema(공공)
                        </a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a
                          href="/weekend-box-office"
                          className="nav-link active ms-2"
                        >
                          Week. Cinema(연습)
                        </a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 3행 끝 --> */}

                      {/* <!-- 4행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a href="/thema-load" className="nav-link active ms-2">
                          Thema Load(공공)
                        </a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a href="/thema-basic" className="nav-link active ms-2">
                          Thema Basic(연습)
                        </a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 4행 끝 --> */}
                    </ul>
                  </div>
                </li>
                {/* 쇼핑몰 끝 */}

                {/* 고급메뉴 시작 */}
                <li className="nav-item menu-toggle dropdown me-2">
                  <a
                    className="sidebar-subject nav-link active"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    고급
                  </a>
                  <div className="sidebar-wrapper">
                    <ul className="sidebar-nav row">
                      {/* <!-- 메뉴:제목 --> */}
                      <li className="dropdown-item col-12 ms-5 mb-2 fw-bolder fs-5">
                        파일 업로드 메뉴
                      </li>
                      {/* <!-- 1행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a
                          href="/fileDb"
                          className="nav-link active ms-2"
                        >
                          File Upload List
                        </a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a
                          href="/add-fileDb"
                          className="nav-link active ms-2"
                        >
                          Add File Upload(admin)
                        </a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 1행 끝--> */}

                      {/* <!-- 2행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a href="/gallery" className="nav-link active ms-2">
                          Gallery List(연습)
                        </a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a href="/add-gallery" className="nav-link active ms-2">
                          Add Gallery(연습)
                        </a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 2행 끝--> */}

                      {/* <!-- 3행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a href="#" className="nav-link active ms-2">
                        </a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a
                          href="#"
                          className="nav-link active ms-2"
                        >
                        </a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 3행 끝 --> */}

                      {/* <!-- 4행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a href="#" className="nav-link active ms-2">
                        </a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a href="#" className="nav-link active ms-2">
                        </a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 4행 끝 --> */}
                    </ul>
                  </div>
                </li>
                {/* 고급메뉴 끝 */}
              </ul>
              <ul className="navbar-nav">
                {/* 어드민 시작 */}
                <li className="nav-item menu-toggle dropdown me-2">
                  <a
                    className="sidebar-subject nav-link active"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    어드민 예제
                  </a>
                  <div className="sidebar-wrapper">
                    <ul className="sidebar-nav row">
                      {/* <!-- 메뉴:제목 --> */}
                      <li className="dropdown-item col-12 ms-5 mb-2 fw-bolder fs-5">
                        코드 / 관리자 메뉴
                      </li>
                      {/* <!-- 1행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a
                          href="/code-category"
                          className="nav-link active ms-2"
                        >
                          Code Category List
                        </a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a
                          href="/add-code-category"
                          className="nav-link active ms-2"
                        >
                          Add Code Category
                        </a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 1행 끝--> */}

                      {/* <!-- 2행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a href="/code" className="nav-link active ms-2">
                          Code
                        </a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a href="/add-code" className="nav-link active ms-2">
                          Add Code
                        </a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 2행 끝--> */}

                      {/* <!-- 3행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a href="#" className="nav-link active ms-2"></a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a href="#" className="nav-link active ms-2"></a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 3행 끝 --> */}

                      {/* <!-- 4행 시작--> */}
                      <li className="sidebar-nav-item col-3">
                        <a href="#" className="nav-link active ms-2"></a>
                      </li>
                      <li className="sidebar-nav-item col-3">
                        <a href="#" className="nav-link active ms-2"></a>
                      </li>
                      {/* <!-- 줄바꿈 : w-100 --> */}
                      <li className="sidebar-nav-item w-100"></li>
                      {/* <!-- 4행 끝 --> */}
                    </ul>
                  </div>
                </li>
                {/* 어드민 끝 */}

                {/* 로그인 시작 */}
                <li className="nav-item">
                  <a className="nav-link active" href="/register">
                    회원가입
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/login">
                    로그인
                  </a>
                </li>
                {/* 로그인 끝 */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* nav 메뉴 끝 */}
    </div>
  );
}

export default HeaderCom;
