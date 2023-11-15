/*!
 * My DropDown Menu v1.0
 * Copyright 2023 , Kang Tae Gyung
 * Licensed under MIT
 */
// 화면에서 메뉴 보기 함수
// sidebar-wrapper : 내가 디자인한 드룹다운 메뉴(데스크탑 화면에서 사용)
// dropdown-menu   : 부트스트랩 드롭다운 메뉴(모바일 화면에서 사용)
// 1) 부트스트랩 축소메뉴 사용 - visibility: visible 고정, display : block|none 사용, dropdown-menu 추가, sidebar-wrapper 제거
// 2) 내가 디자인한 메뉴 사용 - visibility: visible|hidden 속성 사용,  display : "" 고정, dropdown-menu 제거, sidebar-wrapper 추가

/* eslint-disable */
export default function initMain() {
  function showMenu(
    element,
    isVisible,
    isDisplay,
    addClassName,
    removeClassName
  ) {
    //   sidebar-nav == menu.children[1].children[0]
    element.children[1].children[0].style.visibility = isVisible;
    element.children[1].children[0].style.display = isDisplay;
    element.children[1].children[0].classList.add(addClassName);
    element.children[1].children[0].classList.remove(removeClassName);
  }

  // 메뉴(nav) 배경색 변경 함수
  function bgColorReplace(before, after) {
    const navWrapper = document.querySelector(".nav-wrapper");
    // 마우스가 메뉴에 올라오면 nav 바탕색을 하얀색으로 변경
    if (navWrapper.classList.contains(before)) {
      navWrapper.classList.replace(before, after);
    }
  }

  // 1) 드롭다운 메뉴 : 해상도에 따라 변경됨
  // 유사 배열을 배열로 변경 : map 함수 사용을 위해 변경함
  const menuToggle = [].slice.call(
    document.body.querySelectorAll(".menu-toggle")
  );

  // 반복적으로 이벤트 함수 추가
  menuToggle.map((menu) => {
    menu.addEventListener("mouseover", (event) => {
      event.preventDefault();
      // 브라우저 크기 구하기
      const innerWidth = window.innerWidth;

      // 마우스가 메뉴에 올라오면 nav 바탕색을 하얀색으로 변경 함수 호출
      bgColorReplace("bg-light", "bg-white");

      // pc 화면에서는 myMenu 사용하고
      // bootstrap 은 992이상은 pc 화면을 의미하고, 이하는 테블릿, 핸드폰 등을 의미
      // 992 이하부터 단축 메뉴 버튼이 나옴
      if (innerWidth >= 992) {
        // sidebar-wrapper == menu.children[1]
        // 드롭다운 메뉴 배경 추가(회색)
        menu.children[1].classList.add("active");
        menu.children[1].classList.add("sidebar-wrapper");

        //   sidebar-nav == menu.children[1].children[0]
        // 마우스가 메뉴 위로 올라가면 내가 디자인한 드롭다운 메뉴 화면에 표시
        showMenu(menu, "visible", "", "sidebar-nav", "dropdown-menu");
      } else {
        // sidebar-wrapper == menu.children[1]
        menu.children[1].classList.remove("sidebar-wrapper");

        //   sidebar-nav == menu.children[1].children[0]
        // 모바일 화면에서는 부트스트랩 드롭다운 메뉴룰 사용함
        // 마우스가 메뉴 위로 올라가면 부트스트랩 드롭다운 메뉴 화면에 표시
        showMenu(menu, "visible", "block", "dropdown-menu", "sidebar-nav");
      }
    });

    // sidebar-wrapper == menu.children[1]
    menu.addEventListener("mouseout", (event) => {
      event.preventDefault();
      // 브라우저 크기 구하기
      const innerWidth = window.innerWidth;

      // 마우스가 메뉴에 올라오면 nav 바탕색을 라이트로 변경 함수 호출
      bgColorReplace("bg-white", "bg-light");

      // pc 화면에서는 myMenu 사용하고
      if (innerWidth >= 992) {
        // sidebar-wrapper == menu.children[1]
        // 드롭다운 메뉴 배경 없애기(회색)
        menu.children[1].classList.remove("active");
        menu.children[1].classList.add("sidebar-wrapper");

        // 마우스가 메뉴에서 나가면 내가 디자인한 드롭다운 메뉴 화면에서 감춤
        showMenu(menu, "hidden", "", "sidebar-nav", "dropdown-menu");
      } else {
        // sidebar-wrapper == menu.children[1]
        // 내가 디자인한 드롭다운 메뉴 없애기
        menu.children[1].classList.remove("sidebar-wrapper");

        // 모바일 화면에서는 부트스트랩 드롭다운 메뉴룰 사용함
        // 마우스가 메뉴에서 나가면 부트스트랩 드롭다운 메뉴 화면에서 감춤
        showMenu(menu, "visible", "none", "dropdown-menu", "sidebar-nav");
      }
    });
  });
}
