package com.example.simpledms.service;

import com.example.simpledms.model.Dept;
import com.example.simpledms.repository.DeptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.service
 * fileName : DeptService
 * author : L.DH
 * date : 2023-10-19
 * description : 부서 업무 서비스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-19         L.DH         최초 생성
 */
@Service
public class DeptService {

    @Autowired
    DeptRepository deptRepository; // DI 가져오기

    /**
     * 전체 조회
     */
    public List<Dept> findAll() {
        List<Dept> list = deptRepository.findAll();

        return list;
    }

    /**
     * 검색어(dname like) 조회
     */
    public List<Dept> findAllByDnameContaining(String dname) {
        List<Dept> list = deptRepository.findAllByDnameContaining(dname);

        return list;
    }

    /**
     * 저장 함수(dno : null) + 수정 함수(dno : 값이 있으면)
     */
    public Dept save(Dept dept) {
        Dept dept2 = deptRepository.save(dept);

        return dept2;
    }

    /**
     * 상세 조회(1건 조회)
     */
    public Optional<Dept> findById(int dno) {
        Optional<Dept> optionalDept = deptRepository.findById(dno);
        return optionalDept;
    }

    /**
     * TODO : 삭제함수
     */
    public boolean removeById(int dno) {

        if (deptRepository.existsById(dno)) {
            deptRepository.deleteById(dno);
            return true;
        }
        return false;
    }

}
