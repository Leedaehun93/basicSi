package com.example.simpledms.model.entity.normal;

import com.example.simpledms.model.common.BaseTimeEntity;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

/**
 * packageName : com.example.simpledms.model.entity.normal
 * fileName : CinemaFaq
 * author : L.DH
 * date : 2023-10-25
 * description : CinemaFaq 엔티티(vo)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-25         L.DH         최초 생성
 */
@Entity
@Table(name = "TB_CINEMA_FAQ")
@SequenceGenerator(
        name = "SQ_CINEMA_FAQ_GENERATOR"
        , sequenceName = "SQ_CINEMA_FAQ"
        , initialValue = 1
        , allocationSize = 1
)
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@DynamicUpdate
// soft delete
@Where(clause = "DELETE_YN = 'N'")
@SQLDelete(sql = "UPDATE TB_CINEMA_FAQ SET DELETE_YN = 'Y', DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE CFNO = ?")
public class CinemaFaq extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "SQ_CINEMA_FAQ_GENERATOR"
    )
    private Integer cfno; // 기본키, 시퀀스
    private String question;
    private String answer;
    private Integer sortOrder;
}


