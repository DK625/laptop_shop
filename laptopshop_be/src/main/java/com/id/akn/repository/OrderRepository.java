package com.id.akn.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
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
	Page<Order> findByPaymentStatusAndUserId(Order.PaymentStatus paymentStatus, Long userId, Pageable pageable);
	Page<Order> findByUserId(Long userId, Pageable pageable);
	@Query("SELECT o FROM Order o WHERE (:paymentStatus IS NULL OR o.paymentStatus = :paymentStatus) AND o.user.id = :userId")
	Page<Order> findAllByPaymentStatusAndUserId(
			@Param("paymentStatus") Order.PaymentStatus paymentStatus,
			@Param("userId") Long userId,
			Pageable pageable
	);


	@Modifying
	@Query("UPDATE Order o SET o.orderStatus = :orderStatus WHERE o.id = :orderId AND o.user.id = :userId")
	int updateOrderStatus(@Param("orderId") Long orderId,
						  @Param("userId") Long userId,
						  @Param("orderStatus") Order.OrderStatus orderStatus);

	Optional<Order> findByIdAndUserId(Long orderId, Long userId);

	@Query(value = "SELECT SUM(total_price) FROM tbl_order", nativeQuery = true)
	Double getTotalRevenue();

	@Query(value = "SELECT COUNT(*) FROM tbl_order", nativeQuery = true)
	Long getTotalOrder();
}
