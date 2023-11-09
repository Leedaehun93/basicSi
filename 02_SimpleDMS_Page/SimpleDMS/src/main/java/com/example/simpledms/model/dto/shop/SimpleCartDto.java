package com.example.simpledms.model.dto.shop;

/**
 * packageName : com.example.simpledms.model.dto.shop
 * fileName : SimpleCartDto
 * author : L.DH
 * date : 2023-11-09
 * description : 계층형 쿼리 DTO
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-11-09         L.DH         최초 생성
 */
// TODO: getter 함수로 정의
public interface SimpleCartDto {

    public Integer getScno();

    public Integer getCodeId();

    public String getTitle();

    public String getImgPath();

    public Integer getUnitPrice();

    public Integer getCartCount();
}
