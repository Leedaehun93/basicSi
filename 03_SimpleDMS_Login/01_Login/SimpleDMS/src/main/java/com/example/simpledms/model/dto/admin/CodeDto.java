package com.example.simpledms.model.dto.admin;

/**
 * packageName : com.example.simpledms.model.dto.admin
 * fileName : CodeDto
 * author : L.DH
 * date : 2023-11-07
 * description : 대분류 + 소분류 조인 결과를 담기위한 DTO
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-11-07         L.DH         최초 생성
 */
public interface CodeDto {
    //    getter 함수 정의
    public Integer getCodeId();
    public String getCodeName();
    public Integer getCategoryId();
    public String getCategoryName();
    public String getUseYn();
}