// Dept.tsx : rfce

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TitleCom from "../../../components/common/TitleCom";
import IDept from "../../../types/basic/IDept";
import DeptService from "../../../service/basic/DeptService";

function Dept() {
  // TODO: 변수 정의
  // 전체조회 페이지에서 전송한 기본키(dno)
  const { dno } = useParams();
  // 강제페이지 이동 함수
  let navigate = useNavigate();

  // 객체 초기화(상세조회 : 기본키 있음)
  const initialDept = {
    dno: "",
    dname: "",
    loc: "",
  };

  // 수정 될 객체
  const [dept, setDept] = useState<IDept>(initialDept);
  // 화면에 수정 성공에 메세지 찍기 변수
  const [message, setMessage] = useState<string>("");

  // TODO: 함수 정의
  // 상세조회 함수
  const getDept = (dno: string) => {
    DeptService.get(dno) // 벡엔드로 상세조회 요청
      .then((response: any) => {
        setDept(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 화면이 뜰때 실행되는 이벤트 + dno 값이 바뀌면 실행
  useEffect(() => {
    if (dno) getDept(dno);
  }, [dno]);

  // input 태그 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDept({ ...dept, [name]: value });
  };

  // 수정 함수
  const updateDept = () => {
    DeptService.update(dept.dno, dept) // 벡엔드로 수정요청
      .then((response: any) => {
        console.log(response.data);
        setMessage("The dept was updated successfully!");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 삭제 함수
  const deleteDept = () => {
    DeptService.remove(dept.dno) // 벡엔드로 삭제요청
      .then((response: any) => {
        console.log(response.data);
        // 페이지 이동
        navigate("/dept");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    // TODO: JSX
    <>
      {/* 제목 start */}
      <TitleCom title="Dept Detail" />
      {/* 제목 end */}

      <>
        {dept ? (
          <div className="col-6 mx-auto">
            <form>
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
            </form>

            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={deleteDept}
                className="btn btn-outline-danger ms-3 col"
              >
                Delete
              </button>

              <button
                type="submit"
                onClick={updateDept}
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
            <p>Please click on a Dept...</p>
          </div>
        )}
      </>
    </>
  );
}

export default Dept;
