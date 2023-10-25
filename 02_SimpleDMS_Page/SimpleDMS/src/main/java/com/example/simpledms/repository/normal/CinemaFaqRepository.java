package com.example.simpledms.repository.normal;

import com.example.simpledms.model.entity.normal.CinemaFaq;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.example.simpledms.repository.normal
 * fileName : CinemaFaqRepository
 * author : L.DH
 * date : 2023-10-25
 * description : JPA CRUD 인터페이스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-25         L.DH         최초 생성
 */
@Repository
public interface CinemaFaqRepository extends JpaRepository<CinemaFaq, Integer> {
    //    question like 검색 + 정렬(sortOrder desc)
    Page<CinemaFaq> findAllByQuestionContainingOrderBySortOrderDesc(String question, Pageable pageable);
}
