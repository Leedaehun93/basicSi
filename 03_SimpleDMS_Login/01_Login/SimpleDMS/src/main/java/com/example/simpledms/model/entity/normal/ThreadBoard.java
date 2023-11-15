package com.example.simpledms.model.entity.normal;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

/**
 * packageName : com.example.simpledms.model.entity.normal
 * fileName : ThreadBoard
 * author : L.DH
 * date : 2023-10-26
 * description :
 * 요약 : 모델 클래스
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-26         L.DH         최초 생성
 */
@Entity
@Table(name = "TB_THREAD_BOARD")
@SequenceGenerator(
        name = "SQ_THREAD_BOARD_GENERATOR"
        , sequenceName = "SQ_THREAD_BOARD"
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
@SQLDelete(sql = "UPDATE TB_THREAD_BOARD SET DELETE_YN = 'Y', DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE TID = ?")
public class ThreadBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "SQ_THREAD_BOARD_GENERATOR")
    private Integer Tid; // 게시판번호(기본키), 시퀀스

    private String subject; // 제목
    private String mainText; // 내용
    private String writer; // 작성자

    private Integer views; // 조회수
    private Integer tgroup; // 트리구조 최상위 부모 노드( 부모가 있을 경우 : 부모번호, 없을 경우 : 자신의 게시판번호 ) (*정렬)
    private Integer tparent; // 자신의 부모 노드 ( 부모가 있을 경우 : 부모번호, 없을 경우 : 0 ) (*핵심)

}
