package com.project.ecofurniture.repository.auth;

import com.project.ecofurniture.model.entity.auth.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * ======================================
 * FileName : UserRepository
 * Author : DH.Lee
 * Date : 2023-11-27
 * Note :
 * 1) 유저 인터페이스
 * ======================================
 */
@Repository
public interface UserRepository extends JpaRepository<User, String> {
    //    like 검색
    Page<User> findAllByUsernameContains(String username, Pageable pageable);

    Optional<User> findByEmailAndUsernameAndBirthday(String email, String username, String birthday);

} // end of interface
