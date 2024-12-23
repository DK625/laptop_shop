package com.id.akn.serviceimpl;

import com.id.akn.service.OrderItemService;
import org.springframework.stereotype.Service;

import com.id.akn.model.OrderItem;
import com.id.akn.repository.OrderItemRepository;

import lombok.AllArgsConstructor;

@Service 
@AllArgsConstructor
public class OrderItemServiceImpl implements OrderItemService {
	private OrderItemRepository orderItemRepository;
	
	@Override
	public OrderItem createOrderItem(OrderItem orderItem) {
		return orderItemRepository.save(orderItem);
	}
}
