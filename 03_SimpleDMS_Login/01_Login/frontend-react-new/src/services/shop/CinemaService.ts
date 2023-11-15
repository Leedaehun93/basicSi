/* C:\Work\07_Si\02_SimpleDMS_Page\frontend-react-new\src\services\shop\CinemaService.ts */
// CinemaService.ts
// 영화진흥 위원회의 오픈 API 통신 함수들 정의
// 전체조회 또는 상세조회

import axios from "axios";
import ICinema from "../../types/shop/ICinema";

// 영화진흥 위원회 기본 주소
let baseUrl = "http://www.kobis.or.kr/kobisopenapi/webservice/rest";
// /boxoffice/searchDailyBoxOfficeList.json

// TODO: 내가 받은 발급 받은 api key 변수
let apiKey = "1c444db83359ba37a78cb67fab7c273f";

// 전체 조회
// 요청필드(조건)
// key : 위의 인증키 넣기(필수)
// targetDt : 조회하고자 하는 날짜를 yyyymmdd 형식(필수)
// repNationCd : “K: : 한국영화 “F” : 외국영화 ("" : 전체)
// itemPerPage : 결과 ROW 의 개수를 지정
// 변수 사용 : 쿼리스트링 방식 (?변수명=값&변수명2=값2...)
const getAll = (targetDt: string, repNationCd: string, itemPerPage: number) => {
  // 주소 조합 : 기본주소 + 추가주소 + 변수명
  let url = `${baseUrl}/boxoffice/searchDailyBoxOfficeList.json?key=${apiKey}&targetDt=${targetDt}&repNationCd=${repNationCd}&itemPerPage=${itemPerPage}`;
  console.log("url", url);

  return axios.get<Array<ICinema>>(url);
};

// 영화 상세조회(1건조회)
// ${baseUrl}/movie/searchMovieInfo.json
// 요청필드(조건) :
// key : 인증키(위에 있음) : 필수
// movieCd (영화코드)
const get = (movieCd: string) => {
  // 기본주소 + 추가주소 + 변수명(쿼리스트링)
  let url = `${baseUrl}/movie/searchMovieInfo.json?key=${apiKey}&movieCd=${movieCd}`;
  console.log("상세조회 url", url);

  return axios.get<ICinema>(url);
};

const CinemaService = {
  getAll,
  get,
};
export default CinemaService;
