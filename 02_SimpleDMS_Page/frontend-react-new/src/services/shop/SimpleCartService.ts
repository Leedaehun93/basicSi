// SimpleCartService.ts : axios 공통 함수 
import ISimpleCart from "../../types/shop/ISimpleCart";
import http from "../../utils/http-common";

// 전체 조회 + like 검색(paging 기능 : page(현재페이지), size(1페이지당개수))
const getAll = (title:string, page:number, size:number) => {
    return http.get<Array<ISimpleCart>>(`/shop/simple-cart?title=${title}&page=${page}&size=${size}`);
  };
  
  // 상세 조회
  const get = (scno:any) => {
    return http.get<ISimpleCart>(`/shop/simple-cart/${scno}`);
  };
  
  // 저장함수
  const create = (data:ISimpleCart) => {
    return http.post<ISimpleCart>("/shop/simple-cart", data);
  };
  // 수정함수
  const update = (scno:any, data:ISimpleCart) => {
    console.log("scno", scno);
    console.log("data", data);
    return http.put<any>(`/shop/simple-cart/${scno}`, data);
  };
  // 삭제함수
  const remove = (scno:any) => {
    return http.delete<any>(`/shop/simple-cart/deletion/${scno}`);
  };
  
  const SimpleCartService = {
    getAll,
    get,
    create,
    update,
    remove,
  };
  
  export default SimpleCartService;
  