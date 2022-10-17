/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.Repositorios;

import com.springdata.alquilerbarcos.CrudRepositorios.MessageCrudRepository;
import com.springdata.alquilerbarcos.entidades.Message;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author PSDEV
 */
@Repository
public class MessageRepository {
    @Autowired
    private MessageCrudRepository  messageCrudRepository;
    
    public Message setInsert(Message message){
        Optional<Message> obj = messageCrudRepository.findById(message.getIdMessage());
        if (obj.isEmpty() == true)
            return messageCrudRepository.save(message);
        else
            return null;
    }
    
    public Message setUpdate(Message message){
        Optional<Message> obj = messageCrudRepository.findById(message.getIdMessage());
        if (obj.isEmpty() == false)
            return messageCrudRepository.save(message);
        else
            return null;
    }
    
    public void setDelete(Integer id){
        Optional<Message> obj = messageCrudRepository.findById(id);
        if (obj.isEmpty() == false)
            messageCrudRepository.deleteById(id);
            
    }
    
    public List<Message> getall(){
        return (List<Message>) messageCrudRepository.findAll();
    }
    
    public Message getOne(Integer id){
        Optional<Message> obj = messageCrudRepository.findById(id);
        Message devolver;
        if (obj.isEmpty() == false)
            devolver = obj.get();
        else
            devolver = null;
        return  devolver;
    }    
}
