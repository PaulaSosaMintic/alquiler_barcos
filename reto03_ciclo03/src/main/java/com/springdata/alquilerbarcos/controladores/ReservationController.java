/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.controladores;

import com.springdata.alquilerbarcos.DTOs.DtoReportStatus;
import com.springdata.alquilerbarcos.entidades.Reservation;
import com.springdata.alquilerbarcos.servicios.ReservationService;
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
@RequestMapping("/api/Reservation")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;
    
    @GetMapping("/all")
    public List<Reservation> getAll() {
        return reservationService.getAll();
    }
    
    @GetMapping("/{id}")
    public Reservation getOne(@PathVariable("id") Integer idReservation) {
        return reservationService.getOne(idReservation);
    }
    
    @PutMapping("/update")
    public Reservation setUpdate(@RequestBody Reservation reservation) {
        return reservationService.setUpdate(reservation);
    }
    
    @PostMapping("/save")
    public Reservation setInsert(@RequestBody Reservation reservation) {
        return reservationService.setInsert(reservation);
    }
    
    @DeleteMapping("/delete/{id}")
    public void setDelete(@PathVariable("id") Integer idReservation) {
         reservationService.setDelete(idReservation);
    }
    
    @GetMapping("/report-status")
    public DtoReportStatus getReportStatus() {
        return reservationService.getReportStatus();
    }    
    
}
