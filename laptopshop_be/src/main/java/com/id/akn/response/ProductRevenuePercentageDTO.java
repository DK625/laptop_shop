package com.id.akn.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ProductRevenuePercentageDTO {
    private String productName;
    private Double percentage;
}
