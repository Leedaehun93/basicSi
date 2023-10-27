package com.example.simpledms.repository.normal;

import com.example.simpledms.model.dto.normal.ReplyBoardDto;
import com.example.simpledms.model.entity.normal.ReplyBoard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

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

    //  게시물 저장 함수 : 최초 생성 (board_group(그룹번호), board_parent(부모번호))
//    => board_group(부모번호 == 자식번호(bid)), board_parent(0(최초생성), 부모번호)
//  TODO: JPA insert 문 직접 작성 (dml: 테이블 데이터 변경, 트랜잭션을 동반)
//    ==> @Transactional(트랜잭션을 동반), @Modifying(테이블 데이터 변경)
//    ==> 예) 변수 전달 - :#{#replyBoard.boardTitle}
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO TB_REPLY_BOARD " +
            "VALUES(sq_reply_board.nextval, :#{#replyBoard.boardTitle}," +
            ":#{#replyBoard.boardContent}," +
            ":#{#replyBoard.boardWriter}, " +
            "0,sq_reply_board.CURRVAL, 0,'N', " +
            "            TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL) ",
            nativeQuery = true)
    int insertByBoard(@Param("replyBoard") ReplyBoard replyBoard);

    //    게시물 + 답변글 2개 삭제 함수 : 소프트 삭제 (update 문 직접 작성)
    @Transactional
    @Modifying
    @Query(value = "UPDATE TB_REPLY_BOARD " +
            "SET DELETE_YN = 'Y' " +
            "  , DELETE_TIME = TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') " +
            "WHERE BOARD_GROUP = :boardGroup", nativeQuery = true)
    int removeAllByBoardGroup(@Param("boardGroup") int boardGroup);

}