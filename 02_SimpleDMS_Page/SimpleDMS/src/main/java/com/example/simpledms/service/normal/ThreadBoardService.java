package com.example.simpledms.service.normal;

import com.example.simpledms.model.dto.normal.ReplyBoardDto;
import com.example.simpledms.model.dto.normal.ThreadBoardDto;
import com.example.simpledms.repository.normal.ReplyBoardRepository;
import com.example.simpledms.repository.normal.ThreadBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * packageName : com.example.simpledms.service.normal
 * fileName : ThreadBoardService
 * author : L.DH
 * date : 2023-10-26
 * description : 서비스(업무 로직 : 비지니스 로직)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * ———————————————————————————————
 * 2023-10-26         L.DH         최초 생성
 */
@Service
public class ThreadBoardService {

    @Autowired
    ThreadBoardRepository threadBoardRepository;

    //    계층형 쿼리 조회(dto) : like 검색
    public Page<ThreadBoardDto> selectByConnectByPage(String threadSubject, Pageable pageable) {

        Page<ThreadBoardDto> page = threadBoardRepository.selectByConnectByPage(threadSubject, pageable);

        return page;
    }
}
