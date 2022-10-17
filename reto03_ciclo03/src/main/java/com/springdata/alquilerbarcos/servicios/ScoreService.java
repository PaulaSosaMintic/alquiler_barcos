/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.servicios;

import com.springdata.alquilerbarcos.Repositorios.ScoreRepository;
import com.springdata.alquilerbarcos.entidades.Score;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author PSDEV
 */
public class ScoreService {
    @Autowired
    private ScoreRepository scoreRepository;
    
    public Score setInsert(Score score){
        return scoreRepository.setInsert(score);
    }

    public Score setUpdate(Score score){
        return scoreRepository.setUpdate(score);
    }

    public void setDelete(Integer idScore){
        scoreRepository.setDelete(idScore);
    }

    public Score getOne(Integer idScore){
        return scoreRepository.getOne(idScore);
    }
    
    public List<Score> getAll(){
        return scoreRepository.getall();
    }
}
