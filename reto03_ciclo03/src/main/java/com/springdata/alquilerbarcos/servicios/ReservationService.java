/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.servicios;

import com.springdata.alquilerbarcos.DTOs.DtoReportStatus;
import com.springdata.alquilerbarcos.Repositorios.ReservationRepository;
import com.springdata.alquilerbarcos.entidades.Reservation;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author PSDEV
 */

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;
    
    public Reservation setInsert(Reservation reservation){
        return reservationRepository.setInsert(reservation);
    }

    public Reservation setUpdate(Reservation reservation){
        return reservationRepository.setUpdate(reservation);
    }

    public void setDelete(Integer idReservation){
        reservationRepository.setDelete(idReservation);
    }

    public Reservation getOne(Integer idReservation){
        return reservationRepository.getOne(idReservation);
    }
    
    public List<Reservation> getAll(){
        return reservationRepository.getall();
    }
    
    public DtoReportStatus getReportStatus(){
        return reservationRepository.getReportStatus();
    }
}
