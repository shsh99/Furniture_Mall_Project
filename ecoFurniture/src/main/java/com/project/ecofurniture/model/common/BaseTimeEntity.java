package com.project.ecofurniture.model.common;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * packageName : com.project.ecofurniture.model.common
 * fileName : BaseTimeEntity
 * author : GGG
 * date : 2023-11-17
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-17         GGG          최초 생성
 */
@Getter
@Setter
// @MappedSuperclass : JPA Entity 클래스들이 BaseTimeEntity를 상속할 경우
// 필드들(createdDate, modifiedDate)도 칼럼으로 인식하도록 한다.
@MappedSuperclass
// @EntityListeners(AuditingEntityListener.class) : BaseTimeEntity 클래스에
// Auditing 기능을(자동 생성일, 수정일) 포함시킨다.
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseTimeEntity {

    private String createDate;

    private String updateDate;

    private String deleteYn;

    @PrePersist
        //해당 엔티티 저장하기 전
    void onPrePersist(){
        this.createDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        this.deleteYn = "N";
    }

    @PreUpdate
        //해당 엔티티 수정 하기 전
    void onPreUpdate(){
        this.updateDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        this.createDate = this.updateDate;
        this.deleteYn = "N";
    }
}
