package com.example.simpledms.service.basic;

import com.example.simpledms.model.entity.basic.Qna;
import com.example.simpledms.repository.basic.QnaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.simpledms.service.basic
 * fileName : QnaService
 * author : L.DH
 * date : 2023-10-24
 * description : Qna 서비스(업무 로직 : 비지니스 로직)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-24         L.DH         최초 생성
 */
@Service
public class QnaService {

    @Autowired
    QnaRepository qnaRepository; // DI 가져오기

//    question like 검색
    public Page<Qna> findAllByQuestionContaining(String question, Pageable pageable) {
        Page<Qna> page
                = qnaRepository.findAllByQuestionContaining(question, pageable);

        return page;
    }

//    questioner like 검색
    public Page<Qna> findAllByQuestionerContaining(String question, Pageable pageable) {
        Page<Qna> page
                = qnaRepository.findAllByQuestionerContaining(question, pageable);

        return page;
    }

//    저장 함수(수정 함수)
    public Qna save(Qna qna) {
        Qna qna2 = qnaRepository.save(qna);
        return qna2;
    }

    // 상세 조회(1건 조회)
    public Optional<Qna> findById(int qno) {
        Optional<Qna> optionalQna
                = qnaRepository.findById(qno);
        return optionalQna;
    }

    // 삭제 함수
    public boolean removeById(int qno) {
        if (qnaRepository.existsById(qno)) { // qno 있는지 확인
            qnaRepository.deleteById(qno);// 삭제 진행
            return true;
        }
        return false;
    }
}
