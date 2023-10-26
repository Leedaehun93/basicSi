// IReplyBoard.ts : 타입 인터페이스

export default interface IReplyBoard {
  bid?: any | null;
  boardTitle: string;
  boardContent: string;
  boardWriter: string;
  viewCnt: number;
  boardGroup: any | null;
  boardParent: any | null;
}

// bid           number not null
// constraint pk_reply_board primary key, -- 게시판번호
// board_title   varchar2(256),               -- 제목
// board_content varchar2(255),               -- 내용
// board_writer  varchar2(255),               -- 작성자
// view_cnt      number default 0,            -- 조회수

// TODO: board_group   number,   -- 트리구조 최상위 부모 노드( 부모가 있을 경우 : 부모번호, 없을 경우 : 자신의 게시판번호 )
// TODO: board_parent  number,   -- 자신의 부모 노드 ( 부모가 있을 경우 : 부모번호, 없을 경우 : 0 )

// delete_yn     varchar2(1) default 'n',
// insert_time   varchar2(255),
// update_time   varchar2(255),
// delete_time   varchar2(255)
