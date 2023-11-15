package com.example.simpledms.repository.auth;
// TODO: import
import com.example.simpledms.model.entity.auth.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.example.simpledms.repository.auth
 * fileName : UserRepository
 * author : L.DH
 * date : 2023-11-14
 * description : 유저 인터페이스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-11-14         L.DH         최초 생성
 */
@Repository
public interface UserRepository extends JpaRepository<User, String> {
    //    like 검색
    Page<User> findAllByUsernameContains(String username, Pageable pageable);

}
