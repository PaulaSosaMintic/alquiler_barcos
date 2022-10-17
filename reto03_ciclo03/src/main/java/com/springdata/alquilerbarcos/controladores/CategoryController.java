/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.controladores;

import com.springdata.alquilerbarcos.entidades.Category;
import com.springdata.alquilerbarcos.servicios.CategoryService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author PSDEV
 */

@RestController
@RequestMapping("/api/Category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    
    @GetMapping("/all")
    public List<Category> getAll() {
        return categoryService.getAll();
    }
    
    @GetMapping("/{id}")
    public Category getOne(@PathVariable("id") Integer idCategory) {
        return categoryService.getOne(idCategory);
    }
    
    @PutMapping("/update")
    public Category setUpdate(@RequestBody Category category) {
        return categoryService.setUpdate(category);
    }
    
    @PostMapping("/save")
    public Category setInsert(@RequestBody Category category) {
        return categoryService.setInsert(category);
    }
    
    @DeleteMapping("/delete/{id}")
    public void setDelete(@PathVariable("id") Integer idCategory) {
         categoryService.setDelete(idCategory);
    }
}
