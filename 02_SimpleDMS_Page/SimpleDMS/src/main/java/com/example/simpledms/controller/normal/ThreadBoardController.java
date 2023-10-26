package com.example.simpledms.controller.normal;

import com.example.simpledms.model.dto.normal.ThreadBoardDto;
import com.example.simpledms.service.normal.ThreadBoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * packageName : com.example.simpledms.controller.normal
 * fileName : ThreadBoardController
 * author : L.DH
 * date : 2023-10-26
 * description : 컨트롤러
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-26         L.DH         최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api/normal")
public class ThreadBoardController {

    @Autowired
    ThreadBoardService threadBoardService; // DI

    //    전체 조회(계층형, TID) : like 검색
    @GetMapping("/thread-board")
    public ResponseEntity<Object> selectByConnectByPage(
            @RequestParam(defaultValue = "") String Subject,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
            Pageable pageable = PageRequest.of(page, size);

            Page<ThreadBoardDto> threadBoardDtoPage
                    = threadBoardService
                    .selectByConnectByPage(Subject, pageable);

            Map<String, Object> response = new HashMap<>();
            response.put("threadBoard", threadBoardDtoPage.getContent()); // 배열
            response.put("currentPage", threadBoardDtoPage.getNumber()); // 현재페이지번호
            response.put("totalItems", threadBoardDtoPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", threadBoardDtoPage.getTotalPages()); // 총페이지수

            if (threadBoardDtoPage.isEmpty() == false) {
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
}
