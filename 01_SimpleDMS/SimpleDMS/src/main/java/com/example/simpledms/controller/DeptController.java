package com.example.simpledms.controller;

import com.example.simpledms.model.Dept;
import com.example.simpledms.service.DeptService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.controller
 * fileName : DeptController
 * author : L.DH
 * date : 2023-10-19
 * description : 부서 컨트롤러 (@RestController - react 용)
 * 요약 :
 * react(3000) <-> springboot(8000) 연동 : axios
 * 인터넷 기본 보안 : ip, port 최초에 지정된 것과 달라지면
 * => 해킹으로 기본 인정(블럭킹 : 단절) CORS 보안
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-19         L.DH         최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api")
public class DeptController {

    @Autowired
    DeptService deptService;    // DI 가져오기

    /**
     * 전체 조회 + like 검색
     */
    @GetMapping("/dept")
    public ResponseEntity<Object> getDeptAll(
            @RequestParam(defaultValue = "") String dname) {
        try {
//            전체 조회 + like 검색
            List<Dept> list = deptService.findAllByDnameContaining(dname);

            if (list.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * TODO: 저장 함수
     */
    @PostMapping("/dept")
    public ResponseEntity<Object> createDept(
            @RequestBody Dept dept) {
        try {
//          저장 함수 호출
            Dept dept2 = deptService.save(dept);
            return new ResponseEntity<>(dept2, HttpStatus.OK);
//          에러 처리
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * TODO : 상세 조회
     */
    @GetMapping("/dept/{dno}")
    public ResponseEntity<Object> getDeptId(
            @PathVariable int dno) {
        try {
//            상세 조회
            Optional<Dept> optionalDept = deptService.findById(dno);
            if (optionalDept.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(optionalDept.get(), HttpStatus.OK);
            } else {
//                데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
//          에러 처리
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * TODO : 수정 함수
     */
    @PutMapping("/dept/{dno}")
    public ResponseEntity<Object> updateDept(
            @PathVariable int dno,
            @RequestBody Dept dept) {
        try {
//            저장(수정)함수 호출
            Dept dept2 = deptService.save(dept);

            return new ResponseEntity<>(dept2, HttpStatus.OK);
        } catch (Exception e) {

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** 삭제함수 */
    @DeleteMapping("/dept/deletion/{dno}")
    public ResponseEntity<Object> deleteDept(
            @PathVariable int dno){
        try {
//            삭제함수 호출
            boolean bSuccess = deptService.removeById(dno);

            if(bSuccess == true) {
//                성공
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



}