/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Repository.java to edit this template
 */
package com.springdata.alquilerbarcos.CrudRepositorios;

import com.springdata.alquilerbarcos.entidades.Client;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author PSDEV
 */
public interface ClientCrudRepository extends CrudRepository<Client, Integer> {
    
    @Query(value="Select idClient, email, password, name, age", nativeQuery=true)
    public List<Client> findByEmail(String email);
    
}
