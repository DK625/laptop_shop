package com.id.akn.service;

import java.util.List;

import com.id.akn.exception.LaptopException;
import com.id.akn.model.User;
import com.id.akn.request.ReviewDTO;

public interface ReviewService {
	public com.id.akn.model.Review createReview(ReviewDTO req, User user) throws LaptopException;
	public List<com.id.akn.model.Review> getLaptopReviews(Long laptopId);
}
