package com.example.simpledms.repository.admin;

import com.example.simpledms.model.entity.admin.CodeCategory;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;


/**
 * packageName : com.example.simpledms.repository.admin
 * fileName : CodeCategoryRepository
 * author : L.DH
 * date : 2023-11-07
 * description : DB CRUD 함수들이 있는 인터페이스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-11-07         L.DH         최초 생성
 */
@Repository
public interface CodeCategoryRepository extends JpaRepository<CodeCategory,Integer> {
    //    like 검색 : 쿼리메소드 (JPQL)
    Page<CodeCategory> findAllByCategoryNameContaining(String categoryName, Pageable pageable);
}


