import IEmp from "../../types/basic/IEmp";
import http from "../../utils/http-common";


const getAll = (ename:string, page:number, size:number) => {
  return http.get<Array<IEmp>>(`/basic/emp?ename=${ename}&page=${page}&size=${size}`);
};

const get = (eno:any) => {
  return http.get<IEmp>(`/basic/emp/${eno}`);
};

const create = (data:IEmp) => {
  return http.post<IEmp>("/basic/emp", data);
};

const update = (eno:any, data:IEmp) => {
  return http.put<any>(`/basic/emp/${eno}`, data);
};

const remove = (eno:any) => {
  return http.delete<any>(`/basic/emp/deletion/${eno}`);
};

const EmpService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default EmpService;
