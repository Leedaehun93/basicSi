package com.example.simpledms.model.dto.normal;

/**
 * packageName : com.example.simpledms.model.dto.normal
 * fileName : ReplyBoardDto
 * author : L.DH
 * date : 2023-10-26
 * description : 계층형 쿼리 DTO
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-26         L.DH         최초 생성
 */
public interface ReplyBoardDto {
// TODO: 계층형 쿼리 DTO 정의는 속성 x => getter 함수로 정의
// private Integer BID; // 기본키, 시퀀스
// private String boardTitle; // 제목
// private String boardContent; // 내용
// private String boardWriter; // 작성자
// private Integer viewCnt; // 조회수
// private Integer boardGroup; // 트리구조 최상위 부모 노드( 부모가 있을 경우 : 부모번호, 없을 경우 : 자신의 게시판번호 ) (*정렬)
// private Integer boardParent; // 자신의 부모 노드 ( 부모가 있을 경우 : 부모번호, 없을 경우 : 0 ) (*핵심)

    public Integer getBid();
    public String getBoardTitle();
    public String getBoardContent();
    public String getBoardWriter();
    public Integer getViewCnt();
    public Integer getBoardGroup();
    public Integer getBoardParent();

}
