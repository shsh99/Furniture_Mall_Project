package com.project.ecofurniture.service.shop.itemImages;

import com.project.ecofurniture.model.entity.shop.itemImages.ItemImages;
import com.project.ecofurniture.repository.shop.itemImages.ItemImagesRepository;
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
 * packageName : com.project.ecofurniture.service.shop.itemImages
 * fileName : ItemImagesService
 * author : GGG
 * date : 2023-11-21
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-21         GGG          최초 생성
 */

@Slf4j
@Service
public class ItemImagesService {

    @Autowired
    ItemImagesRepository itemImagesRepository;

    //    전체 조회 + 페이징
    public Page<ItemImages> findAll(Pageable pageable) {
        Page<ItemImages> page = itemImagesRepository.findAll(pageable);

        return page;
    }

    //    like 조회 + 페이징
    public Page<ItemImages> findAllByImgTitleContaining(String imgTitle, Pageable pageable) {
        Page<ItemImages> page
                = itemImagesRepository.findAllByImgTitleContaining(imgTitle, pageable);

        return page;
    }

    //   상세조회
    public Optional<ItemImages> findById(String uuid) {
        Optional<ItemImages> optionalItemImages
                = itemImagesRepository.findById(uuid);

        return optionalItemImages;
    }

    //    삭제함수
    public boolean removeById(String uuid) {
        if(itemImagesRepository.existsById(uuid)) { // uuid 있는지 확인
            itemImagesRepository.deleteById(uuid); // 삭제 진행
            return true;
        }
        return false;
    }

    //    todo: 저장 + 수정함수(업로드)
    public ItemImages save(String uuid,
                       String imgTitle,
                       MultipartFile file  // 첨부파일 객체
    ) {
        ItemImages itemImages2 = null;
        try {
//            기본키 : uuid
            if(uuid == null) {
//                저장 실행
//             1) DB 에 이미지 저장
//             2) DB 에 이미지를 다운로드 할수 있는 url 저장
//                (다운로드 url 만들기 필요)
//             3) 파일명(중복이 안되는) : uuid(기본키) 사용(유일값)
//             todo: 1) uuid 만들기
                String tmpUuid
                        = UUID.randomUUID()// uuid 랜덤 생성함수
                        .toString()        // 문자열 변환
                        .replace("-", "");
//              todo: 2) 다운로드 url 만들기
                String fileDownloadUri = ServletUriComponentsBuilder
                        .fromCurrentContextPath()  // 기본경로 : http://localhost:8000
                        .path("/api/shop/item-images/") // 추가경로 붙임
                        .path(tmpUuid)              // uuid 붙임
                        .toUriString();             // 문자열 변환
//            최종 url 예 : http://localhost:8000/api/shop/itemImages/xxxxxxxx

//              todo: 3) 위의 정보를 ItemImages 객체에 저장 후 DB save 함수 실행
                ItemImages itemImages = new ItemImages(
                         tmpUuid
                        ,imgTitle
                        ,file.getOriginalFilename()
                        ,file.getBytes()
                        ,fileDownloadUri);
                itemImages2 = itemImagesRepository.save(itemImages);
            } else {
//                수정 실행
//              todo: 2) 다운로드 url 만들기
                String fileDownloadUri = ServletUriComponentsBuilder
                        .fromCurrentContextPath()  // 기본경로 : http://localhost:8000
                        .path("/api/shop/item-images/") // 추가경로 붙임
                        .path(uuid)                 // 기존 uuid 붙임
                        .toUriString();             // 문자열 변환
//            최종 url 예 : http://localhost:8000/api/shop/itemImages/xxxxxxxx

//              todo: 3) 위의 정보를 FileDb 객체에 저장 후 DB save 함수 실행
                ItemImages itemImages = new ItemImages(
                        uuid,                       // 기존 uuid
                        imgTitle,                   // 제목
                        file.getOriginalFilename(), // 실제 이미지 파일명(course.jpg)
                        file.getBytes(),            // 이미지 크기(100byte)
                        fileDownloadUri);           // 다운로드 url
                itemImages2 = itemImagesRepository.save(itemImages);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
        }
        return itemImages2;
    }

}
