package com.project.ecofurniture.service.customer.point;

import com.project.ecofurniture.model.dto.customer.PointHistoriesDto;
import com.project.ecofurniture.repository.customer.point.PointHistoriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * packageName : com.project.ecofurniture.service.customer.point
 * fileName : PointHistoriesService
 * author : GB_Jo
 * date : 2023-11-23
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@Service
public class PointHistoriesService {

    @Autowired
    PointHistoriesRepository pointHistoriesRepository;

    // 전체조회(검색 x , 페이지 있음)
    public Page<PointHistoriesDto> findAllPage(Pageable pageable){
       Page<PointHistoriesDto> page = pointHistoriesRepository.findAllPage(pageable);
       return page;
    }



}
