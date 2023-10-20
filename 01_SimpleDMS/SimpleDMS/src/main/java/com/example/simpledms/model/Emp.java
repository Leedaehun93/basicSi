package com.example.simpledms.model;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

/**
 * packageName : com.example.modelexam.model
 * fileName : Member
 * author : kangtaegyung
 * date : 2022/10/14
 * description : 사원 정보 테이블
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022/10/14         kangtaegyung          최초 생성
 */
@Entity
@Table(name = "TB_EMP")
@SequenceGenerator(
        name = "SQ_EMP_GENERATOR"
        , sequenceName = "SQ_EMP"
        , initialValue = 1
        , allocationSize = 1
)
@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@DynamicUpdate
// soft delete
@Where(clause = "DELETE_YN = 'N'")
@SQLDelete(sql = "UPDATE TB_EMP SET DELETE_YN = 'Y', DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE ENO = ?")
public class Emp extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "SQ_EMP_GENERATOR"
    )
    @Column
    private Integer eno;

    @Column
    private String ename;

    @Column
    private String job;

    @Column
    private Integer manager;

    @Column
    private String hiredate;

    @Column
    private Integer salary;

    @Column
    private Integer commission;

    @Column
    private Integer dno;
}
