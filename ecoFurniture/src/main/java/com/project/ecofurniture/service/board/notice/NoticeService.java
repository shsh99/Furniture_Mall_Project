package com.project.ecofurniture.service.board.notice;

import com.project.ecofurniture.model.entity.board.notice.Notice;
import com.project.ecofurniture.repository.board.notice.NoticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * ======================================
 * FileName : NoticeService
 * Author : KD.Song
 * Date : 2023-11-22
 * Note :
 * 1)
 * ======================================
 */
@Service
public class NoticeService {

    @Autowired
    NoticeRepository noticeRepository; // DI

    //    noticeTitle like 조회 + 페이징
    public Page<Notice> findAllByNoticeTitleContaining(String noticeTitle, Pageable pageable) {
        Page<Notice> page = noticeRepository.findAllByNoticeTitleContaining(noticeTitle, pageable);

        return page;
    }

    //    저장(수정) 함수
    public Notice save(Notice notice) {
        Notice notice2 = noticeRepository.save(notice);

        return notice2;
    }

    //    상세 조회
    public Optional<Notice> findById(int noticeNo) {
        Optional<Notice> optionalNotice = noticeRepository.findById(noticeNo);

        return optionalNotice;
    }

    //    삭제 함수
    public boolean removeById(int noticeNo) {
        if (noticeRepository.existsById(noticeNo)) {     // noticeNo 있는지 확인
            noticeRepository.deleteById(noticeNo);      // 삭제 진행
            return true;
        }
        return false;
    }
}