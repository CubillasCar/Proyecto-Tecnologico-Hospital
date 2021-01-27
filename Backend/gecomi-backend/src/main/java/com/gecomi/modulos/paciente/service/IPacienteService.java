package com.gecomi.modulos.paciente.service;

import com.gecomi.generic.service.ICRUD;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.gecomi.modulos.paciente.model.Paciente;

public interface IPacienteService extends ICRUD<Paciente, Integer> {

	Page<Paciente> listarPageable(Pageable pageable);

}
