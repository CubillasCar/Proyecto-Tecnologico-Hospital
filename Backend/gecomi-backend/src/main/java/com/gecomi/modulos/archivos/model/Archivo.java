package com.gecomi.modulos.archivos.model;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.hibernate.envers.Audited;

import javax.persistence.*;

@Entity
@Table(name = "archivo")
@Where(clause = "deleted = false")
@SQLDelete(sql="update archivo set deleted=true where id_archivo = ?")
@Audited
public class Archivo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idArchivo;

	@Column(name = "filename", length = 50)
	private String filename;

	@Column(name = "filetype", length = 15)
	private String filetype;

	@Column(name = "contenido")
	private byte[] value;

	@Column(name = "deleted", nullable = true, columnDefinition = "boolean default false")
	private Boolean deleted = false;

	public Integer getIdArchivo() {
		return idArchivo;
	}

	public void setIdArchivo(Integer idArchivo) {
		this.idArchivo = idArchivo;
	}

	public String getFilename() {
		return filename;
	}

	public void setFilename(String filename) {
		this.filename = filename;
	}

	public String getFiletype() {
		return filetype;
	}

	public void setFiletype(String filetype) {
		this.filetype = filetype;
	}

	public byte[] getValue() {
		return value;
	}

	public void setValue(byte[] value) {
		this.value = value;
	}

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}
}
