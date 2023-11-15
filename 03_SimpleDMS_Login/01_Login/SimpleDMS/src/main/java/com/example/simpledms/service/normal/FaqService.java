package com.example.simpledms.service.normal;

import com.example.simpledms.model.entity.basic.Dept;
import com.example.simpledms.model.entity.normal.Faq;
import com.example.simpledms.repository.normal.FaqRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.simpledms.service.normal
 * fileName : FaqService
 * author : L.DH
 * date : 2023-10-24
 * description : Faq 서비스(업무 로직 : 비지니스 로직)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-24         L.DH         최초 생성
 */
@Service
public class FaqService {

    @Autowired
    FaqRepository faqRepository; // DI

    // title like 조회 + 페이징
    public Page<Faq> findAllByTitleContaining(String title, Pageable pageable) {
        Page<Faq> page
                = faqRepository.findAllByTitleContaining(title, pageable);
        return page;
    }

    // 저장(수정) 함수
    public Faq save(Faq faq) {
        Faq faq2 = faqRepository.save(faq);
        return faq2;
    }

    // 상세 조회(1건 조회)
    public Optional<Faq> findById(int no) {
        Optional<Faq> optionalFaq
                = faqRepository.findById(no);
        return optionalFaq;
    }

    // 삭제 함수
    public boolean removeById(int no) {
        if (faqRepository.existsById(no)) { // no 있는지 확인
            faqRepository.deleteById(no);// 삭제 진행
            return true;
        }
        return false;
    }
}
