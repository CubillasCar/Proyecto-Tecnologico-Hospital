package com.gecomi.modulos.medico.model;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.hibernate.envers.Audited;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "medico")
@Where(clause = "deleted = false")
@SQLDelete(sql="update medico set deleted=true where id_medico = ?")
@Audited
public class Medico {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idMedico;

	@Column(name = "nombres", nullable = false, length = 70)
	private String nombres;

	@Column(name = "apellidos", nullable = false, length = 70)
	private String apellidos;

	@Column(name = "CMP", nullable = false, length = 12)
	private String CMP;

	@Column(name = "foto_url", nullable = true)
	private String fotoUrl;

	@Column(name = "deleted", nullable = true, columnDefinition = "boolean default false")
	private Boolean deleted = false;

	public Integer getIdMedico() {
		return idMedico;
	}

	public void setIdMedico(Integer idMedico) {
		this.idMedico = idMedico;
	}

	public String getNombres() {
		return nombres;
	}

	public void setNombres(String nombres) {
		this.nombres = nombres;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getCMP() {
		return CMP;
	}

	public void setCMP(String cMP) {
		CMP = cMP;
	}

	public String getFotoUrl() {
		return fotoUrl;
	}

	public void setFotoUrl(String fotoUrl) {
		this.fotoUrl = fotoUrl;
	}

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}
}
