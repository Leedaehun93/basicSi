package com.example.simpledms.controller.normal;

import com.example.simpledms.model.entity.normal.CinemaFaq;
import com.example.simpledms.model.entity.normal.Faq;
import com.example.simpledms.service.normal.CinemaFaqService;
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

/**
 * packageName : com.example.simpledms.controller.normal
 * fileName : CinemaFaqController
 * author : L.DH
 * date : 2023-10-25
 * description : CinemaFaq 컨트롤러
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-25         L.DH         최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api/normal")
public class CinemaFaqController {

    @Autowired
    CinemaFaqService cinemaFaqService; // DI

    //    전체 조회 + question like 검색 + 정렬
    @GetMapping("/cinema-faq")
    public ResponseEntity<Object> findAllByQuestionContaining(
            @RequestParam(defaultValue = "") String question,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
            Pageable pageable = PageRequest.of(page, size);

            Page<CinemaFaq> cinemaFaqPage
                    = cinemaFaqService.findAllByQuestionContainingOrderBySortOrderDesc(question, pageable);

//          리액트 전송 : cinemaFaq배열 , 페이징정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("cinemaFaq", cinemaFaqPage.getContent()); // cinemaFaq배열
            response.put("currentPage", cinemaFaqPage.getNumber()); // 현재페이지번호
            response.put("totalItems", cinemaFaqPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", cinemaFaqPage.getTotalPages()); // 총페이지수

            if (cinemaFaqPage.isEmpty() == false) {
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


    //    저장 함수
    @PostMapping("/cinema-faq")
    public ResponseEntity<Object> create(@RequestBody CinemaFaq cinemaFaq) {

        try {
            // TODO: log.debug(함수명()); 찍어서 에러 확인하기
            log.debug("cinemaFaq" + cinemaFaq);
            CinemaFaq cinemaFaq2 = cinemaFaqService.save(cinemaFaq); // db 저장

            return new ResponseEntity<>(cinemaFaq2, HttpStatus.OK);
        } catch (Exception e) {
            // TODO: log.debug(e.getMessage()); 찍어서 에러 확인하기
            log.debug(e.getMessage());
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
