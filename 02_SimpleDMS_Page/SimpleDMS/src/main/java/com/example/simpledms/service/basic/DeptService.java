package com.example.simpledms.service.basic;


import com.example.simpledms.model.entity.basic.Dept;
import com.example.simpledms.repository.basic.DeptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.simpledms.service.basic
 * fileName : DeptService
 * author : L.DH
 * date : 2023-10-23
 * description : 부서 서비스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-23         L.DH         최초 생성
 */
@Service
public class DeptService {
    @Autowired
    DeptRepository deptRepository; // DI 가져오기

    // 전체 조회 + 페이징
    public Page<Dept> findAll(Pageable pageable) {
        Page<Dept> page = deptRepository.findAll(pageable);

        return page;
    }

    // dname like 조회 + 페이징
    public Page<Dept> findAllDnameContaining(String dname, Pageable pageable) {
        Page<Dept> page
                = deptRepository.findAllByDnameContaining(dname, pageable);

        return page;
    }

    // 저장 함수(수정 함수)
    public Dept save(Dept dept) {
        Dept dept2 = deptRepository.save(dept);
        return dept2;
    }

    // 상세 조회(1건 조회)
    public Optional<Dept> findById(int dno) {
        Optional<Dept> optionalDept
                = deptRepository.findById(dno);
        return optionalDept;
    }

    // 삭제 함수
    public boolean removeById(int dno) {
        if (deptRepository.existsById(dno)) { // dno 있는지 확인
            deptRepository.deleteById(dno);   // 삭제 진행
            return true;
        }
        return false;
    }

}
