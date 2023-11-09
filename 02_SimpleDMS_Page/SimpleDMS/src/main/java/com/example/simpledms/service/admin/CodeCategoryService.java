package com.example.simpledms.service.admin;

import com.example.simpledms.model.entity.admin.CodeCategory;
import com.example.simpledms.repository.admin.CodeCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.service.admin
 * fileName : CodeCategoryService
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
public class CodeCategoryService {

    @Autowired
    CodeCategoryRepository codeCategoryRepository; // DI

    /** like 검색 */
    public Page<CodeCategory> findAllByCategoryNameContaining(String categoryName, Pageable pageable) {
        Page<CodeCategory> page
                = codeCategoryRepository
                .findAllByCategoryNameContaining(categoryName, pageable);
        return page;
    }

    /** 전체 검색 : 페이징 없음 */
    public List<CodeCategory> findAll() {
        List<CodeCategory> list = codeCategoryRepository.findAll(); // 전체조회함수
        return list;
    }

    /** 상세 조회 */
    public Optional<CodeCategory> findById(int categoryId) {
        Optional<CodeCategory> optionalCodeCategory
                = codeCategoryRepository.findById(categoryId);
        return optionalCodeCategory;
    }

    /** 저장 함수 */
    public CodeCategory save(CodeCategory codeCategory) {
        CodeCategory codeCategory2 = codeCategoryRepository.save(codeCategory);
        return codeCategory2; // DB 실제 저장된 객체
    }
}