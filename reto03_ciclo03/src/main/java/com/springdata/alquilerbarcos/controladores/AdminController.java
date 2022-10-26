/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.controladores;

import com.springdata.alquilerbarcos.entidades.Admin;
import com.springdata.alquilerbarcos.servicios.AdminService;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;



/**
 *
 * @author PSDEV
 */

@RestController
@RequestMapping("/api/Admin")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class AdminController {
    @Autowired
    private AdminService adminService;
    
    @GetMapping("/all")
    public List<Admin> getAll() {
        return adminService.getAll();
    }
    
    @GetMapping("/{id}")
    public Admin getOne(@PathVariable("idAdmin") Integer idAdmin) {
        return adminService.getOne(idAdmin);
    }
    
    @PutMapping("/update")
    public Admin setUpdate(@RequestBody Admin admin) {
        return adminService.setUpdate(admin);
    }
    
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Admin setInsert(@RequestBody Admin admin) {
        return adminService.setInsert(admin);
    }
    
    @DeleteMapping("/delete/{id}")
    public void setDelete(@PathVariable("idAdmin") Integer idAdmin) {
         adminService.setDelete(idAdmin);
    }
}
