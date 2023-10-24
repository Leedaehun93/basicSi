# 설치 패키지 
# 1) 메뉴 라이브러리 설치
npm i react-router-dom

# 2) 벡엔드 연동 라이브러리 설치
npm i axios

# 3) pre css 컴파일러 : node-sass -> 더이상 안씀 : sass 설치할것
<!-- npm i node-sass -->
npm install sass
# 4) Material Page component 업그레이드 
# 과거 v4 -> v5 변경 설치
npm i @mui/material @emotion/react @emotion/styled

# 4-1) 소스에서 임포트 사용법 : <Pagination />
import Pagination from '@mui/material/Pagination';

# 5) typescript jquery, jqueryui type 넣기
# 5-1) typescript jquery 사용
npm i --save-dev @types/jquery
