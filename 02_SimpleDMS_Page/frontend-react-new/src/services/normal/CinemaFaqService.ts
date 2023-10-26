// CinemaFaqService.ts : axios 공통 CRUD 함수

import ICinemaFaq from "../../types/normal/ICinemaFaq";
import http from "../../utils/http-common";

// 전체 조회 + like 검색(paging 기능 : page(현재페이지), size(1페이지당개수))
const getAll = (question: string, page: number, size: number) => {
  return http.get<Array<ICinemaFaq>>(
    `/normal/cinema-faq?question=${question}&page=${page}&size=${size}`
  );
};

// 상세 조회
const get = (cfno: any) => {
  return http.get<ICinemaFaq>(`/normal/cinema-faq/${cfno}`);
};

// 저장함수
const create = (data: ICinemaFaq) => {
  return http.post<ICinemaFaq>("/normal/cinema-faq", data);
};
// 수정함수
const update = (cfno: any, data: ICinemaFaq) => {
  return http.put<any>(`/normal/cinema-faq/${cfno}`, data);
};
// 삭제함수
const remove = (cfno: any) => {
  return http.delete<any>(`/normal/cinema-faq/deletion/${cfno}`);
};

const CinemaFaqService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default CinemaFaqService;
