/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.controladores;

import com.springdata.alquilerbarcos.entidades.Client;
import com.springdata.alquilerbarcos.servicios.ClientService;
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

//@CrossOrigin(origins = "http://localhost:8080")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RestController
@RequestMapping("/api/Client")
public class ClientController {
    @Autowired
    private ClientService clientService;
    
    @GetMapping("/all")
    public List<Client> getAll() {
        return clientService.getAll();
    }
    
    @GetMapping("/{id}")
    public Client getOne(@PathVariable("id") Integer idClient) {
        return clientService.getOne(idClient);
    }
    
    @PutMapping("/update")
    public Client setUpdate(@RequestBody Client client) {
        return clientService.setUpdate(client);
    }
    
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Client setInsert(@RequestBody Client client) {
        return clientService.setInsert(client);
    }
    
    @DeleteMapping("/delete/{id}")
    public void setDelete(@PathVariable("id") Integer idClient) {
         clientService.setDelete(idClient);
    }
    
}
