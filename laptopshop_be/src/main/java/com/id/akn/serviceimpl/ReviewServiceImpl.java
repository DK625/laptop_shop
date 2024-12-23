package com.id.akn.serviceimpl;

import java.time.LocalDateTime;
import java.util.List;

import com.id.akn.repository.LaptopRepository;
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
	
	@Override
	public com.id.akn.model.Review createReview(ReviewDTO req, User user) throws LaptopException {
		Laptop laptop = laptopRepository.findById(req.getLaptopId()).orElseThrow(() -> new LaptopException("Laptop not found"));
		com.id.akn.model.Review review = new com.id.akn.model.Review();
		review.setLaptop(laptop);
		review.setUser(user);
		review.setReview(req.getReview());
		review.setCreatedAt(LocalDateTime.now());
		return reviewRepository.save(review);
	}
	@Override
	public List<com.id.akn.model.Review> getLaptopReviews(Long laptopId) {
		return reviewRepository.getAllLaptopReviews(laptopId);
	}
}
