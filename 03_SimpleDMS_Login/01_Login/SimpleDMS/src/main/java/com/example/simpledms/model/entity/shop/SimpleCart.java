package com.example.simpledms.model.entity.shop;
// TODO: import
import com.example.simpledms.model.common.BaseTimeEntity;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

/**
 * packageName : com.example.simpledms.model.entity.shop
 * fileName : SimpleCart
 * author : L.DH
 * date : 2023-11-09
 * description : 모델 클래스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-11-09         L.DH         최초 생성
 */
@Entity
@Table(name = "TB_SIMPLE_CART")
@SequenceGenerator(
        name = "SQ_SIMPLE_CART_GENERATOR"
        , sequenceName = "SQ_SIMPLE_CART"
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
// soft delete
@Where(clause = "DELETE_YN = 'N'")
@SQLDelete(sql = "UPDATE TB_SIMPLE_CART SET DELETE_YN = 'Y', DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE SCNO = ?")
public class SimpleCart extends BaseTimeEntity {
    /**
     * 심플 장바구니 테이블 속성 정의
     */
// @Id : Primary Key 에 해당
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "SQ_SIMPLE_CART_GENERATOR"
    )
    private Integer scno; // 기본키(장바구니번호), 시퀀스

    private Integer spno; // 상품번호

    private Integer cartCount = 0; // 장바구니 상품개수
}
