/* C:\Work\07_Si\02_SimpleDMS_Page\frontend-react-new\src\services\shop\ThemaLoadService.ts */
// 공공 데이터 포털 API 함수

import axios from "axios";
import IThemaLoad from "../../types/shop/IThemaLoad";


// 공공 데이터 포털 : 부산 테마거리 음식점 기본 주소
let baseUrl = "https://api.odcloud.kr/api";

// TODO: 내가 받은 발급 받은 api key 인증키 변수
let apiKey =
  "%2BbE7JWl3vRUvDQUxCpwGfeCDFlzXFXoJCeyQj%2BR5AubWAs4OcHQ8GY3CMHmxHOYbLCXRyh74pOg0IebtznR7nw%3D%3D";

// TODO: 함수
// 전체 조회
// page : 현재 페이지 번호,
// perPage : 1페이지당 개수,
const getAll = (page: number, perPage:number) => {
  // url 조합 : 기본주소 + 추가주소 + 변수명(쿼리스트링)
  let url = `${baseUrl}/15096718/v1/uddi:0a31f303-432c-4993-97d2-81537862521b?page=${page}&perPage=${perPage}&serviceKey=${apiKey}`;
  console.log(url);

  return axios.get<Array<IThemaLoad>>(url);
};

const ThemaLoadService = {
    getAll,
};
export default ThemaLoadService;
