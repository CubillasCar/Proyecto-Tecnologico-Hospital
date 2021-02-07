package com.gecomi.modulos.examen.service;

import com.gecomi.modulos.examen.repo.IExamenRepo;
import com.gecomi.generic.service.impl.CRUDImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gecomi.modulos.examen.model.Examen;
import com.gecomi.generic.repo.IGenericRepo;

@Service
public class ExamenServiceImpl extends CRUDImpl<Examen, Integer> implements IExamenService{

	@Autowired
	private IExamenRepo repo;
	
	@Override
	protected IGenericRepo<Examen, Integer> getRepo(){
		return repo;
	}
}
