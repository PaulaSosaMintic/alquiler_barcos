/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.Repositorios;

import com.springdata.alquilerbarcos.CrudRepositorios.ClientCrudRepository;
import com.springdata.alquilerbarcos.entidades.Client;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author PSDEV
 */
@Repository
public class ClientRepository {
    @Autowired
    private ClientCrudRepository  clientCrudRepository;
    
    public Client setInsert(Client client){
            return clientCrudRepository.save(client);
    }
    
    public Client setUpdate(Client client){
        Optional<Client> obj = clientCrudRepository.findById(client.getIdClient());
        if (obj.isEmpty() == false)
            return clientCrudRepository.save(client);
        else
            return null;
    }
    
    public void setDelete(Integer id){
        Optional<Client> obj = clientCrudRepository.findById(id);
        if (obj.isEmpty() == false)
            clientCrudRepository.deleteById(id);
            
    }
    
    public List<Client> getall(){
        return (List<Client>) clientCrudRepository.findAll();
    }
    
    public Client getOne(Integer id){
        Optional<Client> obj = clientCrudRepository.findById(id);
        Client devolver;
        if (obj.isEmpty() == false)
            devolver = obj.get();
        else
            devolver = null;
        return  devolver;
    }    
}
