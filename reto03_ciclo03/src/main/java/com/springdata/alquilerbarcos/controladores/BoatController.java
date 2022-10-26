/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.controladores;

import com.springdata.alquilerbarcos.entidades.Boat;
import com.springdata.alquilerbarcos.servicios.BoatService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author PSDEV
 */

@RestController
@RequestMapping("/api/Boat")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class BoatController {
    @Autowired
    private BoatService boatService;
    
    @GetMapping("/all")
    public List<Boat> getAll() {
        return boatService.getAll();
    }
    
    @GetMapping("/{id}")
    public Boat getOne(@PathVariable("id") Integer id) {
        return boatService.getOne(id);
    }
    
    @PutMapping("/update")
    public Boat setUpdate(@RequestBody Boat boat) {
        return boatService.setUpdate(boat);
    }
    
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Boat setInsert(@RequestBody Boat boat) {
        return boatService.setInsert(boat);
    }
    
    @DeleteMapping("/delete/{id}")
    public void setDelete(@PathVariable("id") Integer id) {
         boatService.setDelete(id);
    }
}
