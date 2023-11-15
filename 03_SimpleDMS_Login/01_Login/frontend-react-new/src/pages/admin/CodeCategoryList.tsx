/* C:\Work\07_Si\02_SimpleDMS_Page\frontend-react-new\src\pages\admin\CodeCategoryList.tsx */
// CodeCategoryList.tsx : rfce
import React, { useEffect, useState } from "react";
import TitleCom from "../../components/common/TitleCom";
import ICodeCategory from "../../types/admin/code/ICodeCategory";
import CodeCategoryService from "../../services/admin/code/CodeCategoryService";
import { Pagination } from "@mui/material";

function CodeCategoryList() {
  // todo: 변수 정의
  // 공통코드분류 배열 변수 정의
  const [codeCategory, setCodeCategory] = useState<Array<ICodeCategory>>([]);
  // 검색어 변수 정의
  const [searchCategoryName, setSearchCategoryName] = useState<string>("");

  // 페이징 처리 변수
  // todo: 공통 변수 : page(현재페이지번호), count(총페이지건수), pageSize(3,6,9 배열)
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3); // 1페이지당개수
  // todo: 공통 pageSizes : 배열 (셀렉트 박스 사용)
  const pageSizes = [3, 6, 9];

  // todo: 함수 정의
  useEffect(() => {
    retrieveCodeCategory(); // 전체 조회
  }, [page, pageSize]);

  //   전체조회 함수
  const retrieveCodeCategory = () => {
    CodeCategoryService.getAll(searchCategoryName, page -1, pageSize) // 벡엔드 전체조회요청
    .then((response: any)=>{
      const { codeCategory, totalPages } = response.data;
      // 저장
      setCodeCategory(codeCategory);
      setCount(totalPages);
      // 로그 출력
      console.log("response", response.data);

    })
    .catch((e: Error)=>{
      console.log(e);
    })
  };

  //  검색어 수동 바인딩 함수
  const onChangeSearchCategoryName = (e: any) => {
    setSearchCategoryName(e.target.value);
  };

  // todo: handlePageSizeChange(공통) : pageSize 값 변경시 실행되는 함수
  const handlePageSizeChange = (event: any) => { 
      setPageSize(event.target.value); // 1페이지당 개수저장(3,6,9)
      setPage(1); // 현재페이지번호 : 1로 강제설정
   }

  //  todo: Pagination 수동 바인딩(공통)
  //  페이지 번호를 누르면 => page 변수에 값 저장
  const handlePageChange = (event:any, value:number) => { 
      // value == 화면의 페이지번호
      setPage(value);
   }

  return (
    // 여기
    <>
      {/* 제목 start */}
      <TitleCom title="CodeCategory List" />
      {/* 제목 end */}

      {/* categoryId start(검색어) */}
      <div className="row mb-5 justify-content-center">
        {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
        <div className="col-12 w-50 input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Category Name"
            value={searchCategoryName}
            onChange={onChangeSearchCategoryName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveCodeCategory}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* categoryId end */}

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

      {/* table start */}
      <div className="col-md-12">
        {/* table start */}
        <table className="table">
          <thead className="table-light">
            <tr>
              <th scope="col">CategoryId</th>
              <th scope="col">CategoryName</th>
            </tr>
          </thead>
          <tbody>
            {codeCategory &&
              codeCategory.map((data) => (
                <tr key={data.categoryId}>
                  <td>{data.categoryId}</td>
                  <td>{data.categoryName}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* table end */}
      </div>
      {/* table end */}
    </>
  );
}

export default CodeCategoryList;