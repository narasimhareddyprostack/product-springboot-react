package com.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.product.model.Product;


public interface ProductRepositroy extends JpaRepository<Product, Integer> {

}
