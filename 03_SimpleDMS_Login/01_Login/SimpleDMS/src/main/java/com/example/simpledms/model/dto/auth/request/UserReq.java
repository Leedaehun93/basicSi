package com.example.simpledms.model.dto.auth.request;

import lombok.*;

/**
 * packageName : com.example.simpledms.model.vo
 * fileName : User
 * author : kangtaegyung
 * date : 2023/07/29
 * description : UserReq DTO
 * 요약 : 클라이언트 요청 매개변수값을 전달받을 클래스 DTO
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/07/29         kangtaegyung          최초 생성
 */
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class UserReq {

  private String username;

  private String email;

  private String codeName; // 권한명

  private String password;

  private boolean changePwd; // 프론트에서 패스워드 수정 했다는것을 나타내는 옵션(true, false)
}
