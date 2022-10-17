/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.Repositorios;

import com.springdata.alquilerbarcos.entidades.Score;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.springdata.alquilerbarcos.CrudRepositorios.ScoreCrudRepository;

/**
 *
 * @author PSDEV
 */
@Repository
public class ScoreRepository {
    @Autowired
    private ScoreCrudRepository  scoreCrudRepository;
    
    public Score setInsert(Score score){
        Optional<Score> obj = scoreCrudRepository.findById(score.getIdScore());
        if (obj.isEmpty() == true)
            return scoreCrudRepository.save(score);
        else
            return null;
    }
    
    public Score setUpdate(Score score){
        Optional<Score> obj = scoreCrudRepository.findById(score.getIdScore());
        if (obj.isEmpty() == false)
            return scoreCrudRepository.save(score);
        else
            return null;
    }
    
    public void setDelete(Integer id){
        Optional<Score> obj = scoreCrudRepository.findById(id);
        if (obj.isEmpty() == false)
            scoreCrudRepository.deleteById(id);
            
    }
    
    public List<Score> getall(){
        return (List<Score>) scoreCrudRepository.findAll();
    }
    
    public Score getOne(Integer id){
        Optional<Score> obj = scoreCrudRepository.findById(id);
        Score devolver;
        if (obj.isEmpty() == false)
            devolver = obj.get();
        else
            devolver = null;
        return  devolver;
    }    
}
