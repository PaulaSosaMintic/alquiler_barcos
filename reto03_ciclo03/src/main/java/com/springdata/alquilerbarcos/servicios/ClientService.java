/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.servicios;

import com.springdata.alquilerbarcos.Repositorios.ClientRepository;
import com.springdata.alquilerbarcos.entidades.Client;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author PSDEV
 */

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;
    
    public Client setInsert(Client client){
        return clientRepository.setInsert(client);
    }

    public Client setUpdate(Client client){
        return clientRepository.setUpdate(client);
    }

    public void setDelete(Integer id){
        clientRepository.setDelete(id);
    }

    public Client getOne(Integer id){
        return clientRepository.getOne(id);
    }
    
    public List<Client> getAll(){
        return clientRepository.getall();
    }
}
