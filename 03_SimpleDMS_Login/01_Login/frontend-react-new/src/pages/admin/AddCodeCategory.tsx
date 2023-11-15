/* C:\Work\07_Si\02_SimpleDMS_Page\frontend-react-new\src\pages\admin\AddCodeCategory.tsx */
// AddCodeCategory.tsx : rfce
import React, { useState } from "react";
import TitleCom from "../../components/common/TitleCom";
import ICodeCategory from "../../types/admin/code/ICodeCategory";
import CodeCategoryService from "../../services/admin/code/CodeCategoryService";

function AddCodeCategory() {
  // todo: 변수 정의
  // todo: 객체 초기화
  const initialCodeCategory = {
    categoryId: 0,
    categoryName: "",
  };

  // 저장객체
  const [codeCategory, setCodeCategory] =
    useState<ICodeCategory>(initialCodeCategory);
  // 저장버튼 클릭후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);

  // todo: 함수 정의
  // todo: input 태그에 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // 화면값
    setCodeCategory({ ...codeCategory, [name]: value }); // 변수저장
  };

  // 저장 함수
  const saveCodeCategory = () => {
    // 임시 객체
    var data = {
      categoryId: codeCategory.categoryId,     // 변수 = 화면값
      categoryName: codeCategory.categoryName,
    };

    CodeCategoryService.create(data) // 저장 요청
      .then((response: any) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 새폼 보여주기 함수 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
  const newCodeCategory = () => {
    setCodeCategory(initialCodeCategory); // 초기화
    setSubmitted(false); // submitted 변수 초기화
  };

  return (
    <div className="row">
      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCodeCategory}>
            Add
          </button>
        </div>
      ) : (
        <>
          {/* 제목 start */}
          <TitleCom title="Add CodeCategory" />
          {/* 제목 end */}

          <div className="col-6 mx-auto">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="categoryId" className="col-form-label">
                  categoryId
                </label>
              </div>

              <div className="col-9">
                <input
                  type="number"
                  id="categoryId"
                  required
                  className="form-control"
                  value={codeCategory.categoryId}
                  onChange={handleInputChange}
                  placeholder="categoryId"
                  name="categoryId"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="categoryName" className="col-form-label">
                  categoryName
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="categoryName"
                  required
                  className="form-control"
                  value={codeCategory.categoryName}
                  onChange={handleInputChange}
                  placeholder="categoryName"
                  name="categoryName"
                />
              </div>
            </div>

            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveCodeCategory}
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

export default AddCodeCategory;