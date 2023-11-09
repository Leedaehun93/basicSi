package com.example.simpledms.service.shop;

import com.example.simpledms.model.entity.shop.Product;
import com.example.simpledms.repository.shop.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.simpledms.service.shop
 * fileName : ProductService
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
public class ProductService {

    @Autowired
    ProductRepository productRepository; // DI 가져오기

    // dname like 조회 + 페이징
    public Page<Product> findAllByPnameContaining(String pname, Pageable pageable) {
        Page<Product> page
                = productRepository.findAllByPnameContaining(pname, pageable);
        return page;
    }

    // 상세 조회(1건 조회)
    public Optional<Product> findById(int pno) {
        Optional<Product> optionalProduct
                = productRepository.findById(pno);
        return optionalProduct;
    }

    // 저장 함수(수정 함수)
    public Product save(Product product) {
        Product Product2 = productRepository.save(product);
        return Product2; // 저장된 객체
    }

} // end of class
