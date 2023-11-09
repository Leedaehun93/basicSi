// QnaService.ts : axios 공통함수 (백앤드 CRUD 연동 함수)

import IQna from "../../types/basic/IQna";
import http from "../../utils/http-common";

// 전체 조회 + like 검색(paging 기능 : page(현재페이지), size(1페이지당개수))
// 셀렉트 박스 : (question)   입력창 : 질문 like 검색
// 셀렉트 박스 : (questioner) 입력창 : 질문자 like 검색
//  변수 : searchSelect (question, questioner)
//  변수 : searchKeyword : 검색어

const getAll = (searchSelect:string, searchKeyword:string, page:number, size:number) => {
  return http.get<Array<IQna>>(`/basic/qna?searchSelect=${searchSelect}&searchKeyword=${searchKeyword}&page=${page}&size=${size}`);
};

 // 상세 조회
 const get = (qno:any) => {
    return http.get<IQna>(`/basic/qna/${qno}`);
  };
  
  // 저장 함수
  const create = (data:IQna) => {
    return http.post<IQna>("/basic/qna", data);
  };
  // 수정 함수
  const update = (qno:any, data:IQna) => {
    return http.put<any>(`/basic/qna/${qno}`, data);
  };
  // 삭제 함수
  const remove = (qno:any) => {
    return http.delete<any>(`/basic/qna/deletion/${qno}`);
  };


const QnaService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default QnaService;