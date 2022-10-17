/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.servicios;

import com.springdata.alquilerbarcos.Repositorios.BoatRepository;
import com.springdata.alquilerbarcos.entidades.Boat;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author PSDEV
 */

@Service
public class BoatService {
    @Autowired
    private BoatRepository boatRepository;
    
    public Boat setInsert(Boat boat){
        return boatRepository.setInsert(boat);
    }

    public Boat setUpdate(Boat boat){
        return boatRepository.setUpdate(boat);
    }

    public void setDelete(Integer id){
        boatRepository.setDelete(id);
    }

    public Boat getOne(Integer id){
        return boatRepository.getOne(id);
    }
    
    public List<Boat> getAll(){
        return boatRepository.getall();
    }
}
