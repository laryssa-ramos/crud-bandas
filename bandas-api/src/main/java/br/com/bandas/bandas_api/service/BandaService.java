package br.com.bandas.bandas_api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.bandas.bandas_api.model.Banda;
import br.com.bandas.bandas_api.repository.BandaRepository;

@Service
public class BandaService {
    
    private final BandaRepository repository;
    
    public BandaService(BandaRepository repository){
        this.repository = repository;
    }

    public List <Banda> listar(){
        return repository.findAllByOrderByIdAsc();
    }

    public Banda buscarPorId(Long id){
        return repository.findById(id).orElse(null);
    }

    public Banda salvar(Banda banda){
        return repository.save(banda);
    }

    public Banda atualizar(Long id, Banda banda){
         Banda bandaExistente = repository.findById(id).orElse(null);

         if(bandaExistente == null){
            return null;
         }

         bandaExistente.setNome(banda.getNome());
         bandaExistente.setAno(banda.getAno());
         bandaExistente.setImagem(banda.getImagem());


         return repository.save(bandaExistente);
    }

    public void excluir (Long id){
        repository.deleteById(id);
    }
}
