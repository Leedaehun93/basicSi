package com.example.simpledms.model.entity.auth;
// TODO: import
import com.example.simpledms.model.common.BaseTimeEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * packageName : com.example.simpledms.model.entity.auth
 * fileName : User
 * author : L.DH
 * date : 2023-11-14
 * description : 유저 엔티티
 * 요약 :
 * 1) 기본키 : email(로그인 id)
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-11-14         L.DH         최초 생성
 */
@Entity
@Table(name = "TB_USER")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User extends BaseTimeEntity {
    // 속성 : TB_USER
    @Id
    private String email; // 기본키
    private String password; // 암호
    private String username; // 유저명
    private String codeName; // 권한코드명(속성) 속성 : ROLE_USER, ROLE_ADMIN

    // 생성자 : 3개짜리(codeName 제외)
    public User(String email, String password, String username) {
        this.email = email;
        this.password = password;
        this.username = username;
    }
}
