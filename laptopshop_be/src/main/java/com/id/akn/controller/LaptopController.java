package com.id.akn.controller;

import java.io.IOException;
import java.util.List;
import java.util.Set;

import com.id.akn.exception.*;
import com.id.akn.request.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.id.akn.service.LaptopService;

import lombok.AllArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@RestController
@AllArgsConstructor(onConstructor = @__(@Autowired))
@RequestMapping("/laptops")
public class LaptopController {
	private LaptopService laptopService;

	@GetMapping
	public ResponseEntity<List<LaptopDTO>> getAllLaptops() {
		return ResponseEntity.ok(laptopService.getAllLaptops());
	}

	@GetMapping("/filter")
	public ResponseEntity<Page<LaptopDTO>> findLaptopByCategoryHandler(
			@RequestParam (required = false)List<String> brands,
			@RequestParam(required = false) String category,
			@RequestParam(required = false) String gpuType,
			@RequestParam (required = false) List<String> cpuTechnologies,
			@RequestParam (required = false) List<Byte> ramMemory,
			@RequestParam (required = false) List<Short> diskCapacity,
			@RequestParam (required = false) List<Float> screenSize,
			@RequestParam(required = false) Long minPrice,
			@RequestParam(required = false) Long maxPrice,
			Pageable pageable) {

		Page<LaptopDTO> laptops = laptopService.getAllLaptop(
				brands, category, gpuType, cpuTechnologies, ramMemory, diskCapacity, screenSize, minPrice, maxPrice, pageable);
		return ResponseEntity.ok(laptops);
	}

	@GetMapping("/search")
	public ResponseEntity<List<LaptopDTO>> searchLaptopHandler(@RequestParam String q){
		List<LaptopDTO> laptops = laptopService.searchLaptop(q);
		return ResponseEntity.ok(laptops);
	}

	@GetMapping("/hotdeals")
	public ResponseEntity<List<LaptopDTO>> getTop10LaptopsByDiscount() {
		List<LaptopDTO> laptopDTOs = laptopService.getTop10LaptopsByDiscount();
		return ResponseEntity.accepted().body(laptopDTOs);
	}

	@GetMapping("/{id}")
	public ResponseEntity<LaptopDTO> getLaptopById(@PathVariable Integer id) throws LaptopException{
			return ResponseEntity.ok(laptopService.getLaptopById(id));
	}

	@PostMapping(value = "/api/admin", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<LaptopDTO> createLaptop(@Valid @RequestBody LaptopDTO laptopDTO)
            throws LaptopException, OsVersionException, BrandException, CpuException, ColorException {
			return ResponseEntity.status(HttpStatus.CREATED).body(laptopService.createLaptop(laptopDTO));
    }

	@PostMapping(value = "/api/admin/{laptopId}/images", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<LaptopDTO> uploadLaptopImages(@PathVariable Integer laptopId, @RequestParam("files") Set<MultipartFile> files)
            throws IOException, OsVersionException, BrandException, CpuException, LaptopException, ColorException {
		LaptopDTO updatedProduct = laptopService.saveLaptopImages(laptopId, files);
		return ResponseEntity.accepted().body(updatedProduct);
	}

	@PutMapping("/api/admin/{id}")
	public ResponseEntity<LaptopDTO> updateLaptop(@PathVariable Integer id, @Valid @RequestBody LaptopDTO laptopDTO)
            throws LaptopException, OsVersionException, BrandException, CpuException, IOException, ColorException {
			return ResponseEntity.accepted().body(laptopService.updateLaptop(id, laptopDTO));
    }


	@DeleteMapping("/api/admin/{id}")
	public ResponseEntity<Void> deleteLaptop(@PathVariable Integer id) throws LaptopException, IOException{
			laptopService.deleteLaptop(id);
			return ResponseEntity.accepted().build();
    }

}
