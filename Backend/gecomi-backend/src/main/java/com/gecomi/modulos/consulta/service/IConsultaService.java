package com.gecomi.modulos.consulta.service;

import java.util.List;

import com.gecomi.modulos.consulta.model.Consulta;
import com.gecomi.modulos.consulta.dto.ConsultaListaExamenDTO;
import com.gecomi.modulos.consulta.dto.ConsultaResumenDTO;
import com.gecomi.modulos.consulta.dto.FiltroConsultaDTO;
import com.gecomi.generic.service.ICRUD;

public interface IConsultaService extends ICRUD<Consulta, Integer> {

	Consulta registrarTransaccional(ConsultaListaExamenDTO dto) throws Exception;
	
	List<Consulta> buscar(FiltroConsultaDTO filtro);

	List<Consulta> buscarFecha(FiltroConsultaDTO filtro);
	
	List<ConsultaResumenDTO> listarResumen();

	byte[] generarReporte();

	
}
