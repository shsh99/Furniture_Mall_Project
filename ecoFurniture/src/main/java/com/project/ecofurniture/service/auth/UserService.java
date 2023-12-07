package com.project.ecofurniture.service.auth;

import com.project.ecofurniture.model.dto.auth.request.UserCheckInfoReq;
import com.project.ecofurniture.model.dto.auth.request.ChangePwReq;
import com.project.ecofurniture.model.entity.auth.User;
import com.project.ecofurniture.repository.auth.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * ======================================
 * FileName : UserService
 * Author : DH.Lee
 * Date : 2023-11-27
 * Note :
 * 1) 유저 서비스
 * ======================================
 */
@Slf4j
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository; // DI

    @Autowired
    PasswordEncoder passwordEncoder; // DI

    // 전체 조회 + 페이징
    public Page<User> findAll(Pageable pageable) {
        Page<User> page = userRepository.findAll(pageable);

        return page;
    }

    // username like 조회 + 페이징
    public Page<User> findAllByNameContains(String username, Pageable pageable) {
        Page<User> page
                = userRepository.findAllByUsernameContains(username, pageable);
        return page;
    }

    // 저장 함수(수정 함수)
    public User save(User user) {
        User user2 = userRepository.save(user);
        return user2;
    }

    // 상세 조회(1건 조회)
    public Optional<User> findById(String email) {
        Optional<User> optionalUser
                = userRepository.findById(email);
        return optionalUser;
    }

    // 삭제 함수
    public boolean removeById(String email) {
        if (userRepository.existsById(email)) { // email 있는지 확인
            userRepository.deleteById(email);   // 삭제 진행
            return true;
        }
        return false;
    }

    // TODO: email 있는지 확인하는 함수
    public boolean existsbyId(String email) {
        boolean bResult = userRepository.existsById(email);
        return bResult;
    }

    public void checkInfo(UserCheckInfoReq req) throws Exception {
        Optional<User> userOpt =  userRepository.findByEmailAndUsernameAndBirthday(req.getEmail(),req.getUsername(),req.getBirthday());
        if(userOpt.isEmpty()){
            // TODO AOP
            throw new Exception("invalid user info");
        }
    }

    @Transactional
    public void changePw(ChangePwReq req) throws Exception {
        if(!req.getPassword().equals(req.getPasswordCk())){
            throw new Exception("password != passwordCk");
        }
        Optional<User> userOpt =  userRepository.findByEmailAndUsernameAndBirthday(req.getEmail(),req.getUsername(),req.getBirthday());
        if(userOpt.isEmpty()){
            // TODO AOP
            throw new Exception("invalid user info");
        }
        User user = userOpt.get();
        user.setPassword(passwordEncoder.encode(req.getPassword()));
    }
}  // end of class

