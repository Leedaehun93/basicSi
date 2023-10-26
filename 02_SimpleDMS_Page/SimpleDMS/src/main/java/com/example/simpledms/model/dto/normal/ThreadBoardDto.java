package com.example.simpledms.model.dto.normal;

/**
 * packageName : com.example.simpledms.model.dto.normal
 * fileName : ThreadBoardDto
 * author : L.DH
 * date : 2023-10-26
 * description : 계층형 쿼리 DTO
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-26         L.DH         최초 생성
 */
public interface ThreadBoardDto {
    public Integer getTid();


    public String getSubject();

    public String getMainText();

    public String getWriter();


    public Integer getViews();

    public Integer getTgroup();

    public Integer getTparent();
}
