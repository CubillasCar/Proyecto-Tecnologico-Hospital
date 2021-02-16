package com.gecomi.modulos.paciente.service;

import com.gecomi.modulos.paciente.model.Paciente;
import com.gecomi.generic.service.impl.CRUDImpl;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.gecomi.generic.repo.IGenericRepo;
import com.gecomi.modulos.paciente.repo.IPacienteRepo;

import java.util.List;

@Service
public class PacienteServiceImpl extends CRUDImpl<Paciente, Integer> implements IPacienteService{

	@Autowired
	private IPacienteRepo repo;
	
	@Override
	protected IGenericRepo<Paciente, Integer> getRepo(){
		return repo;
	}
	
	@Override
	public Page<Paciente> listarPageable(Pageable pageable) {
		return repo.findAll(pageable);
	}
}
