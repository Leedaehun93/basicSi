package com.example.simpledms.model.entity.normal;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;


/**
 * packageName : com.example.simpledms.model.entity.normal
 * fileName : ReplyBoard
 * author : L.DH
 * date : 2023-10-26
 * description : 모델 클래스
 * 요약 :
 * Soft Delete는 물리적인 데이터 삭제로 발생할 수 있는 문제를 방지하고 쉽게 복원할 필요가 있거나 삭제된 데이터들을 보관하여 데이터로써 활용할 필요나 가치가 있는 경우에 사용
 * 실무에서는 법적으로 개인자료일 경우 3년 또는 1년이상 데이터를 보관할 의무가 있고 어길수 법적 문제가 생길 수 있음 -> 그래서 soft delete 방식을 대부분 구현하고 있음
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-26         L.DH         최초 생성
 */
@Entity
@Table(name = "TB_REPLY_BOARD")
@SequenceGenerator(
        name = "SQ_REPLY_BOARD_GENERATOR"
        , sequenceName = "SQ_REPLY_BOARD"
        , initialValue = 1
        , allocationSize = 1)
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
@SQLDelete(sql = "UPDATE TB_REPLY_BOARD SET DELETE_YN = 'Y', DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE BID = ?")
public class ReplyBoard {
    // 속성
    // TODO: schema.sql 속성 복사해서 넣기

// boardTitle   varchar2(256),    -- 제목
// boardContent varchar2(255),    -- 내용
// boardWriter  varchar2(255),    -- 작성자
// viewCnt      number default 0, -- 조회수
// boardGroup   number,           -- 트리구조 최상위 부모 노드( 부모가 있을 경우 : 부모번호, 없을 경우 : 자신의 게시판번호 )
// boardParent  number,           -- 자신의 부모 노드 ( 부모가 있을 경우 : 부모번호, 없을 경우 : 0 )
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "SQ_REPLY_BOARD_GENERATOR")
    private Integer Bid; // 기본키, 시퀀스

    private String boardTitle; // 제목

    private String boardContent; // 내용

    private String boardWriter; // 작성자

    private Integer viewCnt; // 조회수

    private Integer boardGroup; // 트리구조 최상위 부모 노드( 부모가 있을 경우 : 부모번호, 없을 경우 : 자신의 게시판번호 ) (*정렬)

    private Integer boardParent; // 자신의 부모 노드 ( 부모가 있을 경우 : 부모번호, 없을 경우 : 0 ) (*핵심)
}