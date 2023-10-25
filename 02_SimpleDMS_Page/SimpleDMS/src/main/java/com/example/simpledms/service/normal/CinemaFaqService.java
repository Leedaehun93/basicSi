package com.example.simpledms.service.normal;

import com.example.simpledms.model.entity.normal.CinemaFaq;
import com.example.simpledms.model.entity.normal.Faq;
import com.example.simpledms.repository.normal.CinemaFaqRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * packageName : com.example.simpledms.service.normal
 * fileName : CinemaFaqService
 * author : L.DH
 * date : 2023-10-25
 * description : CinemaFaq 서비스(업무 로직 : 비지니스 로직)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-25         L.DH         최초 생성
 */
@Service
public class CinemaFaqService {

    @Autowired
    CinemaFaqRepository cinemaFaqRepository; // DI

    //    전체 조회 + like 검색 + 정렬
    public Page<CinemaFaq> findAllByQuestionContainingOrderBySortOrderDesc(String question, Pageable pageable) {
        Page<CinemaFaq> page
                = cinemaFaqRepository
                .findAllByQuestionContainingOrderBySortOrderDesc(question, pageable);

        return page;
    }

    //    저장함수(수정함수)
    public CinemaFaq save(CinemaFaq cinemaFaq) {
        CinemaFaq cinemaFaq2 = cinemaFaqRepository.save(cinemaFaq);
        return cinemaFaq2;
    }
}