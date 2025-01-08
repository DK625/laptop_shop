package com.id.akn.serviceimpl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import com.id.akn.exception.OrderException;
import com.id.akn.model.Order;
import com.id.akn.model.OrderItem;
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
		List<Order> order = orderRepository.findOrderByUser(user);
		Laptop laptop = laptopRepository.findById(req.getLaptopId()).orElseThrow(() -> new LaptopException("Laptop not found"));

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

		com.id.akn.model.Rating rating = new com.id.akn.model.Rating();
		rating.setLaptop(laptop);
		rating.setUser(user);
		rating.setRating(req.getRating());
		rating.setCreatedAt(LocalDateTime.now());
		ratingRepository.save(rating);
		return rating;
	}

	@Override
	public List<com.id.akn.model.Rating> getLaptopRatings(Long laptopId) {
		return ratingRepository.getAllLaptopRatings(laptopId);
	}

}
