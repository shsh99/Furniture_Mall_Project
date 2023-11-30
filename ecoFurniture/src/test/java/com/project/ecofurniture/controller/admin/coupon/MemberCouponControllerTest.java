package com.project.ecofurniture.controller.admin.coupon;

/**
 * packageName : com.project.ecofurniture.controller.admin.coupon
 * fileName : MemberCouponControllerTest
 * author : GB_Jo
 * date : 2023-11-27
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.ecofurniture.model.entity.admin.coupon.MemberCoupon;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class MemberCouponControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void testSaveMemberCoupon() throws Exception {
        // 테스트에 필요한 데이터를 생성하고 memberCoupon 객체를 JSON으로 변환
        MemberCoupon memberCoupon = new MemberCoupon(/* fill in with appropriate data */);
        String memberCouponJson = objectMapper.writeValueAsString(memberCoupon);

        // POST 요청을 만들어서 content 메서드로 JSON 데이터 추가
        mockMvc.perform(MockMvcRequestBuilders.post("/save")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(memberCouponJson))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
}
