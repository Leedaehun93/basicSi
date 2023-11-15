// FaqService.ts : axios 공통 CRUD 함수

import IFaq from "../../types/normal/IFaq";
import http from "../../utils/http-common";

// 전체 조회 + like 검색(paging 기능 : page(현재페이지), size(1페이지당개수))
const getAll = (title:string, page:number, size:number) => {
    return http.get<Array<IFaq>>(`/normal/faq?title=${title}&page=${page}&size=${size}`);
  };
  
  // 상세 조회
  const get = (no:any) => {
    return http.get<IFaq>(`/normal/faq/${no}`);
  };
  
  // 저장함수
  const create = (data:IFaq) => {
    return http.post<IFaq>("/normal/faq", data);
  };
  // 수정함수
  const update = (no:any, data:IFaq) => {
    return http.put<any>(`/normal/faq/${no}`, data);
  };
  // 삭제함수
  const remove = (no:any) => {
    return http.delete<any>(`/normal/faq/deletion/${no}`);
  };
  
  const FaqService = {
    getAll,
    get,
    create,
    update,
    remove,
  };
  
  export default FaqService;