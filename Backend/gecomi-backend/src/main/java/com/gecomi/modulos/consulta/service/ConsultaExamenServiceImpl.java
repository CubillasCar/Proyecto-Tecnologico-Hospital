package com.gecomi.modulos.consulta.service;

import java.util.List;

import com.gecomi.modulos.consulta.model.ConsultaExamen;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gecomi.modulos.consulta.repo.IConsultaExamenRepo;

@Service
public class ConsultaExamenServiceImpl implements IConsultaExamenService{

	@Autowired
	private IConsultaExamenRepo repo;
	
	@Override
	public List<ConsultaExamen> listarExamenesPorConsulta(Integer idconsulta) {
		return repo.listarExamenesPorConsulta(idconsulta);
	}
}
