package com.project.ecofurniture.repository.shop.reviews;



import com.project.ecofurniture.model.entity.shop.reviews.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.project.ecofurniture.repository.shop.reviews
 * fileName : ReviewRepository
 * author : GGG
 * date : 2023-11-28
 * description : 리뷰
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-28         신동구          최초 생성
 */
@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer> {
    //    1) question(질문) like 검색
    Page<Review> findAllByReviewTitleContaining(String reviewTitle, Pageable pageable);

    //    2) questioner(질문자) like 검색
    Page<Review> findAllByReviewContentContaining(String reviewContent, Pageable pageable);

}
