package com.gecomi.modulos.seguridad.service;

import com.gecomi.modulos.seguridad.model.Usuario;

public interface ILoginService {

	Usuario verificarNombreUsuario(String usuario);
	void cambiarClave(String clave, String nombre);
}
