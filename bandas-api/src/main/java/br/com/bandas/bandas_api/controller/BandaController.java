package br.com.bandas.bandas_api.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.bandas.bandas_api.model.Banda;
import br.com.bandas.bandas_api.service.BandaService;

@RestController 
@RequestMapping("/bandas")
@CrossOrigin(origins = "http://localhost:4200")

public class BandaController {
    
    private final BandaService service;
     
    public BandaController(BandaService service){
        this.service = service;
    }

    @GetMapping 
    public ResponseEntity<List<Banda>> listar(){
        return ResponseEntity.ok(service.listar());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Banda> buscarPorId(@PathVariable Long id) {

        Banda banda = service.buscarPorId(id);

        if (banda == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(banda);
    }

    @PostMapping 
    public ResponseEntity<Banda> salvar(@RequestBody Banda banda){
        return ResponseEntity.ok(service.salvar(banda));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Banda> atualizar(@PathVariable Long id, @RequestBody Banda banda){
        
        Banda bandaAtualizada = service.atualizar(id, banda);

        if(bandaAtualizada == null) {
            return ResponseEntity.notFound().build();
    }

         return ResponseEntity.ok(bandaAtualizada);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id){
        Banda banda = service.buscarPorId(id);
        if(banda == null){
            return ResponseEntity.notFound().build();
        }

        service.excluir(id);

        return ResponseEntity.noContent().build();
    }

  
 
}
