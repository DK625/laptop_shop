package com.id.akn.serviceimpl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import com.id.akn.exception.OrderException;
import com.id.akn.model.Order;
import com.id.akn.model.OrderItem;
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

		List<Order> order = orderRepository.findOrderByUser(user);

		for(int i = 0; i < order.size(); ++i) {
			List<OrderItem> tmp = order.get(i).getOrderItems();
			for(int j = 0; j < tmp.size(); ++i) {
				if(!Objects.equals(tmp.get(j).getLaptop().getId(), req.getLaptopId())) {
					throw new OrderException("You cannot review this product");
				}
				else {
					if(!order.get(i).getOrderStatus().equals(Order.OrderStatus.DELIVERED)) {
						throw new OrderException("You cannot review this product");
					}
				}
			}
		}

		com.id.akn.model.Review review = new com.id.akn.model.Review();

		Laptop laptop = laptopRepository.findById(req.getLaptopId()).orElseThrow(() -> new LaptopException("Laptop not found"));
		review.setLaptop(laptop);
		review.setUser(user);
		review.setReview(req.getReview());
		review.setCreatedAt(LocalDateTime.now());
		reviewRepository.save(review);

		return review;
	}
	@Override
	public List<com.id.akn.model.Review> getLaptopReviews(Long laptopId) {
		return reviewRepository.getAllLaptopReviews(laptopId);
	}
}
