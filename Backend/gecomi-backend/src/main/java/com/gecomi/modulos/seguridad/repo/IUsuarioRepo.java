package com.gecomi.modulos.seguridad.repo;

import com.gecomi.modulos.seguridad.model.Usuario;
import com.gecomi.generic.repo.IGenericRepo;

public interface IUsuarioRepo extends IGenericRepo<Usuario, Integer> {

	//select * from usuario where username = ?
	Usuario findOneByUsername(String username);	
}
