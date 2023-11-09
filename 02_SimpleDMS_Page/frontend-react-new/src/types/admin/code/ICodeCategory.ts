/* C:\Work\07_Si\02_SimpleDMS_Page\frontend-react-new\src\types\admin\code\ICodeCategory.ts */
// 공통코드분류 대분류 3자리 인터페이스

// schema.sql 코드성 테이블 : 공통 코드 유형(대분류) 테이블
// CREATE TABLE TB_CODE_CATEGORY
//     CATEGORY_ID   NUMBER NOT NULL
//     CATEGORY_NAME VARCHAR2(255)
// 예) 대분류(3자리) + 소분류(2자리) => 총 5자리로 사용
export default interface ICodeCategory {
  categoryId: number,  // TODO : 대분류코드ID
  categoryName: string // TODO : 대분류코드명
}
