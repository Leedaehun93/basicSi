// ThreadBoard.tsx : 상세화면
import React, { useEffect, useState } from "react";
import TitleCom from "../../../components/common/TitleCom";
import { useNavigate, useParams } from "react-router-dom";
import IThreadBoard from "../../../types/normal/IThreadBoard";
import ThreadBoardService from "../../../services/normal/ThreadBoardService";

function ThreadBoard() {
  // TODO: 변수 정의
  // 전체조회 페이지에서 전송한 기본키(tid, boardParent)
  const { tid, tparent } = useParams();
  // 강제페이지 이동 함수
  let navigate = useNavigate();

  // 객체 초기화(상세조회 : 기본키 있음)
  const initialThreadBoard = {
    tid: null,
    subject: "",
    mainText: "",
    writer: "",
    views: 0,
    tgroup: null,
    tparent: 0,
  };

  // 수정될객체
  const [threadBoard, setThreadBoard] =
    useState<IThreadBoard>(initialThreadBoard);
  // 화면에 수정 성공에 메세지 찍기 변수
  const [message, setMessage] = useState<string>("");

  // TODO: 함수 정의
  // 상세조회 함수
  const getThreadBoard = (tid: string) => {
    ThreadBoardService.get(tid) // 벡엔드로 상세조회 요청
      .then((response: any) => {
        setThreadBoard(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 화면이 뜰때 실행되는 이벤트 + tid 값이 바뀌면 실행
  useEffect(() => {
    if (tid) getThreadBoard(tid);
  }, [tid]);

  // input 태그 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setThreadBoard({ ...threadBoard, [name]: value });
  };

  // 수정 함수
  const updateThreadBoard = () => {
    ThreadBoardService.update(threadBoard.tid, threadBoard) // 벡엔드로 수정요청
      .then((response: any) => {
        console.log(response.data);
        setMessage("threadboard 수정되었습니다!");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 삭제함수 : 게시물만 삭제
  const deleteThread = () => {
    ThreadBoardService.remove(threadBoard.tid) // 벡엔드로 삭제요청
      .then((response: any) => {
        console.log(response.data);
        // 페이지 이동
        navigate("/thread-board");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 삭제함수 : 게시물 + 답변글 2개 삭제 (그룹번호로 삭제)
  //   그룹번호(boardGroup) : 부모글번호 === 자식글번호
  const deleteThreadBoard = () => {
    ThreadBoardService.removeBoard(threadBoard.tgroup) // 벡엔드로 삭제요청
      .then((response: any) => {
        console.log(response.data);
        // 페이지 이동
        navigate("/thread-board");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    // TODO: JSX
    <>
      {/* 제목 start */}
      <TitleCom title="Thread Board Detail" />
      {/* 제목 end */}

      <>
        {threadBoard ? (
          <div className="col-6 mx-auto">
            <form>
              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="subject" className="col-form-label">
                    subject
                  </label>
                </div>

                <div className="col-9">
                  <input
                    type="text"
                    id="subject"
                    required
                    className="form-control"
                    value={threadBoard.subject}
                    onChange={handleInputChange}
                    placeholder="subject"
                    name="subject"
                    disabled={tparent != "0" ? true : false}
                  />
                </div>
              </div>

              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="mainText" className="col-form-label">
                    mainText
                  </label>
                </div>

                <div className="col-9">
                  <input
                    type="text"
                    id="mainText"
                    required
                    className="form-control"
                    value={threadBoard.mainText}
                    onChange={handleInputChange}
                    placeholder="mainText"
                    name="mainText"
                  />
                </div>
              </div>

              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="writer" className="col-form-label">
                    writer
                  </label>
                </div>

                <div className="col-9">
                  <input
                    type="text"
                    id="writer"
                    required
                    className="form-control"
                    value={threadBoard.writer}
                    onChange={handleInputChange}
                    placeholder="writer"
                    name="writer"
                  />
                </div>
              </div>
            </form>

            {/* tparent "0" 아니면 답변글임 */}
            <div className="row g-3 mt-3 mb-3">
              {tparent != "0" ? (
                <button
                  className="btn btn-outline-primary ms-3 col"
                  onClick={deleteThread}
                >
                  Delete
                </button>
              ) : (
                <button
                  className="btn btn-outline-danger ms-3 col"
                  onClick={deleteThreadBoard}
                >
                  Delete
                </button>
              )}

              <button
                type="submit"
                className="btn btn-outline-success ms-2 col"
                onClick={updateThreadBoard}
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
            <p>Please click on a Thread Board...</p>
          </div>
        )}
      </>
    </>
  );
}

export default ThreadBoard;
