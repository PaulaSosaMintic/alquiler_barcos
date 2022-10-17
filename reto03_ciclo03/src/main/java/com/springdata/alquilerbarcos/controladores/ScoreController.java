/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.controladores;

import com.springdata.alquilerbarcos.entidades.Score;
import com.springdata.alquilerbarcos.servicios.ScoreService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author PSDEV
 */

@RestController
@RequestMapping("/api/Score")
public class ScoreController {
    @Autowired
    private ScoreService scoreService;
    
    @GetMapping("/all")
    public List<Score> getAll() {
        return scoreService.getAll();
    }
    
    @GetMapping("/{id}")
    public Score getOne(@PathVariable("id") Integer idScore) {
        return scoreService.getOne(idScore);
    }
    
    @PutMapping("/update")
    public Score setUpdate(@RequestBody Score score) {
        return scoreService.setUpdate(score);
    }
    
    @PostMapping("/save")
    public Score setInsert(@RequestBody Score score) {
        return scoreService.setInsert(score);
    }
    
    @DeleteMapping("/delete/{id}")
    public void setDelete(@PathVariable("id") Integer idScore) {
         scoreService.setDelete(idScore);
    }
}
