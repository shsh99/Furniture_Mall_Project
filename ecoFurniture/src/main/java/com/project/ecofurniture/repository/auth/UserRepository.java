package com.project.ecofurniture.repository.auth;

import com.project.ecofurniture.model.entity.auth.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * packageName : com.project.ecofurniture.repository.auth
 * fileName : CustomersRepository
 * author : GB_Jo
 * date : 2023-11-27
 * description :
 * 요약 :
 * <p>
 * ===========================================
 */
@Repository
public interface UserRepository extends JpaRepository<User,String> {
    Optional<User> findByEmail(String email);
}
