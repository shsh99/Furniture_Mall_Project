package com.project.ecofurniture.repository.board.notice;

import com.project.ecofurniture.model.entity.board.notice.Notice;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * ======================================
 * FileName : NoticeRepository
 * Author : KD.Song
 * Date : 2023-11-22
 * Note :
 * 1)
 * ======================================
 */
@Repository
public interface NoticeRepository extends JpaRepository<Notice, Integer> {
    //    noticeTitle like 검색
    Page<Notice> findAllByNoticeTitleContaining(String noticeTitle, Pageable pageable);
}