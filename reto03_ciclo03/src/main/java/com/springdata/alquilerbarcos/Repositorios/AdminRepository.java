/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.springdata.alquilerbarcos.Repositorios;

import com.springdata.alquilerbarcos.CrudRepositorios.AdminUsersCrudRepository;
import com.springdata.alquilerbarcos.entidades.Admin;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author PSDEV
 */
@Repository
public class AdminRepository {
    @Autowired 
    
    private AdminUsersCrudRepository adminCrudRepository;
    
    public Admin setInsert(Admin AdminUsers){
        Optional<Admin> obj = adminCrudRepository.findById(AdminUsers.getIdAdmin());
        if (obj.isEmpty()==true){
            return adminCrudRepository.save(AdminUsers);
        }
        else
            return null;
    }
 
    public Admin setUpdate(Admin AdminUsers){
        Boolean paraGrabar=true;
        Optional<Admin> obj=adminCrudRepository.findById(AdminUsers.getIdAdmin());
            Admin objCambio;
                if(obj.isEmpty() == false){
                    objCambio = obj.get();
                    
                    if (AdminUsers.getName() != null)
                        objCambio.setName(AdminUsers.getName());
                        
                    if (AdminUsers.getEmail() != null)
                        objCambio.setEmail(AdminUsers.getEmail());
                    
                    if (AdminUsers.getPassword() != null)
                        objCambio.setPassword(AdminUsers.getPassword());
                    
                    return adminCrudRepository.save(AdminUsers);

                }
                else {
                    return null;
                }
            }
     
    public void setdelete (Integer idAdmin){
        Optional<Admin> obj = adminCrudRepository.findById(idAdmin);
                if(obj.isEmpty() == false)
                    adminCrudRepository.deleteById(idAdmin);
    }

    public List<Admin> getAll(){
        return (List<Admin>) adminCrudRepository.findAll();
    }
    
    public Admin getOne (Integer idAdmin){
        Optional<Admin> obj = adminCrudRepository.findById(idAdmin);
        Admin devolver;
        if (obj.isEmpty() == false)
            devolver = obj.get();
        else
            devolver = null;
        return  devolver;
    }
    
}