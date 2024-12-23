package com.id.akn.controller;

import java.util.List;

import com.id.akn.exception.*;
import com.id.akn.request.OrderDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.id.akn.model.Address;
import com.id.akn.model.Order;
import com.id.akn.model.User;
import com.id.akn.service.OrderService;
import com.id.akn.service.UserService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/orders")
public class OrderController {
	
	private OrderService orderService;
	private UserService userService;


	@PostMapping("/")
	public ResponseEntity<Order> createOrderHandler(@RequestBody OrderDTO orderDTO,
													@RequestHeader("Authorization") String jwt) throws UserException, CartItemException, ColorException, LaptopException {

		User user = userService.findUserProfileByJwt(jwt);
		Order order = orderService.createOrder(user, orderDTO);
		return new ResponseEntity<>(order, HttpStatus.OK);
	}

	@GetMapping("/")
	public ResponseEntity<List<Address>> getAddressHandler(@RequestHeader("Authorization") String jwt) throws UserException {
		User user = userService.findUserProfileByJwt(jwt);
		List<Address> allUserAddress = user.getAddresses().stream().toList();
		return new ResponseEntity<>(allUserAddress, HttpStatus.OK);
	}

	@GetMapping("/user")
	public ResponseEntity< List<Order>> userOrdersHistoryHandler(@RequestHeader("Authorization") 
	String jwt) throws OrderException, UserException{
		
		User user=userService.findUserProfileByJwt(jwt);
		List<Order> orders = orderService.userOrdersHistory(user.getId());
		return new ResponseEntity<>(orders,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/{orderId}")
	public ResponseEntity< Order> findOrderHandler(@PathVariable Long orderId, @RequestHeader("Authorization") 
	String jwt) throws OrderException, UserException{
		User user = userService.findUserProfileByJwt(jwt);
		Order orders=orderService.findOrderById(orderId);
		return new ResponseEntity<>(orders,HttpStatus.ACCEPTED);
	}

}