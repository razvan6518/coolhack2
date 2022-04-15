package com.thenightwatchers.coolhack2.service;


import com.thenightwatchers.coolhack2.model.AppUser;

import java.util.List;

public interface UserService {
    AppUser saveUser(AppUser appUser);

    AppUser updateUser(AppUser user, long id);

    AppUser getUser(long id);

    AppUser getUser(String username);

    List<AppUser> getUsers();
}
