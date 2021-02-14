package com.gecomi.modulos.consulta.repo;

import java.util.List;

import com.gecomi.generic.repo.IGenericRepo;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gecomi.modulos.consulta.model.ConsultaExamen;

public interface IConsultaExamenRepo extends IGenericRepo<ConsultaExamen, Integer> {

	//@Transactional
	@Modifying
	@Query(value = "INSERT INTO consulta_examen(id_consulta, id_examen) VALUES (:idConsulta, :idExamen)", nativeQuery = true)
	Integer registrar(@Param("idConsulta") Integer idConsulta, @Param("idExamen") Integer idExamen);
	
	@Query("FROM ConsultaExamen ce where ce.consulta.idConsulta = :idConsulta")
	List<ConsultaExamen> listarExamenesPorConsulta(@Param("idConsulta") Integer idconsulta);
}
