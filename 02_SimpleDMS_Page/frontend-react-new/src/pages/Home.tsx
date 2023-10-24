import React, { useEffect } from "react";
import TitleCom from "../components/common/TitleCom";
import initWow from "../assets/js/mywow";

function Home() {
  useEffect(() => {
    initWow();
  });
  return (
    <>
      {/* 제목 start */}
      <TitleCom title="Home" />
      {/* 제목 end */}

      <div id="content-wrapper">
        <p className="fs-3 wow bounceIn">
          안녕하세요 심플 코딩 강태경입니다. <br />
          클론코딩 예제 사이트에 오신것을 환영합니다. <br />
        </p>
        {/* <!-- 로고 아이콘 저작권 표시 --> */}
        <a href="https://www.flation.com/kr/free-icons/" title="건반 아이콘">
          건반 아이콘 제작자: Chanut-is-Industries - Flaticon
        </a>
      </div>
    </>
  );
}

export default Home;
