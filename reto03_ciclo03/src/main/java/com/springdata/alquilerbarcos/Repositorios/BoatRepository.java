/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.Repositorios;

import com.springdata.alquilerbarcos.CrudRepositorios.BoatCrudRepository;
import com.springdata.alquilerbarcos.entidades.Boat;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author PSDEV
 */
@Repository
public class BoatRepository {
    
    @Autowired
    private BoatCrudRepository  boatCrudRepository;
    
    public Boat setInsert(Boat boat){
        Optional<Boat> obj = boatCrudRepository.findById(boat.getId());
        if (obj.isEmpty() == true)
            return boatCrudRepository.save(boat);
        else
            return null;
    }
    
    public Boat setUpdate(Boat boat){
        Optional<Boat> obj = boatCrudRepository.findById(boat.getId());
        if (obj.isEmpty() == false)
            return boatCrudRepository.save(boat);
        else
            return null;
    }
    
    public void setDelete(Integer id){
        Optional<Boat> obj = boatCrudRepository.findById(id);
        if (obj.isEmpty() == false)
            boatCrudRepository.deleteById(id);
            
    }
    
    public List<Boat> getall(){
        return (List<Boat>) boatCrudRepository.findAll();
    }
    
    public Boat getOne(Integer id){
        Optional<Boat> obj = boatCrudRepository.findById(id);
        Boat devolver;
        if (obj.isEmpty() == false)
            devolver = obj.get();
        else
            devolver = null;
        return  devolver;
    }    
}
