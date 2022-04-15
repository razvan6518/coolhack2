package com.razvan.yourownchef.service;

import com.razvan.yourownchef.model.AppUser;
import com.razvan.yourownchef.repository.AppUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AppUserService {

    AppUserRepository appUserRepository;

    @Autowired
    public AppUserService(AppUserRepository chefRepository){
        this.appUserRepository = chefRepository;
    }

    public void addChef (AppUser appUser){
        appUserRepository.save(appUser);
    }

}
