import React, { useEffect, useState } from "react";
import IDept from "../../../types/basic/IDept";
import TitleCom from "../../../components/common/TitleCom";
import DeptService from "../../../service/basic/DeptService";

function AddDept() {
  // TODO: 변수 정의
  // 객체 초기화
  const initialDept = {
    dno: null,
    dname: "",
    loc: "",
  };

  // 부서객체
  const [dept, setDept] = useState<IDept>(initialDept);
  // 저장버튼 클릭후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);

  // input 태그에 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // 화면값
    setDept({ ...dept, [name]: value }); // 변수저장
  };
  
  // TODO: 함수 정의
  // 저장 함수
  const saveDept = () => {
    // 임시 부서 객체
    var data = {
      dname: dept.dname,
      loc: dept.loc,
    };

    DeptService.create(data) // 저장 요청
      .then((response: any) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 새폼 보여주기 함수 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
  const newDept = () => {
    setDept(initialDept); // 부서 초기화
    setSubmitted(false); // submitted 변수 초기화
  };

  return (
    // TODO: JSX
    <div className="row">
      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newDept}>
            Add
          </button>
        </div>
      ) : (
        <>
          {/* 제목 start */}
          <TitleCom title="Add Dept" />
          {/* 제목 end */}

          <div className="col-6 mx-auto">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="dname" className="col-form-label">
                  Dname
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="dname"
                  required
                  className="form-control"
                  value={dept.dname}
                  onChange={handleInputChange}
                  placeholder="dname"
                  name="dname"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="loc" className="col-form-label">
                  Loc
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="loc"
                  required
                  className="form-control"
                  value={dept.loc}
                  onChange={handleInputChange}
                  placeholder="loc"
                  name="loc"
                />
              </div>
            </div>

            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveDept}
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

export default AddDept;
