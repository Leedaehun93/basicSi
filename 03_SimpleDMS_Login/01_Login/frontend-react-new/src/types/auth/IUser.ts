/* C:\Work\07_Si\03_SimpleDMS_Login\01_Login\frontend-react-new\src\types\auth\IUser.ts */
// IUser 인터페이스

export default interface IUser {
    email?: any | null,
    password: string,
    username: string,
    codeName: string      // TODO: 권한코드명(roleUser, roleAdmin)
}

/* TODO: TB_USER */
// email       varchar2(1000) not null constraint pk_user primary key, -- id (email)
// password    varchar2(1000),                                         -- 암호
// username    varchar2(1000),                                         -- 유저명
// code_name   varchar2(1000),                                         -- 권한코드명(role_user, role_admin)

// delete_yn   varchar2(1) default 'n',
// insert_time varchar2(255),
// update_time varchar2(255),
// delete_time varchar2(255)