package com.example.simpledms.service.normal;


import com.example.simpledms.model.dto.normal.ThreadBoardDto;
import com.example.simpledms.model.entity.normal.ThreadBoard;
import com.example.simpledms.model.entity.normal.ThreadBoard;
import com.example.simpledms.repository.normal.ThreadBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

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
    public Page<ThreadBoardDto> selectByConnectByPage(String subject, Pageable pageable) {
        Page<ThreadBoardDto> page = threadBoardRepository.selectByConnectByPage(subject, pageable);
        return page;
    }

    //    답변 글 저장
    public ThreadBoard save(ThreadBoard threadBoard) {
        ThreadBoard threadBoard2 = threadBoardRepository.save(threadBoard);
        return threadBoard2;
    }

    //    게시물 저장
    public int saveThreadBoard(ThreadBoard threadBoard) {
        int insertCount
                = threadBoardRepository.insertByBoard(threadBoard);
        return insertCount;
    }

    //    상세조회 함수
    public Optional<ThreadBoard> findById(int tid) {
        Optional<ThreadBoard> optionalThreadBoard
                = threadBoardRepository.findById(tid);
        return optionalThreadBoard;
    }

    //    답변만 삭제(삭제 함수)
    public boolean removeById(int tid) {
        if (threadBoardRepository.existsById(tid)) { // tid 있는지 확인
            threadBoardRepository.deleteById(tid);   // 삭제 진행
            return true;
        }
        return false;
    }

    //    게시물 + 답변 2개 이상 삭제 : 그릅 번호로(boardGroup) 삭제
    public boolean removeAllByBoardGroup(int boardGroup) {
        //  deleteCount : 삭제된 건수
        int deleteCount = threadBoardRepository.removeAllByTgroup(boardGroup);
        //  삭제 건수 확인
        if (deleteCount > 0) {
            return true;
        } else {
            return false;
        }
    }
}
