package com.id.akn.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.id.akn.model.User;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	public User findByEmail(String email);
	public List<User> findAllByOrderByCreatedAtDesc();
}
