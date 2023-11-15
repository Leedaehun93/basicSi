package com.example.simpledms.service.admin;

import com.example.simpledms.model.dto.admin.CodeDto;
import com.example.simpledms.model.entity.admin.Code;
import com.example.simpledms.repository.admin.CodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


/**
 * packageName : com.example.simpledms.service.admin
 * fileName : CodeService
 * author : L.DH
 * date : 2023-11-07
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-11-07         L.DH         최초 생성
 */
@Service
public class CodeService {
    @Autowired
    CodeRepository codeRepository; // DI


    /**
     * like 검색
     */
    public Page<CodeDto> selectByCodeNameContaining(String codeName, Pageable pageable) {
        Page<CodeDto> page
                = codeRepository.selectByCodeNameContaining(codeName, pageable);
        return page;
    }

    /**
     * 전체 검색 : 페이징 없음 + 조인
     */
    public List<CodeDto> selectAllNoPage() {
        List<CodeDto> list = codeRepository.selectAllNoPage(); // 전체조회함수
        return list;
    }

    /**
     * 상세 조회
     */
    public Optional<Code> findById(int codeId) {
        Optional<Code> optionalCode
                = codeRepository.findById(codeId);
        return optionalCode;
    }

    /**
     * 저장 함수
     */
    public Code save(Code code) {
        Code code2 = codeRepository.save(code);
        return code2; // DB 실제 저장된 객체
    }

    /** TODO: 회원생성 사용, 권한이 있는지 확인하는 함수 */
    public boolean existsByCodeName(String codeName) {
        boolean bResult = codeRepository.existsByCodeName(codeName);
        return bResult;
    }
} // end of class
