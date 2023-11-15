/* C:\Work\07_Si\02_SimpleDMS_Page\frontend-react-new\src\pages\admin\AddCode.tsx */
import React, { useEffect, useState } from "react";
import TitleCom from "../../components/common/TitleCom";
import ICode from "../../types/admin/code/ICode";
import ICodeCategory from "./../../types/admin/code/ICodeCategory";
import CodeService from "../../services/admin/code/CodeService";
import CodeCategoryService from "../../services/admin/code/CodeCategoryService";

function AddCode() {
  // todo: 변수 정의
  // todo: 객체 초기화
  const initialCode = {
    codeId: 0, // 공통코드ID
    codeName: "", // 공통코드명
    categoryId: 0, // 대분류코드ID
    categoryName: "", // 대분류코드명
    useYn: "Y", // 사용유무
  };

  // code 저장객체
  const [code, setCode] = useState<ICode>(initialCode);
  // todo: select 박스의 배열 값을 저장할 변수 : 대분류코드명
  const [codeCategory, setCodeCategory] = useState<Array<ICodeCategory>>([]);
  // 저장버튼 클릭후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);

  // todo: 함수 정의
  // todo: input 태그에 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // 화면값
    setCode({ ...code, [name]: value }); // 변수저장
  };

  // todo: select 태그에 수동 바인딩
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target; // 화면값
    setCode({ ...code, [name]: value }); // 변수저장
  };

  // 저장 함수
  const saveCode = () => {
    // 임시 객체
    var data = {
      codeId: code.codeId, // 공통코드ID
      codeName: code.codeName, // 공통코드명
      categoryId: code.categoryId, // 대분류코드ID
      categoryName: "", // 대분류코드명(Code 테이블에 없음)
      useYn: code.useYn, // 사용유무
    };

    CodeService.create(data) // 저장 요청
      .then((response: any) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 새폼 보여주기 함수 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
  const newCode = () => {
    setCode(initialCode); // 초기화
    setSubmitted(false); // submitted 변수 초기화
  };

  // todo: select 태그의 값(대분류 코드) : 전체조회
  // todo: 대분류코드 : codeCategory
  const retrieveCodeCategoryAll = () => {
    CodeCategoryService.getAllNoPage()
      .then((response: any) => {
        const codeCategory = response.data;
        setCodeCategory(codeCategory);
        console.log("response.data", response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveCodeCategoryAll(); // 대분류 전제 조회
  }, []);

  return (
    // 여기
    <div className="row">
      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCode}>
            Add
          </button>
        </div>
      ) : (
        <>
          {/* 제목 start */}
          <TitleCom title="Add Code" />
          {/* 제목 end */}

          <div className="col-6 mx-auto">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="codeId" className="col-form-label">
                  codeId
                </label>
              </div>

              <div className="col-9">
                <input
                  type="number"
                  id="codeId"
                  required
                  className="form-control"
                  value={code.codeId}
                  onChange={handleInputChange}
                  placeholder="codeId"
                  name="codeId"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="codeName" className="col-form-label">
                  codeName
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="codeName"
                  required
                  className="form-control"
                  value={code.codeName}
                  onChange={handleInputChange}
                  placeholder="codeName"
                  name="codeName"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="unitPrice" className="col-form-label">
                  Category Name
                </label>
              </div>
              <div className="col-9">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  id="categoryId"
                  value={code.categoryId}
                  onChange={handleSelectChange}
                  name="categoryId"
                >
                  {/* select 박스의 목록 값 부분 : 반복문 수행 */}
                  <option>selected item</option>
                  {codeCategory &&
                    codeCategory.map((data) => (
                      <option key={data.categoryId} value={data.categoryId}>
                        {data.categoryName}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="unitPrice" className="col-form-label">
                  Use Y/N
                </label>
              </div>
              <div className="col-9">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  id="useYn"
                  value={code.useYn}
                  onChange={handleSelectChange}
                  name="useYn"
                >
                  <option value="Y">사용함</option>
                  <option value="N">사용 안함</option>
                </select>
              </div>
            </div>

            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveCode}
                className="btn btn-outline-primary ms-2 col"
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AddCode;
