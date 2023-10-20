package com.example.simpledms.controller;

import com.example.simpledms.model.Dept;
import com.example.simpledms.model.Emp;
import com.example.simpledms.service.EmpService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.controller
 * fileName : EmpController
 * author : L.DH
 * date : 2023-10-19
 * description : 사원 컨트롤러 (@RestController - react 용)
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
public class EmpController {

    @Autowired
    EmpService empService;    // DI 가져오기

    /**
     * 전체 조회 + like 검색
     */
    @GetMapping("/emp")
    public ResponseEntity<Object> getEmpAll(
            @RequestParam(defaultValue = "") String ename) {
        try {
//            전체 조회 + like 검색
            List<Emp> list = empService.findAllByEnameContaining(ename);

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
     * 저장 함수
     */
    @PostMapping("/emp")
    public ResponseEntity<Object> createEmp(
            @RequestBody Emp emp) {
        try {
//          저장 함수 호출
            Emp emp2 = empService.save(emp);
            return new ResponseEntity<>(emp2, HttpStatus.OK);
//          에러 처리
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 상세 조회
     */
    @GetMapping("/emp/{eno}")
    public ResponseEntity<Object> getEmpId(
            @PathVariable int eno) {
        try {
//            상세 조회
            Optional<Emp> optionalEmp = empService.findById(eno);
            if (optionalEmp.isEmpty() == false) {
//                성공
                return new ResponseEntity<>(optionalEmp.get(), HttpStatus.OK);
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
     * TODO: 수정 함수
     */
    @PutMapping("/emp/{eno}")
    public ResponseEntity<Object> updateEmp(
            @PathVariable int eno,
            @RequestBody Emp emp) {
        try {
//            저장(수정)함수 호출
            Emp emp2 = empService.save(emp);

            return new ResponseEntity<>(emp2, HttpStatus.OK);
        } catch (Exception e) {

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /** TODO: 삭제함수 */
    @DeleteMapping("/emp/deletion/{eno}")
    public ResponseEntity<Object> deleteEmp(
            @PathVariable int eno){
        try {
//            삭제함수 호출
            boolean bSuccess = empService.removeById(eno);

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