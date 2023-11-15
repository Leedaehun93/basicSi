/* C:\Work\07_Si\02_SimpleDMS_Page\frontend-react-new\src\pages\shop\product\AddProduct.tsx */
// 상품추가 페이지(연습) , 관리자용
import React, { useState } from "react";
import TitleCom from "../../../components/common/TitleCom";
import IProduct from "./../../../types/shop/IProduct";
import ICode from "../../../types/admin/code/ICode";
import ProductService from "../../../services/shop/ProductService";

function AddProduct() {
  // todo: 변수 정의
  // todo: 객체 초기화
  const initialProduct = {
    pno: null,
    kindCode: 0,
    pname: "",
    image: "",
    unitPrice: 0,
    statusCode: 0,
    useYn: "Y",
  };

  // todo: code 배열객체 : select 태그의 값으로 들어갈 변수
  const [code, setCode] = useState<Array<ICode>>([]);
  // product 객체
  const [product, setProduct] = useState<IProduct>(initialProduct);
  // 저장버튼 클릭후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);

  // todo: 함수 정의
  // input 태그에 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // 화면값
    setProduct({ ...product, [name]: value }); // 변수저장
  };

  // todo: select 태그에 수동 바인딩
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target; // 화면값
    setProduct({ ...product, [name]: value }); // 변수저장
  };

  // 저장 함수
  const saveProduct = () => {
    // 임시 객체
    // 화면값 : product.속성명
    var data = {
      kindCode: product.kindCode,
      pname: product.pname,
      image: product.image,
      unitPrice: product.unitPrice,
      statusCode: product.statusCode,
      useYn: product.useYn,      
    };

    ProductService.create(data) // 저장 요청
      .then((response: any) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 새폼 보여주기 함수 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
  const newProduct = () => {
    setProduct(initialProduct); // 초기화
    setSubmitted(false); // submitted 변수 초기화
  };

  return (
    // 여기
    <div className="row">
      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newProduct}>
            Add
          </button>
        </div>
      ) : (
        <>
          {/* 제목 start */}
          <TitleCom title="Add Product" />
          {/* 제목 end */}

          <div className="col-6 mx-auto">
            {/* kind code start */}
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="kindCode" className="col-form-label">
                  kind Code
                </label>
              </div>
              <div className="col-9">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  id="kindCode"
                  value={product.kindCode}
                  onChange={handleSelectChange}
                  name="kindCode"
                >
                  <option>selected item</option>
                  {/* 상품종류유형 코드 */}
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
            {/* kind code end */}

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="pname" className="col-form-label">
                  Pname
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="pname"
                  required
                  className="form-control"
                  value={product.pname}
                  onChange={handleInputChange}
                  placeholder="pname"
                  name="pname"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="image" className="col-form-label">
                  Image Path
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="image"
                  required
                  className="form-control"
                  value={product.image}
                  onChange={handleInputChange}
                  placeholder="image"
                  name="image"
                />
              </div>
            </div>

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
                  value={product.unitPrice}
                  onChange={handleInputChange}
                  placeholder="unitPrice"
                  name="unitPrice"
                />
              </div>
            </div>

            {/* statusCode start */}
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="statusCode" className="col-form-label">
                  status Code
                </label>
              </div>
              <div className="col-9">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  id="statusCode"
                  value={product.statusCode}
                  onChange={handleSelectChange}
                  name="statusCode"
                >
                  <option>selected item</option>
                  {/* 200 : 상품상태유형 코드 */}
                  {code &&
                    code
                      .filter((data) => data.categoryId == 200)
                      .map((data) => (
                        <option key={data.codeId} value={data.codeId}>
                          {data.codeName}
                        </option>
                      ))}
                </select>
              </div>
            </div>
            {/* statusCode end */}

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
                  value={product.useYn}
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
                onClick={saveProduct}
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

export default AddProduct;