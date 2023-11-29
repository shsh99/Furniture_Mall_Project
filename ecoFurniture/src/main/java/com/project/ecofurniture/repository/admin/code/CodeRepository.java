package com.project.ecofurniture.repository.admin.code;

import com.project.ecofurniture.model.dto.admin.CodeDto;
import com.project.ecofurniture.model.entity.admin.code.Code;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * ======================================
 * FileName : CodeRepository
 * Author : DH.Lee
 * Date : 2023-11-27
 * Note :
 * 1) 소분류 공통코드 Repo
 * ======================================
 */
@Repository
public interface CodeRepository extends JpaRepository<Code, Integer> {

    // TODO: 유저 회원생성 사용
    //       codeName(권한:ROLE_USER, ROLE_ADMIN) 있는지 확인하는 함수
    boolean existsByCodeName(String codeName);

    //    like 검색 : 대분류코드 + 소분류코드 조인
    @Query(value = "SELECT CO.CODE_ID       AS codeId  " +
            "     , CO.CODE_NAME      AS codeName " +
            "     ,CO.CODE_CATEGORY_ID    AS codeCategoryId " +
            "     , CC.CODE_CATEGORY_NAME AS codeCategoryName " +
            "     ,CO.USE_YN         AS useYn " +
            "FROM TB_CODE CO " +
            "   , TB_CODE_CATEGORY CC " +
            "WHERE CO.CODE_CATEGORY_ID = CC.CODE_CATEGORY_ID " +
            "AND   CO.CODE_NAME LIKE '%'|| :codeName ||'%'"
            , countQuery = "SELECT count(*)  " +
            "FROM TB_CODE CO " +
            "   , TB_CODE_CATEGORY CC " +
            "WHERE CO.CODE_CATEGORY_ID = CC.CODE_CATEGORY_ID " +
            "AND   CO.CODE_NAME LIKE '%'|| :codeName ||'%'"
            , nativeQuery = true)
    Page<CodeDto> selectByCodeNameContaining(
            @Param("codeName") String codeName,
            Pageable pageable
    );

    /**
     * 전체 조회(조인) : 페이징 없음 , DTO 필요
     */
    @Query(value = "SELECT CO.CODE_ID       AS codeId  " +
            "     , CO.CODE_NAME      AS codeName " +
            "     ,CO.CODE_CATEGORY_ID    AS codeCategoryId " +
            "     , CC.CODE_CATEGORY_NAME AS codeCategoryName " +
            "     ,CO.USE_YN         AS useYn " +
            "FROM TB_CODE CO " +
            "   , TB_CODE_CATEGORY CC " +
            "WHERE CO.CODE_CATEGORY_ID = CC.CODE_CATEGORY_ID "
            , nativeQuery = true)
    List<CodeDto> selectAllNoPage();
} // end of interface