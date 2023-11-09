package com.example.simpledms.repository.shop;
// TODO: import
import com.example.simpledms.model.entity.shop.SimpleProduct;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.example.simpledms.repository.shop
 * fileName : SimpleProductRepository
 * author : L.DH
 * date : 2023-11-08
 * description : JPA CRUD 인터페이스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-11-08         L.DH         최초 생성
 */
@Repository
public interface SimpleProductRepository extends JpaRepository<SimpleProduct, Integer> {
    //    title like 검색 : 쿼리메소드(JPQL)
    Page<SimpleProduct> findAllByTitleContaining(String title, Pageable pageable);

}
