package com.gecomi.modulos.seguridad.repo;

import com.gecomi.modulos.seguridad.model.ResetToken;
import com.gecomi.generic.repo.IGenericRepo;

public interface IResetTokenRepo extends IGenericRepo<ResetToken, Integer> {
	
	//from ResetToken rt where rt.token = :?
	ResetToken findByToken(String token);

}
