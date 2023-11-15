package com.example.simpledms.service.shop;
// TODO: import

import com.example.simpledms.model.dto.shop.SimpleCartDto;
import com.example.simpledms.model.entity.shop.SimpleCart;
import com.example.simpledms.repository.shop.SimpleCartRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.simpledms.service.shop
 * fileName : SimpleCartService
 * author : L.DH
 * date : 2023-11-09
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-11-09         L.DH         최초 생성
 */
@Service
public class SimpleCartService {

    @Autowired
    SimpleCartRepository simpleCartRepository; // DI 가져오기

    //    전체 조회(like) + 페이징(조인) + DTO
    public Page<SimpleCartDto> selectByTitleContaining(
            String title,
            Pageable pageable) {
        Page<SimpleCartDto> page
                = simpleCartRepository
                .selectByTitleContaining(title, pageable);

        return page;
    }

    //    저장함수(수정함수)
    public SimpleCart save(SimpleCart simpleCart) {

        SimpleCart simpleCart2 = simpleCartRepository.save(simpleCart);

        return simpleCart2;
    }

    //    조인 상세조회(1건조회)
    public Optional<SimpleCartDto> selectById(int scno) {
        Optional<SimpleCartDto> optionalSimpleCart
                = simpleCartRepository.selectById(scno);

        return optionalSimpleCart;
    }

    //    삭제함수
    public boolean removeById(int scno) {
        if (simpleCartRepository.existsById(scno)) { // scno 있는지 확인
            simpleCartRepository.deleteById(scno); // 삭제 진행
            return true;
        }
        return false;
    }


}
