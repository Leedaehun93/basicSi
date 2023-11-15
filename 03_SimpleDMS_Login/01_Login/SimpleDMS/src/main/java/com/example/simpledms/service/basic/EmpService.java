package com.example.simpledms.service.basic;


import com.example.simpledms.model.entity.basic.Emp;
import com.example.simpledms.repository.basic.EmpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.simpledms.service.basic
 * fileName : EmpService
 * author : L.DH
 * date : 2023-10-23
 * description : 사원 서비스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-23         L.DH         최초 생성
 */
@Service
public class EmpService {
    @Autowired
    EmpRepository empRepository; // DI 가져오기

    //  전제 조회 + 페이징
    public Page<Emp> findAll(Pageable pageable) {
        Page<Emp> page = empRepository.findAll(pageable);

        return page;
    }

    //  ename like 조회 + 페이징
    public Page<Emp> findAllEnameContaining(String ename, Pageable pageable) {
        Page<Emp> page
                = empRepository.findAllByEnameContaining(ename, pageable);

        return page;
    }

    // 저장 함수
    public Emp save(Emp emp) {
        Emp emp2 = empRepository.save(emp);
        return emp2;
    }

    // 상세 조회(1건 조회)
    public Optional<Emp> findById(int eno) {
        Optional<Emp> optionalEmp
                = empRepository.findById(eno);
        return optionalEmp;
    }

    // 삭제 함수
    public boolean removeById(int eno) {
        if (empRepository.existsById(eno)) { // eno 있는지 확인
            empRepository.deleteById(eno);// 삭제 진행
            return true;
        }
        return false;
    }

}
