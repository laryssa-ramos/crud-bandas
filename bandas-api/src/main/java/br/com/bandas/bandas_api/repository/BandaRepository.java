package br.com.bandas.bandas_api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.bandas.bandas_api.model.Banda;

@Repository 
public interface BandaRepository  extends JpaRepository<Banda, Long>{
    List<Banda> findAllByOrderByIdAsc();
}
