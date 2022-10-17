/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.Repositorios;

import com.springdata.alquilerbarcos.DTOs.DtoReportStatus;
import com.springdata.alquilerbarcos.entidades.Reservation;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.springdata.alquilerbarcos.CrudRepositorios.ReservationCrudRepository;

/**
 *
 * @author PSDEV
 */
@Repository
public class ReservationRepository {
     @Autowired
    private ReservationCrudRepository  reservationCrudRepository;
    
    public Reservation setInsert(Reservation reservation){
        Optional<Reservation> obj = reservationCrudRepository.findById(reservation.getIdReservation());
        if (obj.isEmpty() == true)
            return reservationCrudRepository.save(reservation);
        else
            return null;
    }
    
    public Reservation setUpdate(Reservation reservation){
        Optional<Reservation> obj = reservationCrudRepository.findById(reservation.getIdReservation());
        if (obj.isEmpty() == false)
            return reservationCrudRepository.save(reservation);
        else
            return null;
    }
    
    public void setDelete(Integer idReservation){
        Optional<Reservation> obj = reservationCrudRepository.findById(idReservation);
        if (obj.isEmpty() == false)
            reservationCrudRepository.deleteById(idReservation);
            
    }
    
    public List<Reservation> getall(){
        return (List<Reservation>) reservationCrudRepository.findAll();
    }
    
    public Reservation getOne(Integer idReservation){
        Optional<Reservation> obj = reservationCrudRepository.findById(idReservation);
        Reservation devolver;
        if (obj.isEmpty() == false)
            devolver = obj.get();
        else
            devolver = null;
        return  devolver;
    }    
    
    
    
    public DtoReportStatus getReportStatus(){
        DtoReportStatus dtoReportStatus = new DtoReportStatus();
        dtoReportStatus.setCancelled(reservationCrudRepository.countbystatus("cancelled"));
        dtoReportStatus.setCompleted(reservationCrudRepository.countbystatus("completed"));
        return dtoReportStatus;
    }

}
