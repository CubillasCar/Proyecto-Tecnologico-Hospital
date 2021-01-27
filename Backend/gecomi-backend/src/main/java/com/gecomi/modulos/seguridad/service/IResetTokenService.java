package com.gecomi.modulos.seguridad.service;

import com.gecomi.modulos.seguridad.model.ResetToken;

public interface IResetTokenService {

	ResetToken findByToken(String token);
	
	void guardar(ResetToken token);
	
	void eliminar(ResetToken token);

}
