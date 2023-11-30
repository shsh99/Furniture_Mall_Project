package com.project.ecofurniture.service.admin.code;

import com.project.ecofurniture.model.dto.admin.CodeDto;
import com.project.ecofurniture.model.entity.admin.code.Code;
import com.project.ecofurniture.repository.admin.code.CodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.project.ecofurniture.service.admin.code
 * fileName : CodeService
 * author : GB_Jo
 * date : 2023-11-22
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@Service
public class CodeService {

    @Autowired
    CodeRepository codeRepository;

    /** like 검색 + 페이징 */
    public Page<CodeDto> selectByCodeNameContaining(String codeName, Pageable pageable){
        Page<CodeDto> page = codeRepository.selectByCodeNameContaining(codeName,pageable);
        return page;
    }

    /** 전체 검색 : 페이징 없음 */
    public List<CodeDto> selectAllNoPage(){
        List<CodeDto> list = codeRepository.selectAllNoPage(); // 전체조회 함수
        return list;
    }

    /** 상세 조회 */
    public Optional<Code> findById(int codeId){
        Optional<Code> optionalCodeDto = codeRepository.findById(codeId);
        return optionalCodeDto;
    }

    /** 저장 함수 */
    public Code save(Code code){
        Code code2 = codeRepository.save(code);
        return code2; // DB 실제 저장된 객체
    }
}
