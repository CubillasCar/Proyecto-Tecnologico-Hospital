package com.gecomi.modulos.consulta.dto;

import java.util.List;

import com.gecomi.modulos.consulta.model.Consulta;
import com.gecomi.modulos.examen.model.Examen;

public class ConsultaListaExamenDTO {

	//@JsonProperty("abc")
	private Consulta consulta;
	private List<Examen> lstExamen;

	public Consulta getConsulta() {
		return consulta;
	}

	public void setConsulta(Consulta consulta) {
		this.consulta = consulta;
	}

	public List<Examen> getLstExamen() {
		return lstExamen;
	}

	public void setLstExamen(List<Examen> lstExamen) {
		this.lstExamen = lstExamen;
	}

}
