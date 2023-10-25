package com.example.simpledms.controller.basic;

import com.example.simpledms.model.entity.basic.Dept;
import com.example.simpledms.model.entity.basic.Qna;
import com.example.simpledms.service.basic.QnaService;
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
 * packageName : com.example.simpledms.controller.basic
 * fileName : QnaController
 * author : L.DH
 * date : 2023-10-24
 * description : Qna 컨트롤러
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-24         L.DH         최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api/basic")
public class QnaController {

    @Autowired
    QnaService qnaService; // DI 가져오기

    // 전체 조회 + question/questioner like 검색
    @GetMapping("/qna")
    public ResponseEntity<Object> findAllByContaining(
            // TODO : 페이징 처리를 위한 공통 @RequestParam
            @RequestParam(defaultValue = "question") String searchSelect, @RequestParam(defaultValue = "") String searchKeyword, @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "3") int size

    ) {
        try {
            Pageable pageable = PageRequest.of(page, size);

            Page<Qna> qnaPage; // qna 페이지 정의

            if (searchSelect.equals("question")) {
                // question like 검색
                qnaPage = qnaService.findAllByQuestionContaining(searchKeyword, pageable);
            } else {
                // questioner like 검색
                qnaPage = qnaService.findAllByQuestionerContaining(searchKeyword, pageable);
            }

//          리액트 전송 : qna배열 , 페이징정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("qna", qnaPage.getContent()); // qna배열
            response.put("currentPage", qnaPage.getNumber()); // 현재페이지번호
            response.put("totalItems", qnaPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", qnaPage.getTotalPages()); // 총페이지수

            if (qnaPage.isEmpty() == false) {
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

    // 저장 함수
    @PostMapping("/qna")
    public ResponseEntity<Object> create(@RequestBody Qna qna) {
        try {
            Qna qna2 = qnaService.save(qna); // db 저장
            return new ResponseEntity<>(qna2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    수정 함수
    @PutMapping("/qna/{qno}")
    public ResponseEntity<Object> update(@PathVariable int qno, @RequestBody Qna qna) {

        try {
            Qna qna2 = qnaService.save(qna); // db 수정

            return new ResponseEntity<>(qna2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 상세조회
    @GetMapping("/qna/{qno}")
    public ResponseEntity<Object> findById(@PathVariable int qno) {

        try {
//            상세조회 실행
            Optional<Qna> optionalQna = qnaService.findById(qno);

            if (optionalQna.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalQna.get(), HttpStatus.OK);
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
    @DeleteMapping("/qna/deletion/{qno}")
    public ResponseEntity<Object> delete(@PathVariable int qno) {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
//            삭제함수 호출
            boolean bSuccess = qnaService.removeById(qno);

            if (bSuccess == true) {
//                delete 문이 성공했을 경우
                return new ResponseEntity<>(HttpStatus.OK);
            }
//            delete 실패했을 경우( 0건 삭제가 될경우 )
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
//            DB 에러가 날경우
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
