package com.project.ecofurniture.model.dto.shop;

/**
 * packageName : com.project.ecofurniture.model.dto.shop
 * fileName : CartDto
 * author : GGG
 * date : 2023-11-29
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-11-29         GGG          최초 생성
 */
public interface CartDto {

    public Integer getCartNo(); // SC

    public Integer getAmount(); // 카트에 담긴 총수량 // SC

    public Integer getCartAllPrice(); // SC

    public Integer getItemNo();

    public String getItemName(); // SI

    public String getImgPath(); // SI

    public Integer getItemPrice(); // SI

}
