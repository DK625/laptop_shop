package com.id.akn.service;

import java.io.IOException;
import java.util.List;
import java.util.Set;

import com.id.akn.exception.*;
import com.id.akn.request.LaptopDTO;
import org.springframework.data.domain.Page;

import com.id.akn.request.LaptopDTO;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

public interface LaptopService {
	List<LaptopDTO> getAllLaptops();
	LaptopDTO getLaptopById(Integer id) throws LaptopException;
	LaptopDTO createLaptop(LaptopDTO laptopDTO) throws LaptopException, OsVersionException, BrandException, CpuException, ColorException;
	LaptopDTO saveLaptopImages(Integer laptopId, Set<MultipartFile> files) throws LaptopException, OsVersionException, BrandException, CpuException, IOException, ColorException;
	LaptopDTO updateLaptop(Integer id, LaptopDTO laptopDTO) throws LaptopException, OsVersionException, BrandException, CpuException, IOException, ColorException;
	void deleteLaptop(Integer id) throws LaptopException, IOException;
	Page<LaptopDTO> getAllLaptop(List<String> brands, String category, String gpuType, List<String> cpuTechnologies,
								 List<Byte> ramCapacity, List<Short> diskCapacity, List<Float> screenSize,
								 Long minPrice, Long maxPrice, Pageable pageable);
	List<LaptopDTO> searchLaptop(String query);
	List<LaptopDTO> getTop10LaptopsByDiscount() ;
}
