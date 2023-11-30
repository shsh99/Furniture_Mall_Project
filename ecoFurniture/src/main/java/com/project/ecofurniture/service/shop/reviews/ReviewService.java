package com.project.ecofurniture.service.shop.reviews;



import com.project.ecofurniture.model.entity.shop.reviews.Review;
import com.project.ecofurniture.repository.shop.reviews.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.project.ecofurniture.service.reviews
 * fileName : ReviewService
 * author : GGG
 * date : 2023-11-28
 * description : 리뷰 서비스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-28         신동구          최초 생성
 */
@Service
public class ReviewService {

    @Autowired
    ReviewRepository reviewRepository; // DI

    // like 검색
    public Page<Review> findAllByReviewTitleContaining(String reviewTitle, Pageable pageable) {
        Page<Review> page
                = reviewRepository.findAllByReviewTitleContaining(reviewTitle, pageable);

        return page;
    }

    //    questioner like 검색
    public Page<Review> findAllByReviewContentContaining(String reviewContent, Pageable pageable) {
        Page<Review> page
                = reviewRepository.findAllByReviewContentContaining(reviewContent, pageable);

        return page;
    }

    //    저장함수(수정함수)
    public Review save(Review review) {

        Review review2 = reviewRepository.save(review);

        return review2;
    }

    //    상세조회(1건조회)
    public Optional<Review> findById(int reviewNo) {
        Optional<Review> optionalReview
                = reviewRepository.findById(reviewNo);

        return optionalReview;
    }

    //    삭제함수
    public boolean removeById(int reviewNo) {
        if(reviewRepository.existsById(reviewNo)) { // qno 있는지 확인
            reviewRepository.deleteById(reviewNo); // 삭제 진행
            return true;
        }
        return false;
    }


}
