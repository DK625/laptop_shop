package com.id.akn.request;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RatingDTO {
	private Integer laptopId;
	private Integer rating;
	private Long orderId;
}
