package com.id.akn.repository;

import com.id.akn.model.Laptop;
import com.id.akn.model.LaptopColor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LaptopColorRepository extends JpaRepository<LaptopColor, Integer> {

}


