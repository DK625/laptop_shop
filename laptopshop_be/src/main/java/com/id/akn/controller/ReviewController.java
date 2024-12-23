package com.id.akn.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.id.akn.exception.LaptopException;
import com.id.akn.exception.UserException;
import com.id.akn.model.User;
import com.id.akn.request.ReviewDTO;
import com.id.akn.service.ReviewService;
import com.id.akn.service.UserService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/reviews")
public class ReviewController {
	
	private ReviewService reviewService;
	private UserService userService;

	@PostMapping("/create")
	public ResponseEntity<com.id.akn.model.Review> createReviewHandler(@RequestBody ReviewDTO req, @RequestHeader("Authorization") String jwt) throws UserException, LaptopException{
		User user=userService.findUserProfileByJwt(jwt);
		System.out.println("Laptop id "+req.getLaptopId()+" - "+req.getReview());
		com.id.akn.model.Review review=reviewService.createReview(req, user);
		System.out.println("Laptop review "+req.getReview());
		return new ResponseEntity<com.id.akn.model.Review>(review,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/laptop/{laptopId}")
	public ResponseEntity<List<com.id.akn.model.Review>> getLaptopReviewsHandler(@PathVariable Long laptopId){
		List<com.id.akn.model.Review>reviews=reviewService.getLaptopReviews(laptopId);
		return new ResponseEntity<List<com.id.akn.model.Review>>(reviews,HttpStatus.OK);
	}

}