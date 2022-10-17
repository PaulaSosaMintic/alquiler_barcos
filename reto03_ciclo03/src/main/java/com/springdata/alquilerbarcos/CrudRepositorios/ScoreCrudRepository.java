/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Repository.java to edit this template
 */
package com.springdata.alquilerbarcos.CrudRepositorios;

import com.springdata.alquilerbarcos.entidades.Score;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author PSDEV
 */
public interface ScoreCrudRepository extends CrudRepository<Score, Integer> {
    
    @Query(value="Select idScore, points, messageBooking", nativeQuery=true)
    public List<Score> findByIdScore(int idScore);
    
}
