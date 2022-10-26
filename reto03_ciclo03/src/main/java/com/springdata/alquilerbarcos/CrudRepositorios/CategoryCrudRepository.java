/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Repository.java to edit this template
 */
package com.springdata.alquilerbarcos.CrudRepositorios;

import com.springdata.alquilerbarcos.entidades.Category;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author PSDEV
 */
public interface CategoryCrudRepository extends CrudRepository<Category, Integer> {
    
    @Query(value="Select idCategory from Category where idCategory - ?", nativeQuery=true)
    public List<Category> findByICategories(Integer idCategory);
    
}
