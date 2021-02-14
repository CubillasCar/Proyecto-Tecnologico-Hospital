package com.gecomi.modulos.archivos.service;

import com.gecomi.modulos.archivos.model.Archivo;

public interface IArchivoService {

	int guardar(Archivo archivo);
	byte[] leerArchivo(Integer idArchivo);
}
