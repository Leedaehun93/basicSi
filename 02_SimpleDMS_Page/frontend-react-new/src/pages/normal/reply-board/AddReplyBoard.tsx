// AddReplyBoard.tsx : rfce

import React, { useState } from "react";
import IReplyBoard from "../../../types/normal/IReplyBoard";
import ReplyBoardService from "../../../services/normal/ReplyBoardService";
import TitleCom from "../../../components/common/TitleCom";

function AddReplyBoard() {
  // TODO: 변수 정의
  // 객체 초기화
  const initialReplyBoard = {
    bid: null,
    boardTitle: "",
    boardContent: "",
    boardWriter: "",
    viewCnt: 0,
    boardGroup: null,
    boardParent: 0
  };

  // replyBoard 객체
  const [replyBoard, setReplyBoard] = useState<IReplyBoard>(initialReplyBoard);
  // 저장버튼 클릭후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);

  // input 태그에 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // 화면값
    setReplyBoard({ ...replyBoard, [name]: value }); // 변수저장
  };

  // TODO: 함수 정의
  // 저장 함수
  const saveReplyBoard = () => {
    // 임시 객체
    var data = {
      boardTitle: replyBoard.boardTitle,
      boardContent: replyBoard.boardContent,
      boardWriter: replyBoard.boardWriter,
      viewCnt: replyBoard.viewCnt,
      boardGroup: null, // 입력시 제외
      boardParent: 0 // 입력시 제외
    };

    ReplyBoardService.createBoard(data) // 저장 요청
      .then((response: any) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 새폼 보여주기 함수 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
  const newReplyBoard = () => {
    setReplyBoard(initialReplyBoard); // 초기화
    setSubmitted(false); // submitted 변수 초기화
  };

  return (
    // TODO: JSX
    <div className="row">
      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newReplyBoard}>
            Add
          </button>
        </div>
      ) : (
        <>
          {/* 제목 start */}
          <TitleCom title="Add Reply Board" />
          {/* 제목 end */}

          <div className="col-6 mx-auto">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="boardTitle" className="col-form-label">
                  BoardTitle
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="boardTitle"
                  required
                  className="form-control"
                  value={replyBoard.boardTitle}
                  onChange={handleInputChange}
                  placeholder="boardTitle"
                  name="boardTitle"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="boardContent" className="col-form-label">
                  BoardContent
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="boardContent"
                  required
                  className="form-control"
                  value={replyBoard.boardContent}
                  onChange={handleInputChange}
                  placeholder="boardContent"
                  name="boardContent"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="boardWriter" className="col-form-label">
                  BoardWriter
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="boardWriter"
                  required
                  className="form-control"
                  value={replyBoard.boardWriter}
                  onChange={handleInputChange}
                  placeholder="boardWriter"
                  name="boardWriter"
                />
              </div>
            </div>

            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveReplyBoard}
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

export default AddReplyBoard;
