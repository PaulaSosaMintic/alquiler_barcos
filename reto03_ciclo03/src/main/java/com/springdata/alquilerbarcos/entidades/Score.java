/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.entidades;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author PSDEV
 */

@Entity
@Table(name="score")
public class Score implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private Integer idScore;
    private Integer points;
    private String messageBooking;

   @OneToMany(cascade = {CascadeType.PERSIST}, mappedBy = "score")
    @JsonIgnoreProperties("score")
    private List<Reservation> reservation;

    /**
     * @return the idScore
     */
    public Integer getIdScore() {
        return idScore;
    }

    /**
     * @param idScore the idScore to set
     */
    public void setIdScore(Integer idScore) {
        this.idScore = idScore;
    }

    /**
     * @return the points
     */
    public Integer getPoints() {
        return points;
    }

    /**
     * @param points the points to set
     */
    public void setPoints(Integer points) {
        this.points = points;
    }

    /**
     * @return the messageBooking
     */
    public String getMessageBooking() {
        return messageBooking;
    }

    /**
     * @param messageBooking the messageBooking to set
     */
    public void setMessageBooking(String messageBooking) {
        this.messageBooking = messageBooking;
    }

     public List<Reservation> getReservation() {
        return reservation;
    }

    public void setReservations(List<Reservation> reservation) {
        this.reservation = reservation;
    }


}
