package com.id.akn.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.id.akn.model.Order;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
	@Query("SELECT o FROM Order o WHERE o.user.id = :userId AND o.orderStatus IN " +
			"(com.id.akn.model.Order.OrderStatus.PLACED, com.id.akn.model.Order.OrderStatus.CONFIRMED," +
			" com.id.akn.model.Order.OrderStatus.SHIPPED, com.id.akn.model.Order.OrderStatus.DELIVERED)")
	List<Order> getUserOrders(@Param("userId") Long userId);

	List<Order> findAllByOrderByCreatedAtDesc();
	//Optional<Order> findByOrderId(String orderId);
}
