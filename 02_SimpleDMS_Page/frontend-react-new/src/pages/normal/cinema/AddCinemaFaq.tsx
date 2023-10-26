// AddCinemaCinemaFaq.tsx : rfce

import React, { useState } from "react";
import TitleCom from "../../../components/common/TitleCom";
import ICinemaFaq from "../../../types/normal/ICinemaFaq";
import CinemaFaqService from "../../../services/normal/CinemaFaqService";

function AddCinemaFaq() {
  // TODO: 변수 정의
  const initialCinemaFaq = {
    cfno: null,
    question: "",
    answer: "",
    sortOrder: "",
  };

  // cinemaFaq객체
  const [cinemaFaq, setCinemafaq] = useState<ICinemaFaq>(initialCinemaFaq);
  // 저장버튼 클릭후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);

  // TODO: 함수 정의
  // input 태그에 수동 바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // 화면값
    setCinemafaq({ ...cinemaFaq, [name]: value }); // 변수저장
  };
  // 저장 함수
  const saveCinemaFaq = () => {
    // 임시 객체
    var data = {
      question: cinemaFaq.question,
      answer: cinemaFaq.answer,
      sortOrder: cinemaFaq.sortOrder,
    };

    CinemaFaqService.create(data) // 저장 요청
      .then((response: any) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 새폼 보여주기 함수 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
  const newCinemaFaq = () => {
    setCinemafaq(initialCinemaFaq); // faq 초기화
    setSubmitted(false); // submitted 변수 초기화
  };

  return (
    // TODO: JSX
    <div className="row">
      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCinemaFaq}>
            Add
          </button>
        </div>
      ) : (
        <>
          {/* 제목 start */}
          <TitleCom title="Add Cinema Faq" />
          {/* 제목 end */}

          <div className="col-6 mx-auto">
            {/* question 입력창 시작 */}
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="question" className="col-form-label">
                  Question
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="question"
                  required
                  className="form-control"
                  value={cinemaFaq.question}
                  onChange={handleInputChange}
                  placeholder="question"
                  name="question"
                />
              </div>
            </div>
            {/* question 입력창 끝 */}

            {/* answer 입력창 시작 */}
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="answer" className="col-form-label">
                  Answer
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="answer"
                  required
                  className="form-control"
                  value={cinemaFaq.answer}
                  onChange={handleInputChange}
                  placeholder="answer"
                  name="answer"
                />
              </div>
            </div>
            {/* answer 입력창 끝 */}

            {/* sortOrder 입력창 시작 */}
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="sortOrder" className="col-form-label">
                  Sort Order
                </label>
              </div>
              <div className="col-9">
                <input
                  type="number"
                  id="sortOrder"
                  required
                  className="form-control"
                  value={cinemaFaq.sortOrder}
                  onChange={handleInputChange}
                  placeholder="sortOrder"
                  name="sortOrder"
                />
              </div>
            </div>
            {/* sortOrder 입력창 끝 */}

            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveCinemaFaq}
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

export default AddCinemaFaq;
