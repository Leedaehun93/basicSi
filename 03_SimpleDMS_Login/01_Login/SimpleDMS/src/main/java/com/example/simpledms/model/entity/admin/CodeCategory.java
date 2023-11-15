package com.example.simpledms.model.entity.admin;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * packageName : com.example.simpledms.model.entity.admin
 * fileName : CodeCategory
 * author : L.DH
 * date : 2023-11-07
 * description : 공통코드 분류(대분류:부모)
 * 요약 :
 * 1) 시퀀스 사용 않함
 * 2) 삭제 없음 : 소프트/하드 삭제 기능 없음
 *
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-11-07         L.DH         최초 생성
 */
@Entity
@Table(name = "TB_CODE_CATEGORY")
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
public class CodeCategory {
    @Id
    private Integer categoryId;   // 기본키
    private String categoryName;
}