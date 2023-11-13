package com.example.simpledms.model.entity.advanced;

import com.example.simpledms.model.common.BaseTimeEntity;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

/**
 * packageName : com.example.simpledms.model.entity.advanced
 * fileName : FileDb
 * author : L.DH
 * date : 2023-11-10
 * description : 첨부파일 엔티티
 * 요약 :
 * 1) TODO: 시퀀스 안씀 -> uuid 사용(전 세계 유일한 값)
 * 2) 저장 될 첨부 파일명 -> uuid 명으로 저장
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-11-10         L.DH         최초 생성
 */
@Entity
@Table(name="TB_FILE_DB")
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
@SQLDelete(sql = "UPDATE TB_FILE_DB SET DELETE_YN = 'Y', DELETE_TIME=TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') WHERE UUID = ?")
public class FileDb extends BaseTimeEntity {
    //    속성 === TB_FILE_DB 테이블 컬럼명(일치)
    @Id
    private String uuid;          // 기본키

    private String fileTitle;

    private String fileContent;

    private String fileName;

    @Lob
    private byte[] fileData;     // TODO: 첨부파일(이진파일) byte 배열로 받아야 함

    private String fileUrl;      // TODO: 파일 다운로드 URL
}