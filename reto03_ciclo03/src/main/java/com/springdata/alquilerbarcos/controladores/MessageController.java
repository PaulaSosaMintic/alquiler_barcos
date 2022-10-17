/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.controladores;

import com.springdata.alquilerbarcos.entidades.Message;
import com.springdata.alquilerbarcos.servicios.MessageService;
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
@RequestMapping("/api/Message")
public class MessageController {
    @Autowired
    private MessageService messageService;
    
    @GetMapping("/all")
    public List<Message> getAll() {
        return messageService.getAll();
    }
    
    @GetMapping("/{id}")
    public Message getOne(@PathVariable("id") Integer idMessage) {
        return messageService.getOne(idMessage);
    }
    
    @PutMapping("/update")
    public Message setUpdate(@RequestBody Message message) {
        return messageService.setUpdate(message);
    }
    
    @PostMapping("/save")
    public Message setInsert(@RequestBody Message message) {
        return messageService.setInsert(message);
    }
    
    @DeleteMapping("/delete/{id}")
    public void setDelete(@PathVariable("id") Integer idMessage) {
         messageService.setDelete(idMessage);
    }
}