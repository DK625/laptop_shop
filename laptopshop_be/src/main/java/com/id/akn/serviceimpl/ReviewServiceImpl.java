package com.id.akn.serviceimpl;

import java.time.LocalDateTime;
import java.util.List;

import com.id.akn.exception.OrderException;
import com.id.akn.model.Order;
import com.id.akn.repository.LaptopRepository;
import com.id.akn.repository.OrderRepository;
import com.id.akn.service.ReviewService;
import org.springframework.stereotype.Service;

import com.id.akn.exception.LaptopException;
import com.id.akn.model.Laptop;
import com.id.akn.model.User;
import com.id.akn.repository.ReviewRepository;
import com.id.akn.request.ReviewDTO;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ReviewServiceImpl implements ReviewService {
	private ReviewRepository reviewRepository;
	private LaptopRepository laptopRepository;
	private OrderRepository orderRepository;
	
	@Override
	public com.id.akn.model.Review createReview(ReviewDTO req, User user) throws LaptopException, OrderException {
//		Laptop laptop = laptopRepository.findById(req.getLaptopId()).orElseThrow(() -> new LaptopException("Laptop not found"));
//		Order order = orderRepository.findById(req.getOrderId()).orElseThrow(() -> new OrderException("You have not placed an order yet."));
		com.id.akn.model.Review review = new com.id.akn.model.Review();
//		if(!order.getOrderStatus().equals(Order.OrderStatus.DELIVERED)){
//			throw new OrderException("Order has not completed");
//		}
//		else {
		Laptop laptop = laptopRepository.findById(req.getLaptopId()).orElseThrow(() -> new LaptopException("Laptop not found"));
		review.setLaptop(laptop);
		review.setUser(user);
		review.setReview(req.getReview());
		review.setCreatedAt(LocalDateTime.now());
		reviewRepository.save(review);
//		}
		return review;
	}
	@Override
	public List<com.id.akn.model.Review> getLaptopReviews(Long laptopId) {
		return reviewRepository.getAllLaptopReviews(laptopId);
	}
}
