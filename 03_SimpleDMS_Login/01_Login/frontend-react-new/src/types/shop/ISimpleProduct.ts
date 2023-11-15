/* C:\Work\07_Si\02_SimpleDMS_Page\frontend-react-new\src\types\shop\ISimpleProduct.ts */
// ISimpleProduct 인터페이스

export default interface ISimpleProduct {
    spno?: any | null,    // 상품번호
    codeId: number,       // 상품종류코드
    title: string,        // 상품명
    imgPath: string,      // 이미지 경로
    unitPrice: number,    // 단가
    useYn: string;        // 사용유무
}

// CREATE TABLE TB_SIMPLE_PRODUCT
// (
//     SPNO       NUMBER NOT NULL
//         CONSTRAINT PK_SIMPLE_PRODUCT PRIMARY KEY, -- 상품번호
//     CODE_ID    NUMBER,                            -- 상품종류코드
//     TITLE      VARCHAR2(255),                     -- 상품명
//     IMG_PATH   VARCHAR2(255),                     -- 이미지 경로
//     UNIT_PRICE NUMBER,                            -- 단가
//     USE_YN     VARCHAR2(1) DEFAULT 'Y'            -- 사용여부
// )