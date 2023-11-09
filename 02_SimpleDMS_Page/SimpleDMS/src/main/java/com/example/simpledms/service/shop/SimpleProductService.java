package com.example.simpledms.service.shop;
// import
import com.example.simpledms.model.entity.shop.SimpleProduct;
import com.example.simpledms.repository.shop.SimpleProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.simpledms.service.shop
 * fileName : SimpleProductService
 * author : L.DH
 * date : 2023-11-08
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-11-08         L.DH         최초 생성
 */
@Service
public class SimpleProductService {

    @Autowired
    SimpleProductRepository simpleProductRepository; // DI 가져오기

    // dname like 조회 + 페이징
    public Page<SimpleProduct> findAllByTitleContaining(String title, Pageable pageable) {
        Page<SimpleProduct> page
                = simpleProductRepository.findAllByTitleContaining(title, pageable);
        return page;
    }

    // 상세 조회(1건 조회)
    public Optional<SimpleProduct> findById(int sono) {
        Optional<SimpleProduct> optionalSimpleProduct
                = simpleProductRepository.findById(sono);
        return optionalSimpleProduct;
    }

    // 저장 함수(수정 함수)
    public SimpleProduct save(SimpleProduct simpleProduct) {
        SimpleProduct simpleProduct2 = simpleProductRepository.save(simpleProduct);
        return simpleProduct2; // 저장된 객체
    }

} // end of class
