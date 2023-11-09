package com.example.simpledms.model.entity.shop;
// import
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

/**
 * packageName : com.example.SimpleProduct.model.entity.shop
 * fileName : simpleProduct
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
@Table(name = "TB_SIMPLE_PRODUCT")
@SequenceGenerator(
        name = "SQ_SIMPLE_PRODUCT_GENERATOR"
        , sequenceName = "SQ_SIMPLE_PRODUCT"
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

public class SimpleProduct {
/** TODO: 속성 */
//    spno       NUMBER NOT NULL
//    codeId    number,                            -- 상품종류코드
//    title      varchar2(255),                     -- 상품명
//    imgPath   varchar2(255),                     -- 이미지 경로
//    unitPrice number,                            -- 단가
//    useYn     varchar2(1) default 'y'            -- 사용여부

    /**
     * @Id : Primary Key 에 해당
     */
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "SQ_SIMPLE_PRODUCT_GENERATOR"
    )
    private Integer spno; // 기본키, 시퀀스

    //    상품종류코드
    private Integer codeId;

    //    상품명
    private String title;

    //    이미지 경로
    private String imgPath;

    //    단가
    private Integer unitPrice;

    //    사용여부
    private String useYn;

}
