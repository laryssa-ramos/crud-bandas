package br.com.bandas.bandas_api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.bandas.bandas_api.service.AuthService;

@RestController 
@RequestMapping ("/login")
@CrossOrigin(origins = "http://localhost:4200")

public class AuthController{
    
    private final AuthService service;

    public AuthController(AuthService service){
        this.service = service;
    }

    @PostMapping 
    public ResponseEntity<String> login (@RequestParam String email, @RequestParam String senha){

        boolean valido = service.validarLogin(email, senha);

        if(valido){
            return ResponseEntity.ok("Login realizado com sucesso!");
        }

        return ResponseEntity.status(401).body("Email ou senha inválidos.");
    }
}
