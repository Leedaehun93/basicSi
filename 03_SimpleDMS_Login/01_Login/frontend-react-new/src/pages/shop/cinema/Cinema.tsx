/* C:\Work\07_Si\02_SimpleDMS_Page\frontend-react-new\src\pages\shop\cinema\Cinema.tsx */
// TODO: import
import React, { useEffect, useState } from "react";
import TitleCom from "../../../components/common/TitleCom";
import { useParams } from "react-router-dom";
import ICinemaDetail from "../../../types/shop/ICinemaDetail";
import CinemaService from "../../../services/shop/CinemaService";


function Cinema() {
  // todo: 변수 정의
  // 전체조회 페이지에서 전송한 기본키(movieCd)
  const { movieCd } = useParams();

  // 객체 초기화(상세조회 : 기본키 있음)
  const initialCinema = {
    movieCd: "", // 영화코드
    movieNm: "", // 영화명
    prdtYear: "", // 제작년도
    showTm: "", // 상영시간
    openDt: "", // 개봉연도
    actors: [], // 배우들 배열
    directors: [], // 감독들 배열
    prdtStatNm: "", // 제작상태명
  };

  // cinemaDetail 객체
  const [cinemaDetail, setCinemaDetail] =
    useState<ICinemaDetail>(initialCinema);

  // todo: 함수 정의
  // 상세조회 함수
  const getCinema = (movieCd: string) => {
    CinemaService.get(movieCd) // 벡엔드로 상세조회 요청
      .then((response: any) => {
        // todo: 영화 상세정보 받기
        const { movieInfo } = response.data.movieInfoResult;
        setCinemaDetail(movieInfo);
        console.log(response.data.movieInfoResult);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 화면이 뜰때 실행되는 이벤트 + movieCd 값이 바뀌면 실행
  useEffect(() => {
    if (movieCd) getCinema(movieCd);
  }, [movieCd]);

  return (
    // 여기
    <>
      {/* 제목 start */}
      <TitleCom title="Cinema Detail" />
      {/* 제목 end */}

      <>
        {cinemaDetail ? (
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4 p-2">
                <img
                  src="http://placehold.it/800x1000"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <span className="badge text-bg-primary">
                    {cinemaDetail.movieCd}
                  </span>
                  <h2 className="card-title mt-3">{cinemaDetail.movieNm}</h2>
                  <p className="card-text mt-5">
                    제작년도 : {cinemaDetail.prdtYear} 년
                  </p>
                  <p className="card-text">
                    상영시간 : {cinemaDetail.showTm} 분
                  </p>
                  <p className="card-text">개봉일 : {cinemaDetail.openDt}</p>
                  <p className="card-text">상태 : {cinemaDetail.prdtStatNm}</p>
                  {/* <span className="badge text-bg-primary">{cinemaDetail.kindCode}</span> */}
                  <div className="card-text">
                    <div className="row g-3 align-items-center mb-3">
                      <div className="col-3">
                        <label htmlFor="directors" className="col-form-label">
                          directors
                        </label>
                      </div>
                      {cinemaDetail.directors &&
                        cinemaDetail.directors.map((data, index) => (
                          <div
                            className="col-3 bg-warning bg-gradient me-2"
                            key={index}
                          >
                            <label htmlFor="actors" className="col-form-label">
                              {data.peopleNm}
                            </label>
                          </div>
                        ))}
                    </div>
                    <div className="row g-3 align-items-center mb-3">
                      <div className="col-3">
                        <label htmlFor="actors" className="col-form-label">
                          actors
                        </label>
                      </div>
                      {cinemaDetail.actors &&
                        cinemaDetail.actors.map((data, index) => (
                          <div
                            className="col-3 bg-secondary bg-gradient text-white me-2"
                            key={index}
                          >
                            <label htmlFor="actors" className="col-form-label">
                              {data.peopleNm}
                            </label>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="col-6 mx-auto">
            <br />
            <p>Please click on a Cinema...</p>
          </div>
        )}
      </>
    </>
  );
}

export default Cinema;
