/* C:\Work\07_Si\03_SimpleDMS_Login\01_Login\frontend-react-new\src\services\auth\authHeader.ts */
// authHeader.ts : 웹토큰이 있는 http 헤더(공통)

export default function authHeader() {
  // TODO : 웹토큰 가져오기 : 로컬스토리지
  // 1) 웹토큰이 로컬스토리지에 있는가?
  if (localStorage.getItem("user")) {
    // 2) 로컬스토리지에서(문자열) 웹토큰 가져오기(객체 변환)
        // TODO : 코드 해석
        // 문자열 또는 null을 반환하므로, JSON.parse를 사용하여
        // 문자열을 객체로 변환합니다.
        // 만약 데이터가 null이라면 "" (빈 문자열)을 기본값으로 사용합니다.
    const user = JSON.parse(localStorage.getItem("user") || "");

    // 3) user 객체가 있고 동시에 user.accessToken(웹토큰) 있으면
    if (user && user.accessToken) {
      // TODO : springboot 에서는 웹토큰 받을 때 아래 처럼 보내야 받아짐
      return { Authorization: "Bearer " + user.accessToken };
    } else {
      return {};
    }
  }
}
