package com.example.simpledms.repository.admin;

import com.example.simpledms.model.dto.admin.CodeDto;
import com.example.simpledms.model.entity.admin.Code;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * packageName : com.example.simpledms.repository.admin
 * fileName : CodeRepository
 * author : L.DH
 * date : 2023-11-07
 * description : 소분류 공통코드 Repo
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-11-07         L.DH         최초 생성
 */
@Repository
public interface CodeRepository extends JpaRepository<Code, Integer> {
    //    like 검색 : 대분류코드 + 소분류코드 조인
    @Query(value = "SELECT CO.CODE_ID       AS codeId  " +
            "     , CO.CODE_NAME      AS codeName " +
            "     ,CO.CATEGORY_ID    AS categoryId " +
            "     , CC.CATEGORY_NAME AS categoryName " +
            "     ,CO.USE_YN         AS useYn " +
            "FROM TB_CODE CO " +
            "   , TB_CODE_CATEGORY CC " +
            "WHERE CO.CATEGORY_ID = CC.CATEGORY_ID " +
            "AND   CO.CODE_NAME LIKE '%'|| :codeName ||'%'"
            , countQuery = "SELECT count(*)  " +
            "FROM TB_CODE CO " +
            "   , TB_CODE_CATEGORY CC " +
            "WHERE CO.CATEGORY_ID = CC.CATEGORY_ID " +
            "AND   CO.CODE_NAME LIKE '%'|| :codeName ||'%'"
            , nativeQuery = true)
    Page<CodeDto> selectByCodeNameContaining(
            @Param("codeName") String codeName,
            Pageable pageable
    );

    /**
     * 전체 조회(조인) : 페이징 없음 , DTO 필요
     */
    @Query(value = "SELECT CO.CODE_ID       AS codeId  " +
            "     , CO.CODE_NAME      AS codeName " +
            "     ,CO.CATEGORY_ID    AS categoryId " +
            "     , CC.CATEGORY_NAME AS categoryName " +
            "     ,CO.USE_YN         AS useYn " +
            "FROM TB_CODE CO " +
            "   , TB_CODE_CATEGORY CC " +
            "WHERE CO.CATEGORY_ID = CC.CATEGORY_ID "
            , nativeQuery = true)
    List<CodeDto> selectAllNoPage();
}