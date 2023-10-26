// IThreadBoard.ts : 타입 인터페이스

export default interface IThreadBoard {
  tid?: any | null;
  subject: string;
  mainText: string;
  writer: string;
  views: number;
  tgroup: any | null;
  tparent: any | null;
}

// tid         number not null
// constraint pk_thread_board primary key, -- 게시판번호

// subject     varchar2(256),                  -- 제목
// main_text   varchar2(255),                  -- 내용
// writer      varchar2(255),                  -- 작성자

// views       number default 0,               -- 조회수

// tgroup      number,                         -- 트리구조 최상위 부모 노드( 부모가 있을 경우 : 부모번호, 없을 경우 : 자신의 게시판번호 )
// tparent     number,                         -- 자신의 부모 노드 ( 부모가 있을 경우 : 부모번호, 없을 경우 : 0 )

// delete_yn   varchar2(1) default 'n',
// insert_time varchar2(255),
// update_time varchar2(255),
// delete_time varchar2(255)
