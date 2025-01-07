package com.id.akn.serviceimpl;

import java.time.LocalDateTime;
import java.util.List;

import com.id.akn.exception.OrderException;
import com.id.akn.model.Order;
import com.id.akn.repository.LaptopRepository;
import com.id.akn.repository.OrderRepository;
import com.id.akn.service.RatingService;
import org.springframework.stereotype.Service;

import com.id.akn.exception.LaptopException;
import com.id.akn.model.Laptop;
import com.id.akn.model.User;
import com.id.akn.repository.RatingRepository;
import com.id.akn.request.RatingDTO;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class RatingServiceImpl implements RatingService {
	private RatingRepository ratingRepository;
	private LaptopRepository laptopRepository;
	private OrderRepository orderRepository;

	@Override
	public com.id.akn.model.Rating createRating(RatingDTO req, User user) throws LaptopException, OrderException {
		Order order = orderRepository.findById(req.getOrderId()).orElseThrow(() -> new OrderException("Order not found"));
		Laptop laptop = laptopRepository.findById(req.getLaptopId()).orElseThrow(() -> new LaptopException("Laptop not found"));
		com.id.akn.model.Rating rating = new com.id.akn.model.Rating();
		if(!order.getOrderStatus().equals(Order.OrderStatus.DELIVERED)){
			throw new OrderException("Order has not completed");
		}else{
			rating.setLaptop(laptop);
			rating.setUser(user);
			rating.setRating(req.getRating());
			rating.setCreatedAt(LocalDateTime.now());
			ratingRepository.save(rating);
		}
		return rating;
	}

	@Override
	public List<com.id.akn.model.Rating> getLaptopRatings(Long laptopId) {
		return ratingRepository.getAllLaptopRatings(laptopId);
	}

}
