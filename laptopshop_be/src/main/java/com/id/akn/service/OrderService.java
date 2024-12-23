package com.id.akn.service;

import java.util.List;

import com.id.akn.exception.*;
import com.id.akn.model.Order;
import com.id.akn.model.User;
import com.id.akn.request.OrderDTO;

public interface OrderService {
	Order createOrder(User user, OrderDTO orderDTO) throws CartItemException, UserException, LaptopException, ColorException;
	Order findOrderById(Long orderId) throws OrderException;
	//Order findOrderByOrderId(String orderId) throws OrderException;
	List<Order> userOrdersHistory(Long userId);
	Order confirmedOrder(Long orderId) throws OrderException;
	Order shippedOrder(Long orderId) throws OrderException;
	Order deliveredOrder(Long orderId) throws OrderException;
	Order canceledOrder(Long orderId) throws OrderException;
	List<Order> getAllOrders();
	void deleteOrder(Long orderId) throws OrderException;
	void updatePaymentStatus(Long txnRef, Order.PaymentStatus status) throws OrderException;
}
