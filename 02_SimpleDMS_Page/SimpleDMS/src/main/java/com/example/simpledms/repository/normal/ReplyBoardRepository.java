package com.example.simpledms.repository.normal;

import com.example.simpledms.model.dto.normal.ReplyBoardDto;
import com.example.simpledms.model.entity.normal.ReplyBoard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.example.simpledms.repository.normal
 * fileName : ReplyBoardRepository
 * author : L.DH
 * date : 2023-10-26
 * description : JPA CRUD 인터페이스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-26         L.DH         최초 생성
 */
@Repository
public interface ReplyBoardRepository extends JpaRepository<ReplyBoard, Integer> {
    //    계층형 조회(특수) 쿼리 : @Query(, nativeQuery=true)
    @Query(value = "SELECT BID           AS bid " +
            "     , LPAD('⤵', (LEVEL-1))|| board_title   AS BoardTitle " +
            "     , board_content AS boardContent " +
            "     , board_writer  AS boardWriter " +
            "     , view_cnt      AS viewCnt " +
            "     , board_group   AS boardGroup " +
            "     , board_parent  AS boardParent " +
            "FROM TB_REPLY_BOARD " +
            "WHERE BOARD_TITLE LIKE '%'|| :boardTitle ||'%' " +
            "AND   DELETE_YN = 'N' " +
            "START WITH BOARD_PARENT = 0    " +
            "CONNECT BY PRIOR BID = BOARD_PARENT  " +
            "ORDER SIBLINGS BY BOARD_GROUP DESC", nativeQuery = true)

    Page<ReplyBoardDto> selectByConnectByPage(
            @Param("boardTitle") String boardTitle,
            Pageable pageable);
}