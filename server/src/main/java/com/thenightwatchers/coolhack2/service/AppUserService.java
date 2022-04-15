package com.thenightwatchers.coolhack2.service;

import com.thenightwatchers.coolhack2.model.AppUser;
import com.thenightwatchers.coolhack2.repository.AppUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AppUserService {

    AppUserRepository appUserRepository;

    @Autowired
    public AppUserService(AppUserRepository appUserRepository){
        this.appUserRepository = appUserRepository;
    }

    public void addUser (AppUser appUser){
        appUserRepository.save(appUser);
    }

}
