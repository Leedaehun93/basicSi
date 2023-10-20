package com.example.simpledms.service;

import com.example.simpledms.model.Dept;
import com.example.simpledms.model.Emp;
import com.example.simpledms.repository.EmpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.service
 * fileName : EmpService
 * author : L.DH
 * date : 2023-10-19
 * description : 사원 업무 서비스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-19         L.DH         최초 생성
 */
@Service
public class EmpService {

    @Autowired
    EmpRepository empRepository; // DI 가져오기

    /**
     * 전체 조회
     */
    public List<Emp> findAll() {
        List<Emp> list = empRepository.findAll();

        return list;
    }

    /**
     * 검색어(dname like) 조회
     */
    public List<Emp> findAllByEnameContaining(String ename) {
        List<Emp> list = empRepository.findAllByEnameContaining(ename);

        return list;
    }

    /**
     * 저장 함수(dno : null) + 수정 함수(dno : 값이 있으면)
     */
    public Emp save(Emp emp) {
        Emp emp2 = empRepository.save(emp);

        return emp2;
    }

    /**
     * TODO : 상세 조회(1건 조회)
     */
    public Optional<Emp> findById(int eno) {
        Optional<Emp> optionalEmp = empRepository.findById(eno);
        return optionalEmp;
    }

    /** TODO: 삭제함수 */
    public boolean removeById(int eno) {

        if(empRepository.existsById(eno)) {
            empRepository.deleteById(eno);
            return true;
        }
        return false;
    }

}
