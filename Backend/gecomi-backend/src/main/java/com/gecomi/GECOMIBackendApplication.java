package com.gecomi;

import com.gecomi.modulos.seguridad.model.Usuario;
import com.gecomi.modulos.seguridad.repo.IUsuarioRepo;
import com.gecomi.modulos.seguridad.service.UsuarioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class GECOMIBackendApplication {

	public static void main(String[] args) {SpringApplication.run(GECOMIBackendApplication.class, args);}

}


