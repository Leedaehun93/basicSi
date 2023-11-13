package com.example.simpledms.service.advanced;

import com.example.simpledms.model.entity.advanced.FileDb;
import com.example.simpledms.repository.advanced.FileDbRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.Optional;
import java.util.UUID;

/**
 * packageName : com.example.simpledms.service.advanced
 * fileName : FileDbService
 * author : L.DH
 * date : 2023-11-13
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-11-13         L.DH         최초 생성
 */
@Slf4j
@Service
public class FileDbService {

    @Autowired
    FileDbRepository fileDbRepository; // DI

    //    전체 조회 + 페이징
    public Page<FileDb> findAll(Pageable pageable) {
        Page<FileDb> page = fileDbRepository.findAll(pageable);

        return page;
    }

    //    fileTitle like 조회 + 페이징
    public Page<FileDb> findAllByFileTitleContaining(String fileTitle, Pageable pageable) {
        Page<FileDb> page
                = fileDbRepository.findAllByFileTitleContaining(fileTitle, pageable);

        return page;
    }

    //    상세조회(1건조회)
    public Optional<FileDb> findById(String uuid) {
        Optional<FileDb> optionalFile
                = fileDbRepository.findById(uuid);

        return optionalFile;
    }

    //    삭제함수
    public boolean removeById(String uuid) {
        if (fileDbRepository.existsById(uuid)) { // uuid 있는지 확인
            fileDbRepository.deleteById(uuid);  // 삭제 진행
            return true;
        }
        return false;
    }

    //    TODO: 저장(수정)함수(업로드)
    public FileDb save(String uuid,
                       String fileTitle,
                       String fileContent,
                       MultipartFile file // 첨부파일 객체
    ) {
        FileDb fileDb2 = null;

        try {
//            기본키 : uuid
            if (uuid == null) {
//              저장 실행
//            1) DB 에 이미지 저장
//            2) DB 에 이미지를 다운로드 할 수 있는 url 저장
//                (다운로드 url 만들기 필요)
//            3) 파일명(중복이 안되는) : uuid(기본키이며 유일값) 사용
//             TODO: 1) uuid 만들기
                String tmpUuid
                        = UUID.randomUUID() // uuid 랜덤 생성함수
                        .toString()         // 문자열 변환
                        .replace("-", "");

//              TODO: 2) 다운로드 url 만들기
                String fileDownloadUri = ServletUriComponentsBuilder
                        .fromCurrentContextPath()       // 기본경로 : http://Localhost:8000
                        .path("/api/advanced/fileDb/")  // 추가경로 붙임
                        .path(tmpUuid)                  // uuid 붙임
                        .toUriString();                 // 문자열 변환
//                최종 url 예 : // 기본경로 : http://Localhost:8000/api/advanced/fileDb/xxxxiiiii

//              TODO: 3) 위의 정보를 FileDb 객체에 저장 후 DB save 함수 실행
                FileDb fileDb = new FileDb(tmpUuid,                     // uuid
                        fileTitle,                  // 제목
                        fileContent,                // 본문
                        file.getOriginalFilename(), // 실제 이미지 파일명(course.jpg)
                        file.getBytes(),            // 이미지 크기(100byte)
                        fileDownloadUri);           // 다운로드 url
                fileDb2 = fileDbRepository.save(fileDb);
            } else {
//              수정 실행
//              TODO: 2) 다운로드 url 만들기
                String fileDownloadUri = ServletUriComponentsBuilder
                        .fromCurrentContextPath()  // 기본경로 : http://localhost:8000
                        .path("/api/advanced/fileDb/") // 추가경로 붙임
                        .path(uuid)                 // 기존 uuid 붙임
                        .toUriString();             // 문자열 변환
//            최종 url 예 : http://localhost:8000/api/advanced/fileDb/xxxxiiiii

//              TODO: 3) 위의 정보를 FileDb 객체에 저장 후 DB save 함수 실행
                FileDb fileDb = new FileDb(
                        uuid,                       // 기존 uuid
                        fileTitle,                  // 제목
                        fileContent,                // 본문
                        file.getOriginalFilename(), // 실제 이미지 파일명(course.jpg)
                        file.getBytes(),            // 이미지 크기(100byte)
                        fileDownloadUri);           // 다운로드 url
                fileDb2 = fileDbRepository.save(fileDb);

            }
        } catch (Exception e) {
            log.debug(e.getMessage());
        }
        return fileDb2;
    }

}
