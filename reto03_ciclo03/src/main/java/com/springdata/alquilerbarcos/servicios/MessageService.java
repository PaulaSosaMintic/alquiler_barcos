/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.servicios;

import com.springdata.alquilerbarcos.Repositorios.MessageRepository;
import com.springdata.alquilerbarcos.entidades.Message;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author PSDEV
 */

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;
    
    public Message setInsert(Message message){
        return messageRepository.setInsert(message);
    }

    public Message setUpdate(Message message){
        return messageRepository.setUpdate(message);
    }

    public void setDelete(Integer id){
        messageRepository.setDelete(id);
    }

    public Message getOne(Integer id){
        return messageRepository.getOne(id);
    }
    
    public List<Message> getAll(){
        return messageRepository.getall();
    }
}
