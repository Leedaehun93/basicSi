/* C:\Work\07_Si\02_SimpleDMS_Page\frontend-react-new\src\pages\shop\simple-product\AddSimpleProduct.tsx */
// TODO : 상품 전체 생성 화면
// TODO: import
import React, { useEffect, useState } from "react";
import TitleCom from "../../../components/common/TitleCom";
import ISimpleProduct from "../../../types/shop/ISimpleProduct";
import SimpleProductService from "../../../services/shop/SimpleProductService";
import ICode from "./../../../types/admin/code/ICode";
import CodeService from "../../../services/admin/code/CodeService";

function AddSimpleProduct() {
  // TODO: 변수 정의
  // 객체 초기화
  const initialSimpleProduct = {
    spno: null, // 상품종류코드
    codeId: 0, // 상품명
    title: "", // 이미지 경로
    imgPath: "", // 단가
    unitPrice: 0, // 사용여부
    useYn: "Y",
  };

  // TODO : select : code 데이터(배열) (반복문) 화면에 출력 할 변수
  const [code, setCode] = useState<Array<ICode>>([]);

  // SimpleProduct객체
  const [simpleProduct, setSimpleProduct] =
    useState<ISimpleProduct>(initialSimpleProduct);

  // 저장버튼 클릭후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);

  // input 태그에 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // 화면값
    setSimpleProduct({ ...simpleProduct, [name]: value }); // 변수저장
  };

  // Select 태그에 수동 바인딩
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target; // 화면값
    setSimpleProduct({ ...simpleProduct, [name]: value }); // 변수저장
  };

  // TODO: 함수 정의
  // 저장 함수
  const saveSimpleProduct = () => {
    // 임시 객체 : 변수 <- 화면값
    var data = {
      codeId: simpleProduct.codeId,
      title: simpleProduct.title,
      imgPath: simpleProduct.imgPath,
      unitPrice: simpleProduct.unitPrice,
      useYn: simpleProduct.useYn,
    };

    SimpleProductService.create(data) // 저장 요청
      .then((response: any) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 새폼 보여주기 함수 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
  const newSimpleProduct = () => {
    setSimpleProduct(initialSimpleProduct); // SimpleProduct 초기화
    setSubmitted(false); // submitted 변수 초기화
  };

  //   TODO : select 태그에 반복문으로 code 데이터를 출력하는 함수
  //   TODO : code 전체 조회 함수(페이징 없음)
  const retrieveCodeAll = () => {
    CodeService.getAllNoPage()
      .then((response) => {
        setCode(response.data);
        console.log("code", response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  useEffect(() => {
    retrieveCodeAll(); // code 전체조회(페이징 없음)
  }, []);

  return (
    // TODO: JSX
    <div className="row">
      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newSimpleProduct}>
            Add
          </button>
        </div>
      ) : (
        <>
          {/* 제목 start */}
          <TitleCom title="Add SimpleProduct" />
          {/* 제목 end */}

          {/* 입력 양식 + 저장 시작 */}
          <div className="col-6 mx-auto">
            {/* Code Id label 시작 */}
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="unitPrice" className="col-form-label">
                  Code Id
                </label>
              </div>
              {/* Code Id label 끝 */}

              {/* select codeId + 반복문 */}
              <div className="col-9">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  id="codeId"
                  value={simpleProduct.codeId}
                  onChange={handleSelectChange}
                  name="codeId"
                >
                  <option>selected item</option>
                  {/* JavaScript의 조건부 렌더링을 사용하여 code 배열이 존재하는 경우에만 작동합니다. */}
                  {/* code 배열을 필터링하고 매핑하여 동적으로 <option> 요소를 생성합니다. */}
                  {code &&
                    code
                      .filter((data) => data.categoryId == 100)
                      .map((data) => (
                        <option key={data.codeId} value={data.codeId}>
                          {data.codeName}
                        </option>
                      ))}
                </select>
              </div>
            </div>

            {/* Title label 시작 */}
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="title" className="col-form-label">
                  Title
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="title"
                  required
                  className="form-control"
                  value={simpleProduct.title}
                  onChange={handleInputChange}
                  placeholder="title"
                  name="title"
                />
              </div>
            </div>
            {/* Title label 끝 */}

            {/* Image Path label 시작 */}
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="imgPath" className="col-form-label">
                  Image Path
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="imgPath"
                  required
                  className="form-control"
                  value={simpleProduct.imgPath}
                  onChange={handleInputChange}
                  placeholder="imgPath"
                  name="imgPath"
                />
              </div>
            </div>
            {/* Image Path label 끝 */}

            {/* Unit Price label 시작 */}
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="unitPrice" className="col-form-label">
                  Unit Price
                </label>
              </div>
              <div className="col-9">
                <input
                  type="number"
                  id="unitPrice"
                  required
                  className="form-control"
                  value={simpleProduct.unitPrice}
                  onChange={handleInputChange}
                  placeholder="unitPrice"
                  name="unitPrice"
                />
              </div>
            </div>
            {/* Unit Price label 끝 */}

            {/* Use Y/N label 시작 */}
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="unitPrice" className="col-form-label">
                  Use Y/N
                </label>
              </div>
              {/* select useYn */}
              <div className="col-9">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  id="useYn"
                  value={simpleProduct.useYn}
                  onChange={handleSelectChange}
                  name="useYn"
                >
                  <option value="Y">사용함</option>
                  <option value="N">사용 안함</option>
                </select>
              </div>
            </div>
            {/* Use Y/N label 끝 */}

            {/* 저장 버튼 시작 */}
            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveSimpleProduct}
                className="btn btn-outline-primary ms-2 col"
              >
                Submit
              </button>
            </div>
            {/* 저장 버튼 끝 */}
          </div>
          {/* 입력 양식 끝 */}
        </>
      )}
    </div>
  );
}

export default AddSimpleProduct;
