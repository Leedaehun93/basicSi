package com.example.simpledms.repository.basic;

import com.example.simpledms.model.entity.basic.Qna;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.example.simpledms.repository
 * fileName : QnaRepository
 * author : L.DH
 * date : 2023-10-24
 * description : Qna CRUD Repository
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-24         L.DH         최초 생성
 */
@Repository
public interface QnaRepository extends JpaRepository<Qna, Integer> {
//    1) question(질문) like 검색
    Page<Qna> findAllByQuestionContaining(String question, Pageable pageable);

//    2) questioner(질문자) like 검색
Page<Qna> findAllByQuestionerContaining(String questioner, Pageable pageable);
}
