/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.Repositorios;

import com.springdata.alquilerbarcos.CrudRepositorios.CategoryCrudRepository;
import com.springdata.alquilerbarcos.entidades.Category;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author PSDEV
 */
@Repository
public class CategoryRepository {
    @Autowired
    private CategoryCrudRepository  categoryCrudRepository;
    
    public Category setInsert(Category category){
        Optional<Category> obj = categoryCrudRepository.findById(category.getIdCategory());
        if (obj.isEmpty() == true)
            return categoryCrudRepository.save(category);
        else
            return null;
    }
    
    public Category setUpdate(Category category){
        Optional<Category> obj = categoryCrudRepository.findById(category.getIdCategory());
        if (obj.isEmpty() == false)
            return categoryCrudRepository.save(category);
        else
            return null;
    }
    
    public void setDelete(Integer id){
        Optional<Category> obj = categoryCrudRepository.findById(id);
        if (obj.isEmpty() == false)
            categoryCrudRepository.deleteById(id);
            
    }
    
    public List<Category> getall(){
        return (List<Category>) categoryCrudRepository.findAll();
    }
    
    public Category getOne(Integer id){
        Optional<Category> obj = categoryCrudRepository.findById(id);
        Category devolver;
        if (obj.isEmpty() == false)
            devolver = obj.get();
        else
            devolver = null;
        return  devolver;
    }    
}
