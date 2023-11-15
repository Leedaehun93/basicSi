// ThreadBoardService.ts : axios 공통 CRUD 함수 : 벡엔드 연동

import IThreadBoard from "../../types/normal/IThreadBoard";
import http from "../../utils/http-common";

// 전체 조회 + like 검색(paging 기능 : page(현재페이지), size(1페이지당개수))
const getAll = (subject: string, page: number, size: number) => {
  return http.get<Array<IThreadBoard>>(
    `/normal/thread-board?subject=${subject}&page=${page}&size=${size}`
  );
};

// 상세 조회
const get = (tid: any) => {
  return http.get<IThreadBoard>(`/normal/thread-board/${tid}`);
};

// TODO: 저장함수1 : 게시물 생성(부모글)
const createBoard = (data: IThreadBoard) => {
  return http.post<IThreadBoard>("/normal/thread-board", data);
};

// TODO: 저장함수2 : 답변글 생성(자식글)
const create = (data: IThreadBoard) => {
  return http.post<IThreadBoard>("/normal/thread", data);
};

// 수정함수
const update = (tid: any, data: IThreadBoard) => {
  return http.put<any>(`/normal/thread-board/${tid}`, data);
};

// TODO: 삭제함수1 : 게시물(부모글) + 답변글(자식글) 모두 삭제
// TODO:            그룹번호 : 부모글과 자식글은 모두 그룹번호가 같음
const removeBoard = (tgroup: any) => {
  return http.delete<any>(`/normal/thread-board/deletion/${tgroup}`);
};

// TODO: 삭제함수2 : 답변글만 삭제
const remove = (tid: any) => {
  return http.delete<any>(`/normal/thread/deletion/${tid}`);
};

const ThreadBoardService = {
  getAll,
  get,
  createBoard,
  create,
  update,
  removeBoard,
  remove,
};

export default ThreadBoardService;
