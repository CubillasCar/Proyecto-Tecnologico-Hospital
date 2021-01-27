package com.gecomi.modulos.medico.service;

import com.gecomi.modulos.medico.model.Medico;
import com.gecomi.generic.service.impl.CRUDImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gecomi.generic.repo.IGenericRepo;
import com.gecomi.modulos.medico.repo.IMedicoRepo;

@Service
public class MedicoServiceImpl extends CRUDImpl<Medico, Integer> implements IMedicoService {

	@Autowired
	private IMedicoRepo repo;
	
	@Override
	protected IGenericRepo<Medico, Integer> getRepo(){
		return repo;
	}
}
