/* C:\Work\07_Si\02_SimpleDMS_Page\frontend-react-new\src\types\advanced\IFileDb.ts */
// IFileDb.ts : 인터페이스

export default interface IFileDb {
    // TB_FILE_DB 참고
    uuid?: any | null,      // 파일 TODO: uuid : 기본키(범용적으로 유일한 값을 만들어 주는 값)
    fileTitle: string,      // 제목
    fileContent: string     // 내용
    fileUrl: string         // 파일 다운로드 url
}

/*
uuid         varchar2(1000) not null
constraint pk_file_db primary key, -- 파일 uuid
fileTitle   varchar2(1000),           -- 제목
fileContent varchar2(1000),           -- 내용
fileName    varchar2(1000),           -- 파일명
fileData    blob,                     -- 바이너리 파일(이미지파일)
fileUrl     varchar2(1000),           -- 파일 다운로드 url

delete_yn    varchar2(1) default 'n',
insert_time  varchar2(255),
update_time  varchar2(255),
delete_time  varchar2(255)
*/