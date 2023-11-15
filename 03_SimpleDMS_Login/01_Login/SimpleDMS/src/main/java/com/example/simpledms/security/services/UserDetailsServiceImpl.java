package com.example.simpledms.security.services;

import com.example.simpledms.model.entity.auth.User;
import com.example.simpledms.repository.auth.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

// 유저 인증을 위한 클래스
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
  @Autowired
  UserRepository userRepository;

//  유저 인증을 위한 함수
//  DB에 있는 지 확인해서 있으면 UserDetailsImpl 로 UserDto 객체 생성
  @Override
  @Transactional
  public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    //  유저 인증을 위한 함수 ( DB 확인 ) : 기본키 (이메일)
    User user = userRepository.findById(email)
        .orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + email));

    //  DB에 있는 지 확인해서 있으면 UserDetailsImpl 로 User 객체 생성
    return UserDetailsImpl.build(user);
  }

}
