package com.example.simpledms.model.entity.basic;

import com.example.simpledms.model.common.BaseTimeEntity;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

/**
 * packageName : com.example.modelexam.model
 * fileName : Dept
 * author : kangtaegyung
 * date : 2022/10/12
 * description : 부서 모델 클래스
 * 요약 :
 * Soft Delete는 물리적인 데이터 삭제로 발생할 수 있는 문제를 방지하고
 * 쉽게 복원할 필요가 있거나 삭제된 데이터들을 보관하여
 * 데이터로써 활용할 필요나 가치가 있는 경우에 사용
 * 실무에서는 법적으로 개인자료일 경우 3년 또는 1년이상 데이터를
 * 보관할 의무가 있고 어길시 법적 문제가 생길 수 있음 -> 그래서
 * soft delete 방식을 대부분 구현하고 있음
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022/10/12         kangtaegyung          최초 생성
 */
@Entity
@Table(name="TB_DEPT")
@SequenceGenerator(
        name = "SQ_DEPT_GENERATOR"
        , sequenceName = "SQ_DEPT"
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
@SQLDelete(sql = "UPDATE TB_DEPT SET DELETE_YN = 'Y', DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE DNO = ?")
public class Dept extends BaseTimeEntity {
//    부서넘버
//    @Id : Primary Key 에 해당
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE
            , generator = "SQ_DEPT_GENERATOR"
    )
    private Integer dno; // 기본키, 시퀀스

    //    부서이름
    private String dname;

    //    부서위치
    private String loc;
}
