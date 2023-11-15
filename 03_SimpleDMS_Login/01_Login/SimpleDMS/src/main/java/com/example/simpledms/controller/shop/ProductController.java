package com.example.simpledms.controller.shop;
// TODO: import
import com.example.simpledms.model.entity.shop.Product;
import com.example.simpledms.service.shop.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.controller.shop
 * fileName : ProductController
 * author : L.DH
 * date : 2023-11-08
 * description : 쇼핑
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-11-08         L.DH         최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api/shop")
public class ProductController {
    @Autowired
    ProductService productService; // DI 가져오기

    //     전체 조회 + pname like 검색
    @GetMapping("/product")
    public ResponseEntity<Object> findAllByPnameContaining(
            // TODO : 페이징 처리를 위한 공통 @RequestParam
            @RequestParam(defaultValue = "") String pname,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
            Pageable pageable = PageRequest.of(page, size);

//          전체 조회(pname="") + like 검색(pname="S")
            Page<Product> productPage
                    = productService.findAllByPnameContaining(pname, pageable);

//         리액트 전송 : 부서 배열, 페이징 정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("Product", productPage.getContent()); // product 배열
            response.put("currentPage", productPage.getNumber()); // 현재 페이지 번호
            response.put("totalItems", productPage.getTotalElements()); // 총 건수(개수)
            response.put("totalPages", productPage.getTotalPages()); // 총 페이지 수

            if (productPage.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
//        예외 처리
        } catch (Exception e) {
//          로그 찍기
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    저장 함수
    @PostMapping("/product")
    public ResponseEntity<Object> create(@RequestBody Product product) {

        try {
            Product product2 = productService.save(product); // db 저장

            return new ResponseEntity<>(product2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    수정 함수
    @PutMapping("/product/{pno}")
    public ResponseEntity<Object> update(
            @PathVariable int pno,
            @RequestBody Product product) {

        try {
            Product product2 = productService.save(product); // db 수정

            return new ResponseEntity<>(product2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //      상세조회
    @GetMapping("/product/{pno}")
    public ResponseEntity<Object> findById(@PathVariable int pno) {

        try {
//            상세조회 실행
            Optional<Product> optionalProduct = productService.findById(pno);

            if (optionalProduct.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalProduct.get(), HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}