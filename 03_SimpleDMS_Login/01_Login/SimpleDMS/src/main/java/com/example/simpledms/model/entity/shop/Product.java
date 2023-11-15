package com.example.simpledms.model.entity.shop;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

/**
 * packageName : com.example.simpledms.model.entity.shop
 * fileName : Product
 * author : L.DH
 * date : 2023-11-08
 * description : 상품 정보 클래스 : 마스터성 데이터
 * 요약 :
 * 1) 삭제 안함 : 삭제 기능 없음
 * => useYn : 사용 여부로 대체
 * 2) 공통컬럼 없음 : (생성일자, 수정일자, 삭제일자) 사용 안 함
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-11-08         L.DH         최초 생성
 */
@Entity
@Table(name = "TB_PRODUCT")
@SequenceGenerator(
        name = "SQ_PRODUCT_GENERATOR"
        , sequenceName = "SQ_PRODUCT"
        , initialValue = 1
        , allocationSize = 1
)
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@DynamicUpdate

public class Product {
/** TODO: 속성 */
//    PNO         NUMBER NOT NULL            -- 상품번호
//    CONSTRAINT PK_PRODUCT PRIMARY KEY,
//    KIND_CODE   NUMBER,                    -- 상품종류코드
//    PNAME       VARCHAR2(255),             -- 상품명
//    IMAGE       VARCHAR2(255),             -- 이미지 경로
//    UNIT_PRICE  NUMBER,                    -- 단가
//    STATUS_CODE NUMBER DEFAULT 20001,      -- 상품상태코드(20001(신상), 20002(이월상품), 20003(전시품))
//    USE_YN      VARCHAR2(1) DEFAULT 'Y'    -- 사용여부

    /**
     * @Id : Primary Key 에 해당
     */
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "SQ_PRODUCT_GENERATOR"
    )
    private Integer PNO; // 기본키, 시퀀스

    //    상품종류코드
    private Integer kindCode;

    //    상품명
    private String pname;

    //    이미지 경로
    private String image;

    //    단가
    private Integer unitPrice;

    //    상품상태코드(20001(신상), 20002(이월상품), 20003(전시품))
    private Integer statusCode;

    //    사용여부
    private String useYn;

}
