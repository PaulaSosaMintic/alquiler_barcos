/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Repository.java to edit this template
 */
package com.springdata.alquilerbarcos.CrudRepositorios;

import com.springdata.alquilerbarcos.entidades.Message;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author PSDEV
 */
public interface MessageCrudRepository extends CrudRepository<Message, Integer> {
    
    @Query(value="Select idMessage from Message where idMessage - ?", nativeQuery=true)
    public List<Message> findByIdMessage(Integer idMessage);
    
}
