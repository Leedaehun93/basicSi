package com.example.simpledms.service.basic;

import com.example.simpledms.model.entity.basic.Customer;
import com.example.simpledms.repository.basic.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.simpledms.service.basic
 * fileName : CustomerService
 * author : L.DH
 * date : 2023-10-24
 * description :
 * 요약 : 고객 서비스(업무 로직 : 비지니스 로직)
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-24         L.DH         최초 생성
 */
@Service
public class CustomerService {

    @Autowired
    CustomerRepository customerRepository; // DI 가져오기
    //    fullName like 검색
    public Page<Customer> findAllByFullNameContaining(String fullName, Pageable pageable) {
        Page<Customer> page
                = customerRepository.findAllByFullNameContaining(fullName, pageable);

        return page;
    }

    //    email like 검색
    public Page<Customer> findAllByEmailContaining(String email, Pageable pageable) {
        Page<Customer> page
                = customerRepository.findAllByEmailContaining(email, pageable);

        return page;
    }
    //    저장 함수(수정 함수)
    public Customer save(Customer customer) {
        Customer customer2 = customerRepository.save(customer);

        return customer2;
    }

    // 상세 조회(1건 조회)
    public Optional<Customer> findById(int cid) {
        Optional<Customer> optionalCustomer
                = customerRepository.findById(cid);
        return optionalCustomer;
    }

    // 삭제 함수
    public boolean removeById(int cid) {
        if (customerRepository.existsById(cid)) { // cid 있는지 확인
            customerRepository.deleteById(cid);// 삭제 진행
            return true;
        }
        return false;
    }


}
