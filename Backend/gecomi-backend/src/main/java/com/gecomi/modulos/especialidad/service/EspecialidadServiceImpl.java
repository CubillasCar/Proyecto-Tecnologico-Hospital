package com.gecomi.modulos.especialidad.service;

import com.gecomi.modulos.especialidad.repo.IEspecialidadRepo;
import com.gecomi.generic.service.impl.CRUDImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gecomi.modulos.especialidad.model.Especialidad;
import com.gecomi.generic.repo.IGenericRepo;

@Service
public class EspecialidadServiceImpl extends CRUDImpl<Especialidad, Integer> implements IEspecialidadService{

	@Autowired
	private IEspecialidadRepo repo;
	
	@Override
	protected IGenericRepo<Especialidad, Integer> getRepo(){
		return repo;
	}
}
