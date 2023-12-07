package com.project.ecofurniture.service.admin.coupon;



import com.project.ecofurniture.model.entity.admin.coupon.Coupon;
import com.project.ecofurniture.model.entity.admin.coupon.MemberCoupon;

import com.project.ecofurniture.model.entity.auth.User;
import com.project.ecofurniture.repository.admin.coupon.CouponRepository;
import com.project.ecofurniture.repository.admin.coupon.MemberCouponRepository;
import com.project.ecofurniture.repository.auth.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class MemberCouponService {

    @Autowired
    MemberCouponRepository memberCouponRepository;

    @Autowired
    CouponRepository couponRepository;

    @Autowired
    UserRepository userRepository;


    public List<MemberCoupon> findAll() {
        List<MemberCoupon> list = memberCouponRepository.findAll();

        return list;
    }


    public MemberCoupon save(MemberCoupon memberCoupon) {
        User user = memberCoupon.getUser();
        Coupon coupon = memberCoupon.getCoupon();

        LocalDate today = LocalDate.now();
        LocalDate custBirthday = LocalDate.parse(user.getBirthday(), DateTimeFormatter.ofPattern("MM-dd"));
        LocalDate custCreateDate = LocalDate.parse(user.getCreateDate(), DateTimeFormatter.ofPattern("yy-MM-dd"));

        // 특정 COUPON_ID로 쿠폰을 조회하는 로직
        Integer couponId;

        if (today.getYear() == custCreateDate.getYear() && today.getMonth() == custCreateDate.getMonth() && today.getDayOfMonth() == custCreateDate.getDayOfMonth()) {
            // 가입일 쿠폰 지급
            couponId = 1; // 가입일 축하 쿠폰 ID
        } else if (today.getMonth() == custBirthday.getMonth() && today.getDayOfMonth() == custBirthday.getDayOfMonth()) {
            // 생일 쿠폰 지급
            couponId = 2; // 생일 축하 쿠폰 ID
        } else if (today.getMonthValue() == 12 && today.getDayOfMonth() == 25) {
            couponId = 3; // 크리스마스 축하 쿠폰
        } else {
            // 지급 가능한 쿠폰이 없는 경우에 대한 처리
            // 예: throw new CouponNotAvailableException("지급 가능한 쿠폰이 없습니다.");
            return memberCoupon;
        }

        coupon.setCouponId(couponId); // 쿠폰의 ID를 설정
        // 쿠폰을 지급하면서 저장
        memberCouponRepository.save(memberCoupon);

        return memberCoupon;
    }


    public MemberCoupon addCoupon(String customerEmail, Integer couponId) {
        // 이메일을 통해 고객을 찾습니다.
        Optional<User> optionalCustomers = userRepository.findByEmail(customerEmail);


        if (optionalCustomers.isPresent()) {
            User customer = optionalCustomers.get();

            // 화면에서 전달받은 쿠폰 ID로 쿠폰을 조회합니다.
            Optional<Coupon> optionalCoupon = couponRepository.findById(couponId);

            // 멤버쿠폰에 수동으로 발급합니다.
            MemberCoupon memberCoupon = new MemberCoupon();
            memberCoupon.setUser(customer);
            memberCoupon.setCoupon(optionalCoupon.get());

            memberCouponRepository.save(memberCoupon);


            return memberCoupon;
        }


        return null;
    }

}
