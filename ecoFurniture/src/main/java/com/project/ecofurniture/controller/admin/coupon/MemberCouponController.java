package com.project.ecofurniture.controller.admin.coupon;


import com.project.ecofurniture.model.dto.admin.MemberCouponDto;
import com.project.ecofurniture.model.entity.admin.coupon.MemberCoupon;
import com.project.ecofurniture.service.admin.coupon.MemberCouponService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/api/coupon")
public class MemberCouponController {
    @Autowired
    MemberCouponService memberCouponService;

    @GetMapping("/member-coupon")
    public ResponseEntity<Object> findAll() {
        try {
            List<MemberCoupon> list = memberCouponService.findAll();
            if (list.isEmpty()== false) {
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("No content", HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/member-coupon")
    public ResponseEntity<Object> issueMemberCoupon(@RequestBody MemberCouponDto memberCouponDto) {
        try {
            // 클라이언트로부터 받은 데이터를 MemberCoupon 객체로 변환
            MemberCoupon memberCoupon = new MemberCoupon();
            memberCoupon.setUser(memberCouponDto.getUser());
            memberCoupon.setCoupon(memberCouponDto.getCoupon());

            // MemberCouponService의 save 메서드 호출
            MemberCoupon memberCoupon2 = memberCouponService.save(memberCoupon);

            // 성공
            return new ResponseEntity<>(memberCoupon2, HttpStatus.CREATED);
        } catch (Exception e) {

            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/save")
    public ResponseEntity<MemberCoupon> saveMemberCoupon(@RequestBody MemberCoupon memberCoupon) {
        try {
            MemberCoupon savedCoupon = memberCouponService.save(memberCoupon);
            return new ResponseEntity<>(savedCoupon, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<MemberCoupon> addMemberCoupon(@RequestParam String customerEmail, @RequestParam Integer couponId) {
        try {
            MemberCoupon addedCoupon = memberCouponService.addCoupon(customerEmail, couponId);
            return new ResponseEntity<>(addedCoupon, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



}
