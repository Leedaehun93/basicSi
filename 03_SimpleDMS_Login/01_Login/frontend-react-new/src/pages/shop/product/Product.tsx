/* C:\Work\07_Si\02_SimpleDMS_Page\frontend-react-new\src\pages\shop\product\Product.tsx */
// Product.tsx : rfce
// 상세조회 페이지(연습)
import React, { useEffect, useState } from "react";
import TitleCom from "../../../components/common/TitleCom";
import { useParams } from "react-router-dom";
import ICode from "../../../types/admin/code/ICode";
import IProduct from "../../../types/shop/IProduct";
import ProductService from "../../../services/shop/ProductService";
import CodeService from "../../../services/admin/code/CodeService";

function Product() {
  // todo: 변수 정의
  // 전체조회 페이지에서 전송한 기본키(pno)
  const { pno } = useParams();
  // 강제페이지 이동 함수
  //   let navigate = useNavigate();

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

  //   todo: code 배열 변수 : select 태그용
  const [code, setCode] = useState<Array<ICode>>([]);
  // 수정될객체 : product
  const [product, setProduct] = useState<IProduct>(initialProduct);
  // 화면에 수정 성공에 메세지 찍기 변수
  const [message, setMessage] = useState<string>("");

  // todo: 함수 정의
  // 상세조회 함수
  const getProduct = (spno: string) => {
    ProductService.get(spno) // 벡엔드로 상세조회 요청
      .then((response: any) => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 화면이 뜰때 실행되는 이벤트 + pno 값이 바뀌면 실행
  useEffect(() => {
    if (pno) getProduct(pno);
  }, [pno]);

  // input 태그 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  // todo: select 태그 수동 바인딩
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  // 수정 함수
  const updateProduct = () => {
    ProductService.update(product.pno, product) // 벡엔드로 수정요청
      .then((response: any) => {
        console.log(response.data);
        setMessage("수정되었습니다.");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  //   todo: select 태그 에 반복문으로 code 데이터를 출력하는 함수
  //   todo: code 전체 조회 함수(페이징 없음)
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
    // 여기
    <>
      {/* 제목 start */}
      <TitleCom title="Product Detail" />
      {/* 제목 end */}

      <>
        {product ? (
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
                onClick={updateProduct}
                className="btn btn-outline-success ms-2 col"
              >
                Update
              </button>
            </div>
            {message && (
              <p className="alert alert-success mt-3 text-center">{message}</p>
            )}
          </div>
        ) : (
          <div className="col-6 mx-auto">
            <br />
            <p>Please click on a ProductNop...</p>
          </div>
        )}
      </>
    </>
  );
}

export default Product;