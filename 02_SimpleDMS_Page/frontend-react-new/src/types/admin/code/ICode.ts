/* C:\Work\07_Si\02_SimpleDMS_Page\frontend-react-new\src\types\admin\code\ICode.ts */
// 공통코드분류 소분류 2자리 인터페이스

// schema.sql 코드성 테이블 : 공통 코드 유형(소분류) 테이블
// CREATE TABLE TB_CODE
//     CODE_ID     NUMBER NOT NULL
//     CODE_NAME   VARCHAR2(255),
//     CATEGORY_ID NUMBER NOT NULL
//     USE_YN      VARCHAR(1) DEFAULT 'Y'
// 예) 대분류(3자리) + 소분류(2자리) => 총 5자리로 사용
// TODO : 사용유무(useYn) : 만약 다른 소스에 사용하고 있으면 'N' 변경 불가
// TODO : why? 초기에 (사용하기 전에) 실수로 공통코드 잘못 만들었을 때 'N' 으로 변경해서 사용안하기 위해 만듬
export default interface ICode {
  codeId: number,       // 공통코드ID
  codeName: string,     // 공통코드명
  categoryId: number,   // TODO : 대분류코드ID
  categoryName: string, // TODO :대분류코드명
  useYn: string;        // 사용유무
}
