// AddThreadBoard.tsx : rfce

import React, { useState } from 'react'
import TitleCom from '../../../components/common/TitleCom'
import IThreadBoard from '../../../types/normal/IThreadBoard';
import ThreadBoardService from '../../../services/normal/ThreadBoardService';

function AddThreadBoard() {
  // TODO: 변수 정의
  // 객체 초기화
  const initialThreadBoard = {
    tid: null,
    subject: "",
    mainText: "",
    writer: "",
    views: 0,
    tgroup: null,
    tparent: 0
  };

  // threadBoard 객체
  const [threadBoard, setThreadBoard] = useState<IThreadBoard>(initialThreadBoard);
  // 저장버튼 클릭후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);

  // input 태그에 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // 화면값
    setThreadBoard({ ...threadBoard, [name]: value }); // 변수저장
  };

  // TODO: 함수 정의
  // 저장 함수
  const saveThreadBoard = () => {
    // 임시 객체
    var data = {
        subject: threadBoard.subject,
        mainText: threadBoard.mainText,
        writer: threadBoard.writer,
        views: 0,
        tgroup:null, // 입력시 제외
        tparent: 0 // 입력시 제외
    };

    ThreadBoardService.createBoard(data) // 저장 요청
      .then((response: any) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 새폼 보여주기 함수 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
  const newThreadBoard = () => {
    setThreadBoard(initialThreadBoard); // 초기화
    setSubmitted(false); // submitted 변수 초기화
  };

  return (
        // TODO: JSX
    <div className="row">
      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newThreadBoard}>
            Add
          </button>
        </div>
      ) : (
        <>
          {/* 제목 start */}
          <TitleCom title="Add Thread Board" />
          {/* 제목 end */}

          <div className="col-6 mx-auto">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="subject" className="col-form-label">
                  Subject
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
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="mainText" className="col-form-label">
                  MainText
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
                  Writer
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

            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveThreadBoard}
                className="btn btn-outline-primary ms-2 col"
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default AddThreadBoard