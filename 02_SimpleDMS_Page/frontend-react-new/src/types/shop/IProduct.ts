/* C:\Work\07_Si\02_SimpleDMS_Page\frontend-react-new\src\types\shop\IProduct.ts */
// IProduct 인터페이스

export default interface IProduct {
    pno?: any | null,    // 상품번호
    kindCode: number,       // 상품종류코드
    pname: string,        // 상품명
    image: string,      // 이미지 경로
    unitPrice: number,    // 단가
    statusCode: number,    // 상품상태코드(20001(신상), 20002(이월상품), 20003(전시품))
    useYn: string;        // 사용유무
}

// CREATE TABLE TB_PRODUCT
// pno         number not null            -- 상품번호

// kind_code   number,                    -- 상품종류코드
// pname       varchar2(255),             -- 상품명
// image       varchar2(255),             -- 이미지 경로
// unit_price  number,                    -- 단가
// status_code number default 20001,      -- 상품상태코드(20001(신상), 20002(이월상품), 20003(전시품))
// use_yn      varchar2(1) default 'y'    -- 사용여부
// )
