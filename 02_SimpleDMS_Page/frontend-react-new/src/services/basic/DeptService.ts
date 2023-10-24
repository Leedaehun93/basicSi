// axios 공통함수 : 벡엔드 연동
import IDept from "../../types/basic/IDept";
import http from "../../utils/http-common";

// 전체 조회 + like 검색(paging 기능 : page(현재페이지), size(1페이지당개수))
const getAll = (dname:string, page:number, size:number) => {
  return http.get<Array<IDept>>(`/basic/dept?dname=${dname}&page=${page}&size=${size}`);
};

// 상세 조회
const get = (dno:any) => {
  return http.get<IDept>(`/basic/dept/${dno}`);
};

// 저장함수
const create = (data:IDept) => {
  return http.post<IDept>("/basic/dept", data);
};
// 수정함수
const update = (dno:any, data:IDept) => {
  return http.put<any>(`/basic/dept/${dno}`, data);
};
// 삭제함수
const remove = (dno:any) => {
  return http.delete<any>(`/basic/dept/deletion/${dno}`);
};

const DeptService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default DeptService;