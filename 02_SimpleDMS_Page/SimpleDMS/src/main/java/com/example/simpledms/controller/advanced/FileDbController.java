package com.example.simpledms.controller.advanced;

import com.example.simpledms.model.entity.advanced.FileDb;
import com.example.simpledms.model.entity.basic.Dept;
import com.example.simpledms.service.advanced.FileDbService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.controller.advanced
 * fileName : FileDbController
 * author : L.DH
 * date : 2023-11-13
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-11-13         L.DH         최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api/advanced")
public class FileDbController {

    @Autowired
    FileDbService fileDbService; // DI

    //    전체조회 + fileTitle like 검색
    @GetMapping("/fileDb")
    public ResponseEntity<Object> findAllByFileTitleContaining(
            @RequestParam(defaultValue = "") String fileTitle,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
            Pageable pageable = PageRequest.of(page, size);

            Page<FileDb> fileDbPage
                    = fileDbService.findAllByFileTitleContaining(fileTitle, pageable);

//          리액트 전송 : 부서배열 , 페이징정보 [자료구조 : Map<키이름, 값>]
            Map<String, Object> response = new HashMap<>();
            response.put("fileDb", fileDbPage.getContent()); // fileDb 배열(리액트로 전송)
            response.put("currentPage", fileDbPage.getNumber()); // 현재페이지번호
            response.put("totalItems", fileDbPage.getTotalElements()); // 총건수(개수)
            response.put("totalPages", fileDbPage.getTotalPages()); // 총페이지수

            if (fileDbPage.isEmpty() == false) {
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

    //   저장 함수
    @PostMapping("/fileDb/upload")
    public ResponseEntity<Object> create(
            @RequestParam String fileTitle,
            @RequestParam String fileContent,
            @RequestParam MultipartFile fileDb // 첨부파일
    ) {
        try {
            fileDbService.save(
                    null,   // 기본키
                    fileTitle,    // 제목
                    fileContent,  // 본문
                    fileDb        // 첨부파일
            ); // db 저장

            return new ResponseEntity<>("업로드 성공", HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    다운로드 url 에 따라 자동으로 첨부파일 다운로드 받게 해주는 함수(자동 실행)
//    예) <img src="url"/> => 이미지 자동 다운로드해서 화면에 이미지 표시됨
//  http://localhost:8000/api/advanced/fileDb/{uuid} : 현재 함수 url
//  현재 함수 url === 다운로드 url
    @GetMapping("/fileDb/{uuid}")
    public ResponseEntity<byte[]> findByIdDownloading(@PathVariable String uuid) {
        FileDb fileDb = fileDbService.findById(uuid).get(); // 상세조회

        return ResponseEntity.ok()
                /** TODO: 필수 */
//           TODO : header() : 헤더 (1) 첨부파일로 전송한다고 표시,
//                                  (2)첨부파일명 표시
//                             HttpHeaders.CONTENT_DISPOSITION: 첨부파일 표시
//                            "attachment; filename=\"" + fileDb.getFileName() + "\"") : 첨부파일명 표시
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\"" + fileDb.getFileName() + "\"")
//           TODO: body() : 바디 - 실제 이미지 전송(리액트)
                .body(fileDb.getFileData()); // 첨부파일
    }

    //    상세조회
    @GetMapping("/fileDb/get/{uuid}")
    public ResponseEntity<Object> findById(@PathVariable String uuid) {

        try {
//            상세조회 실행
            Optional<FileDb> optionalFileDb = fileDbService.findById(uuid);

            if (optionalFileDb.isPresent()) {
//                성공
                return new ResponseEntity<>(optionalFileDb.get(), HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
//            서버 에러
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    수정 함수
    @PutMapping("/fileDb/{uuid}")
    public ResponseEntity<Object> create(
            @PathVariable String uuid,        // 기본키
            @RequestParam String fileTitle,
            @RequestParam String fileContent,
            @RequestParam MultipartFile fileDb // 첨부파일
    ) {
        try {
            fileDbService.save(
                    uuid,        // 기본키
                    fileTitle,   // 제목
                    fileContent, // 본문
                    fileDb       // 첨부파일
            ); // db 저장
            return new ResponseEntity<>("수정 성공", HttpStatus.OK);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 삭제함수
    @DeleteMapping("/fileDb/deletion/{uuid}")
    public ResponseEntity<Object> delete(@PathVariable String  uuid) {

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
//            삭제함수 호출
            boolean bSuccess = fileDbService.removeById(uuid);

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
