package com.thenightwatchers.coolhack2.service;

import com.thenightwatchers.coolhack2.model.AppUser;
import com.thenightwatchers.coolhack2.model.Ranch;
import com.thenightwatchers.coolhack2.repository.RanchRepo;
import com.thenightwatchers.coolhack2.repository.UserRepo;
import com.thenightwatchers.coolhack2.service.Imp.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserServiceImpl implements UserService, UserDetailsService {

    private final UserRepo userRepo;
    private final RanchRepo ranchRepo;
    private final PasswordEncoder bCryptPasswordEncoder;

    @Override
    public AppUser saveUser(AppUser appUser) {
        appUser.setPassword(bCryptPasswordEncoder.encode(appUser.getPassword()));
        return userRepo.save(appUser);
    }

    @Override
    public AppUser getUser(long id) {
        return userRepo.findById(id).get();
    }

    @Override
    public List<AppUser> getUsers() {
        return userRepo.findAll();
    }

    public void addRanch(Long userId, Long ranchId) {
        Ranch ranch = ranchRepo.getRanchById(ranchId);
        AppUser user = userRepo.getById(userId);
        user.getRanches().add(ranch);
        ranchRepo.save(ranch);
    }

    @Override
    public Set<Ranch> getAllRanchesForUser(Long id) {
        return Set.copyOf(userRepo.getById(id).getRanches());
    }

    public List<AppUser> getAll(){
        return userRepo.findAll();
    }

    @Override
    public List<AppUser> getAllByEmail(String email) {
        return userRepo.getAllByEmail(email);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser user = userRepo.findByUsername(username);
        Collection<SimpleGrantedAuthority> roles = new ArrayList<>();
        user.getRoles().forEach(role -> roles.add(new SimpleGrantedAuthority(role)));
        return new User(user.getUsername(), user.getPassword(), roles);
    }
}
