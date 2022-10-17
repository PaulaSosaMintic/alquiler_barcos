/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.servicios;

import com.springdata.alquilerbarcos.Repositorios.AdminRepository;
import com.springdata.alquilerbarcos.entidades.Admin;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author PSDEV
 */
@Service
public class AdminService {
    
    @Autowired
    private AdminRepository adminUsersRepository;
    
    public Admin setInsert(Admin adminUsers){
        return adminUsersRepository.setInsert(adminUsers);
    }

    public Admin setUpdate(Admin adminUsers){
        return adminUsersRepository.setUpdate(adminUsers);
    }

    public void setDelete(Integer idAdminUser){
        adminUsersRepository.setdelete(idAdminUser);
    }

    public Admin getOne(Integer idAdminUser){
        return adminUsersRepository.getOne(idAdminUser);
    }
    
    public List<Admin> getAll(){
        return adminUsersRepository.getAll();
    }
    
}
