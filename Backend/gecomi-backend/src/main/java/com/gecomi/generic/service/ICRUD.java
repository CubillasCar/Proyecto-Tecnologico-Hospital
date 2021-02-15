package com.gecomi.generic.service;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICRUD<T, ID> {
	
	T registrar(T pac) throws Exception;
	T modificar(T pac) throws Exception;
	List<T> listar() throws Exception;
	T listarPorId(ID id) throws Exception;
	void eliminar(ID id) throws Exception;

}
