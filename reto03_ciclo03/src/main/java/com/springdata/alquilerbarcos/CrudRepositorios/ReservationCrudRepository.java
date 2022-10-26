/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Repository.java to edit this template
 */
package com.springdata.alquilerbarcos.CrudRepositorios;

import com.springdata.alquilerbarcos.entidades.Reservation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author PSDEV
 */
public interface ReservationCrudRepository extends CrudRepository<Reservation, Integer> {
    
    /*@Query(value="Select idReservation from Reservation where idReservation = ?", nativeQuery=true)
    public Integer findByIdReservation(Integer idReservation);  NO VA ESTE CODIGO PORQUE EL CODIGO SIGUIENTE ES EL QUE SE ENLAZA CON EL DTO */

    @Query(value="Select count(idReservation) from Reservation where status = ?", nativeQuery=true)
    public Integer countbystatus(String status);     
}
