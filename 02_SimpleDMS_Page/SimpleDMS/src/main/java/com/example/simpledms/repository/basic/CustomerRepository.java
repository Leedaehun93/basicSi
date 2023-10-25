package com.example.simpledms.repository.basic;

import com.example.simpledms.model.entity.basic.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.example.simpledms.repository
 * fileName : CustomerRepository
 * author : L.DH
 * date : 2023-10-24
 * description : JPA CRUD 인터페이스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-24         L.DH         최초 생성
 */
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
//  1) fullname like : 쿼리메소드 + 페이징(리턴 : page, 매개변수 : pageable)
    Page<Customer> findAllByFullNameContaining(String fullName, Pageable pageable);
//  2) email like : 쿼리메소드 + 페이징(리턴 : page, 매개변수 : pageable)
    Page<Customer> findAllByEmailContaining(String email, Pageable pageable);
}