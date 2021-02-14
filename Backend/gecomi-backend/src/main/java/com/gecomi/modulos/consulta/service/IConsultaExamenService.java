package com.gecomi.modulos.consulta.service;

import java.util.List;

import com.gecomi.modulos.consulta.model.ConsultaExamen;

public interface IConsultaExamenService {

	List<ConsultaExamen> listarExamenesPorConsulta(Integer idconsulta);

}
