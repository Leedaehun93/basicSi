package com.example.simpledms.repository.shop;
// TODO: import

import com.example.simpledms.model.dto.normal.ReplyBoardDto;
import com.example.simpledms.model.dto.shop.SimpleCartDto;
import com.example.simpledms.model.entity.shop.SimpleCart;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * packageName : com.example.simpledms.repository.shop
 * fileName : SimpleCartRepository
 * author : L.DH
 * date : 2023-11-09
 * description : JPA CRUD 인터페이스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-11-09         L.DH         최초 생성
 */
@Repository
public interface SimpleCartRepository extends JpaRepository<SimpleCart, Integer> {
    //    계층형 조회(특수) 쿼리 : @Query(, nativeQuery=true)
    //    like 검색 : 상품테이블(TB_SIMPLE_CART) 조인
    @Query(value = "SELECT SC.SCNO       AS scno " +
            "     , SP.CODE_ID    AS codeId " +
            "     , SP.TITLE      as title " +
            "     , SP.IMG_PATH   AS imgPath " +
            "     , SP.UNIT_PRICE AS unitPrice " +
            "     , SC.CART_COUNT AS cartCount " +
            "FROM TB_SIMPLE_CART SC " +
            "    ,TB_SIMPLE_PRODUCT SP " +
            "WHERE SC.SPNO = SP.SPNO " +
            "AND  SP.TITLE LIKE '%' || :title || '%' " +
            "AND  SC.DELETE_YN = 'N'"
            , countQuery = " count(*)" +
            "FROM TB_SIMPLE_CART SC " +
            "    ,TB_SIMPLE_PRODUCT SP " +
            "WHERE SC.SPNO = SP.SPNO " +
            "AND  SP.TITLE LIKE '%' || :title || '%' " +
            "AND  SC.DELETE_YN = 'N'"
            , nativeQuery = true)
    Page<SimpleCartDto> selectByTitleContaining(
            @Param("title") String title,
            Pageable pageable
    );

    //    상품 + 장바구니(조인) 상세조회 : 페이징없음(객체)
    @Query(value = "SELECT SC.SCNO       AS scno " +
            "     , SP.CODE_ID    AS codeId " +
            "     , SP.TITLE      as title " +
            "     , SP.IMG_PATH   AS imgPath " +
            "     , SP.UNIT_PRICE AS unitPrice " +
            "     , SC.CART_COUNT AS cartCount " +
            "FROM TB_SIMPLE_CART SC " +
            "    ,TB_SIMPLE_PRODUCT SP " +
            "WHERE SC.SPNO = SP.SPNO " +
            "AND  SC.SCNO = :scno " +
            "AND  SC.DELETE_YN = 'N'", nativeQuery = true)
    Optional<SimpleCartDto> selectById(@Param("scno") int scno);

}
