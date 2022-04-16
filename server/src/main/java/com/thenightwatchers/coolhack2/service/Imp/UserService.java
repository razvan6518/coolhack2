package com.thenightwatchers.coolhack2.service.Imp;


import com.thenightwatchers.coolhack2.model.AppUser;
import com.thenightwatchers.coolhack2.model.Ranch;

import java.util.List;
import java.util.Set;

public interface UserService {
    AppUser saveUser(AppUser appUser);

    AppUser getUser(long id);

    List<AppUser> getUsers();

    Set<Ranch> getAllRanchesForUser(Long id);

    List<AppUser> getAllByEmail(String email);
}
