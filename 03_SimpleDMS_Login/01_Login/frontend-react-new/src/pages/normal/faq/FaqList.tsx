// FaqList.tsx : rfce

import React, { useEffect, useState } from "react";
import TitleCom from "../../../components/common/TitleCom";
import { Pagination } from "@mui/material";
import IFaq from "../../../types/normal/IFaq";
import FaqService from "../../../services/normal/FaqService";
import { Link } from "react-router-dom";

function FaqList() {
  // TODO: 변수 정의
  // faq 배열 변수
  const [faq, setFaq] = useState<Array<IFaq>>([]);
  // 검색어 변수
  const [searchTitle, setSearchTitle] = useState<string>("");

  // 공통 변수 : page(현재페이지번호), count(총페이지건수), pageSize(3,6,9 배열)
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3); // 1페이지당개수
  // pageSizes : 배열 (셀렉트 박스 사용)
  const pageSizes = [3, 6, 9];

  // TODO: 함수 정의
  useEffect(() => {
    retrieveFaq(); // 전체 조회
  }, [page, pageSize]);

  //   전체조회 함수
  const retrieveFaq = () => {
    FaqService.getAll(searchTitle, page - 1, pageSize) // 벡엔드 전체조회요청
      .then((response: any) => {
        const { faq, totalPages } = response.data;
        // faq 저장
        setFaq(faq);
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
  const onChangeSearchTitle = (e: any) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  // handlePageSizeChange(공통) : pageSize 값 변경시 실행되는 함수
  const handlePageSizeChange = (event: any) => {
    setPageSize(event.target.value); // 1페이지당 개수저장(3,6,9)
    setPage(1); // 현재페이지번호 : 1로 강제설정
  };

  // Pagination 수동 바인딩
  const handlePageChange = (event: any, value: number) => {
    setPage(value);
  };

  return (
    // TODO: JSX 
    <div>
      {/* 제목 start */}
      <TitleCom title="Faq List" />
      {/* 제목 end */}

      {/* search start */}
      <div className="row mb-5 justify-content-center">
        <div className="col-12 w-50 input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveFaq}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* search end */}

      {/* page start */}
      <div className="mt-3">
        {"Items per Page: "}
        <select onChange={handlePageSizeChange} value={pageSize}>
          {pageSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

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
      {/* page end */}

      {/* accodian start(반복문) */}
      <div className="col-md-12">
        <div className="accordion" id="accordionExample">
          {/* 반복문 사용법 : faq.map((data, index) => (아코디언 태그)) */}
          {faq &&
            faq.map((data, index) => (
              // 여기
              <div className="accordion-item" key={data.no}>
                {/* 사용법 1: 변수명 유일 1) h2(제목) : id="heading0" */}
                {/*                         div(본문) : aria-labelledby="heading0" */}
                {/*                      2) h2(제목) :  data-bs-target="#collapse0" */}
                {/*                         div(본문) : id="collapse0 */}
                {/* 사용법 2 : (h2)화면 보이기/안보이기 css(class) */}
                {/*                펼치기 : className="accordion-button" */}
                {/*                접기   : className="accordion-button collapsed" */}
                {/*            (div(본문)) : */}
                {/*                펼치기 : className="accordion-collapse collapse show"  */}
                {/*                접기   : className="accordion-collapse collapse"  */}
                {/* 제목 시작 */}
                <h2 className="accordion-header" id={"heading" + index}>
                  <button
                    className={index==0?"accordion-button" : "accordion-button collapsed"}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#collapse" + index}
                    aria-expanded={index==0?"true" : "false"}
                    aria-controls={"collapse" + index}
                  >
                    {/* 벡엔드 데이터 */}
                    {data.title}
                  </button>
                </h2>
                {/* 제목(data.title) 끝 */}

                {/* 본문(data.content) 시작 */}
                <div
                  id={"collapse" + index}
                  className={index==0?"accordion-collapse collapse show": "accordion-collapse collapse"}
                  aria-labelledby={"heading" + index}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {/* 벡엔드 데이터 코딩 */}
                    {data.content} &nbsp;
                    <Link to={"/faq/" + data.no}>
                      <span className="badge bg-success">Edit</span>
                    </Link>
                  </div>
                </div>
                {/* 본문 끝 */}
              </div>
            ))}
        </div>
      </div>
      {/* accodian end */}
    </div>
  );
}

export default FaqList;