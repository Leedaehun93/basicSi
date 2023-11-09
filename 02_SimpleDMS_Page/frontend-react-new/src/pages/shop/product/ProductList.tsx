/* C:\Work\07_Si\02_SimpleDMS_Page\frontend-react-new\src\pages\shop\product\ProductList.tsx */
// TODO : 상품 전체 조회 화면

import React, { useEffect, useState } from "react";
import IProduct from "../../../types/shop/IProduct";
import ProductService from "../../../services/shop/ProductService";
import TitleCom from "../../../components/common/TitleCom";
import { Pagination } from "@mui/material";

function ProductList() {
  // TODO: 변수 정의
  // 부서 배열 변수
  const [product, setProduct] = useState<Array<IProduct>>([]);
  // 검색어 변수
  const [searchPname, setSearchPname] = useState<string>("");

  // 공통 변수 : page(현재페이지번호), count(총페이지건수), pageSize(3,6,9 배열)
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3); // 1페이지당개수
  // pageSizes : 배열 (셀렉트 박스 사용)
  const pageSizes = [3, 6, 9];

  // TODO: 함수 정의
  useEffect(() => {
    retrieveProduct(); // 전체 조회
  }, [page, pageSize]);

  //   전체조회 함수
  const retrieveProduct = () => {
    // TODO : 벡엔드 매개변수 전송 : + 현재페이지(page), 1페이지당개수(pageSize)
    ProductService.getAll(searchPname, page - 1, pageSize) // 벡엔드 전체조회요청
      .then((response: any) => {
        const { Product, totalPages } = response.data;
        // Product 저장
        setProduct(Product);
        setCount(totalPages);
        // 로그 출력
        console.log("response", response.data);
      })
      .catch((e: Error) => {
        // 벡엔드 실패시 실행됨
        console.log(e);
      });
  };

  //  검색어 수동 바인딩 함수
  const onChangeSearchPname = (e: any) => {
    const searchPname = e.target.value;
    setSearchPname(searchPname);
  };

  // TODO : handlePageSizeChange : pageSize 값 변경시 실행되는 함수
  // select 태그 수동 바인딩 : 화면값 -> 변수에 저장
  const handlePageSizeChange = (event: any) => {
    setPageSize(event.target.value); // 1페이지당 개수저장(3,6,9)
    setPage(1); // 현재페이지번호 : 1로 강제설정
  };

  // TODO : Pagination 수동 바인딩
  //  페이지 번호를 누르면 => page 변수에 값 저장
  const handlePageChange = (event: any, value: number) => {
    // value == 화면의 페이지번호
    setPage(value);
  };

  return (
    // TODO: JSX
    <>
      {/* 제목 start */}
      <TitleCom title="Product List" />
      {/* 제목 end */}

      {/* shop start(검색어) */}
      <div className="row mb-5 justify-content-center">
        {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
        <div className="col-12 w-50 input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Pname"
            value={searchPname}
            onChange={onChangeSearchPname}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveProduct}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* shop end */}

      {/* paging 시작 */}
      <div className="mt-3">
        {"Items per Page: "}
        <select onChange={handlePageSizeChange} value={pageSize}>
          {pageSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        {/* count : 총페이지 수, page : 현재페이지 번호 */}
        <Pagination
          className="my-3"
          count={count}
          page={page}
          siblingCount={1}
          boundaryCount={1}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />
      </div>
      {/* paging 끝 */}

      {/* product 시작 */}
      <div className="row">
        {product &&
          product.map((data) => (
            <div className="ms-5 col-lg-3 col-md-3 mt-5" key={data.pno}>
              <div className="card">
                <img src={data.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <span className="badge text-bg-primary">{data.kindCode}</span>
                  <span className="badge text-bg-info ms-2 mb-2">
                    {data.statusCode}
                  </span>
                  <h5 className="card-title">{data.pname}</h5>
                  <h5 className="card-title">₩ {data.unitPrice}</h5>
                  <a href={`/cart/${data.pno}`} className="btn btn-primary">
                    Product Cart
                  </a>
                  <br />
                  <a
                    href={`/product/${data.pno}`}
                    className="btn btn-success mt-2"
                  >
                    Product Detail(admin)
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* product 끝 */}
    </>
  );
}

export default ProductList;
