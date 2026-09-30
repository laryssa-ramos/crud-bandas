package br.com.bandas.bandas_api.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.bandas.bandas_api.model.Usuario;
import br.com.bandas.bandas_api.repository.UsuarioRepository;

@Service 
public class AuthService {

    private final UsuarioRepository repository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(UsuarioRepository repository,PasswordEncoder passwordEncoder){
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    public boolean validarLogin(String email, String senha){
        Usuario usuario = repository.findByEmail(email).orElse(null);

        if(usuario == null){
            return false;
        }

        return passwordEncoder.matches(senha, usuario.getSenha());
    }
}
