package com.example.simpledms.controller.normal;

import com.example.simpledms.model.dto.normal.ThreadBoardDto;
import com.example.simpledms.model.entity.normal.ThreadBoard;
import com.example.simpledms.service.normal.ThreadBoardService;
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
            @RequestParam(defaultValue = "") String subject,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
            Pageable pageable = PageRequest.of(page, size);

            Page<ThreadBoardDto> threadBoardDtoPage
                    = threadBoardService
                    .selectByConnectByPage(subject, pageable);

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

    //     저장 함수
    @PostMapping("/thread")
    public ResponseEntity<Object> create(@RequestBody ThreadBoard threadBoard) {
        try {
            ThreadBoard threadBoard2 = threadBoardService.save(threadBoard);
            return new ResponseEntity<>(threadBoard2, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //     게시물 저장
    @PostMapping("/thread-board")
    public ResponseEntity<Object> createThread(@RequestBody ThreadBoard threadBoard) {
        try {
            int insertCount = threadBoardService.saveThreadBoard(threadBoard); // db 저장
            return new ResponseEntity<>(insertCount, HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //     수정 함수
    @PutMapping("/thread-board/{bid}")
    public ResponseEntity<Object> update(
            @PathVariable int bid,
            @RequestBody ThreadBoard threadBoard) {
        try {
            ThreadBoard threadBoard2 = threadBoardService.save(threadBoard); // db 수정
            return new ResponseEntity<>(threadBoard2, HttpStatus.OK);
        } catch (Exception e) {
            // DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //     상세 조회(1건 조회)
    @GetMapping("/thread-board/{tid}")
    public ResponseEntity<Object> findById(@PathVariable int tid) {
        try {
            // 상세조회 실행
            Optional<ThreadBoard> optionalThreadBoard = threadBoardService.findById(tid);
            if (optionalThreadBoard.isPresent()) {
                // 성공
                return new ResponseEntity<>(optionalThreadBoard.get(), HttpStatus.OK);
            } else {
                // 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            // 서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //     TODO: 답변만 삭제(삭제 함수)
    @DeleteMapping("/thread/deletion/{tid}")
    public ResponseEntity<Object> delete(@PathVariable int tid) {
        // 프론트엔드 쪽으로 상태정보를 보내줌
        try {
            // 삭제 함수 호출
            boolean bSuccess = threadBoardService.removeById(tid);
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

    //     TODO: 게시물 + 답변 2개이상 삭제 삭제(삭제 함수)
    @DeleteMapping("/thread-board/deletion/{tgroup}")
    public ResponseEntity<Object> deleteBoard(@PathVariable int tgroup) {
        // 프론트엔드 쪽으로 상태정보를 보내줌
        try {
            // 삭제 함수 호출
            boolean bSuccess = threadBoardService.removeAllByBoardGroup(tgroup);
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
