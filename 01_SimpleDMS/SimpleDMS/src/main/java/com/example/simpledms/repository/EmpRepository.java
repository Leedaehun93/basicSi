package com.example.simpledms.repository;

import com.example.simpledms.model.Emp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * packageName : com.example.simpledms.repository
 * fileName : DeptRepository
 * author : L.DH
 * date : 2023-10-19
 * description : JPA_Emp 레포 (CRUD) 함수들 모음
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-19         L.DH         최초 생성
 */
@Repository
public interface EmpRepository extends JpaRepository<Emp, Integer> {
// ename like 검색
    List<Emp> findAllByEnameContaining(String ename);
}
