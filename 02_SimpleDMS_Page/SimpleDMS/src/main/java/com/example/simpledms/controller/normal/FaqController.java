package com.example.simpledms.controller.normal;

import com.example.simpledms.model.entity.basic.Dept;
import com.example.simpledms.model.entity.normal.Faq;
import com.example.simpledms.service.normal.FaqService;
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
 * packageName : com.example.simpledms.controller.normal
 * fileName : FaqController
 * author : GGG
 * date : 2023-10-24
 * description : Faq 컨트롤러
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-10-24         GGG          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api/normal")
public class FaqController {

    @Autowired
    FaqService faqService; // DI

    //    전체 조회 + title like 검색
    @GetMapping("/faq")
    public ResponseEntity<Object> findAllByTitleContaining(
            @RequestParam(defaultValue = "") String title,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
            Pageable pageable = PageRequest.of(page, size);

            Page<Faq> faqPage
                    = faqService.findAllByTitleContaining(title, pageable);

//          리액트 전송 : faq배열 , 페이징정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("faq", faqPage.getContent()); // faq배열
            response.put("currentPage", faqPage.getNumber()); // 현재페이지번호
            response.put("totalItems", faqPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", faqPage.getTotalPages()); // 총페이지수

            if (faqPage.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 저장 함수
    @PostMapping("/faq")
    public ResponseEntity<Object> create(@RequestBody Faq faq) {
        try {
            Faq faq2 = faqService.save(faq);
            return new ResponseEntity<>(faq2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 수정 함수
    @PutMapping("/faq/{no}")
    public ResponseEntity<Object> update(
            @PathVariable int no,
            @RequestBody Faq faq) {
        try {
            Faq faq2 = faqService.save(faq); // db 수정
            return new ResponseEntity<>(faq2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 상세 조회(1건 조회)
    @GetMapping("/faq/{no}")
    public ResponseEntity<Object> findById(@PathVariable int no) {
        try {
//            상세조회 실행
            Optional<Faq> optionalFaq = faqService.findById(no);

            if (optionalFaq.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalFaq.get(), HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 삭제 함수
    @DeleteMapping("/faq/deletion/{no}")
    public ResponseEntity<Object> delete(@PathVariable int no) {
        // 프론트엔드 쪽으로 상태정보를 보내줌
        try {
            // 삭제 함수 호출
            boolean bSuccess = faqService.removeById(no);
            if (bSuccess == true) {
                // delete 문이 성공했을 경우
                return new ResponseEntity<>(HttpStatus.OK);
            }
            // delete 실패했을 경우( 0건 삭제가 될경우 )
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            // DB 에러가 날경우
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}