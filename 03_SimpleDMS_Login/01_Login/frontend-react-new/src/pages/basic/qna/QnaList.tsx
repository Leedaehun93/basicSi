// QnaList.tsx : rfce
import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TitleCom from "../../../components/common/TitleCom";
import IQna from "../../../types/basic/IQna";
import QnaService from "../../../services/basic/QnaService";

function QnaList() {
  // 변수 정의
  // qna 배열 변수
  const [qna, setQna] = useState<Array<IQna>>([]);
  // select 태그에 선택된 값을 저장할 변수 : 기본 (question)
  const [searchSelect, setSearchSelect] = useState<string>("question");
  // 검색어(input) 변수
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  // todo: 공통 페이징 변수 4개
  // todo: 공통 변수 : page(현재페이지번호), count(총페이지건수), pageSize(3,6,9 배열)
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3); // 1페이지당개수
  const pageSizes = [3, 6, 9]; // 공통 pageSizes : 배열 (셀렉트 박스 사용)

  // 함수 정의
  //   화면이 뜰때 실행되는 이벤트 + 감시변수
  useEffect(() => {
    retrieveQna(); // 전체조회 실행
  }, [page, pageSize]);

  // 전체조회
  const retrieveQna = () => {
    // 벡엔드 매개변수 전송 : + 현재페이지(page), 1페이지당개수(pageSize)
    QnaService.getAll(searchSelect, searchKeyword, page - 1, pageSize) // 벡엔드 전체조회요청
      .then((response: any) => {
        const { qna, totalPages } = response.data;
        setQna(qna);
        setCount(totalPages);
        // 로그 출력
        console.log("response", response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  //   select 태그 수동바인딩
  const onChangeSearchSelect = (e: any) => {
    setSearchSelect(e.target.value); // 화면값 -> 변수저장
  };

  //   input 태그 수동바인딩
  const onChangeSearchKeyword = (e: any) => {
    setSearchKeyword(e.target.value); // 화면값 -> 변수저장
  };

  //   todo: 공통 페이징 함수 2개
  // todo: handlePageSizeChange(공통) : pageSize 값 변경시 실행되는 함수
  //  select 태그 수동 바인딩 : 화면값 -> 변수에 저장
  const handlePageSizeChange = (event: any) => {
    setPageSize(event.target.value); // 1페이지당 개수저장(3,6,9)
    setPage(1); // 현재페이지번호 : 1로 강제설정
  };

  //  todo: Pagination 수동 바인딩(공통)
  //  페이지 번호를 누르면 => page 변수에 값 저장
  const handlePageChange = (event: any, value: number) => {
    // value == 화면의 페이지번호
    setPage(value);
  };

  return (
    // 여기
    <>
      {/* 제목 start */}
      <TitleCom title="Qna List" />
      {/* 제목 end */}

      {/* question start(다양한 검색어 부분) */}
      <div className="row mb-5 justify-content-center">
        <div className="col-md-8">
          <div className="input-group mb-3">
            {/* 다양한 검색(select : question,questioner) 시작 */}
            <div className="col-2">
              <select
                className="form-select"
                onChange={onChangeSearchSelect}
                value={searchSelect}
              >
                <option key="question" value="question">
                  question
                </option>
                <option key="questioner" value="questioner">
                  questioner
                </option>
              </select>
            </div>
            {/* 다양한 검색(select) 끝 */}

            {/* 검색어(searchKeyword) 입력창(input) 시작 */}
            <div className="col-9  w-50 input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Question"
                value={searchKeyword}
                onChange={onChangeSearchKeyword}
              />
            </div>
            {/* 검색어 입력창 끝 */}

            {/* 검색버튼 시작 */}
            <div className="input-group-append col-md-1">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={retrieveQna}
              >
                Search
              </button>
            </div>
            {/* 검색버튼 끝 */}
          </div>
        </div>
      </div>
      {/* question end */}

      <div className="col-md-12">
        {/* page control start(페이징 html) */}
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
        {/* page control end */}

        {/* table start(본문) */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Question</th>
              <th scope="col">Questioner</th>
              <th scope="col">Answer</th>
              <th scope="col">Answerer</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {qna &&
              qna.map((data) => (
                // 키값 추가 않하면 react 에서 경고를 추가 : 키는 내부적으로 리액트가 rerending 할때 체크하는 값임
                <tr key={data.question}>
                  <td>{data.question}</td>
                  <td>{data.questioner}</td>
                  <td>{data.answer}</td>
                  <td>{data.answerer}</td>
                  <td>
                    <Link to={"/qna/" + data.qno}>
                      <span className="badge bg-success">Edit</span>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* table end */}
      </div>
    </>
  );
}

export default QnaList;