/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Repository.java to edit this template
 */
package com.springdata.alquilerbarcos.CrudRepositorios;

import com.springdata.alquilerbarcos.entidades.Admin;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author PSDEV
 */
public interface AdminUsersCrudRepository extends CrudRepository<Admin, Integer> {
    
    @Query(value="Select idAdminUser, name, email, password"/*EJ:"gama" from Admin where idAdminUser - ?"*/, nativeQuery=true)
    public List<Admin> findByIdAdminUser(int idAdminUser);
}

