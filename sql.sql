create table oauth_access_token (
  token_id VARCHAR(256),
  token bytea,
  authentication_id VARCHAR(256),
  user_name VARCHAR(256),
  client_id VARCHAR(256),
  authentication bytea,
  refresh_token VARCHAR(256)
);

create table oauth_refresh_token (
  token_id VARCHAR(256),
  token bytea,
  authentication bytea
);

INSERT INTO usuario(id_usuario, nombre, clave, estado) values (1, 'carlos', '$2a$10$ju20i95JTDkRa7Sua63JWOChSBc0MNFtG/6Sps2ahFFqN.HCCUMW.', '1');
INSERT INTO usuario(id_usuario, nombre, clave, estado) values (2, 'guillermo', '$2a$10$ju20i95JTDkRa7Sua63JWOChSBc0MNFtG/6Sps2ahFFqN.HCCUMW.', '1');
INSERT INTO usuario(id_usuario, nombre, clave, estado) values (3, 'dominique', '$2a$10$ju20i95JTDkRa7Sua63JWOChSBc0MNFtG/6Sps2ahFFqN.HCCUMW.', '1');


INSERT INTO Rol (id_rol, nombre, descripcion) VALUES (1, 'ADMIN', 'Administrador');
INSERT INTO Rol (id_rol, nombre, descripcion) VALUES (2, 'USER', 'Recepcionista');
INSERT INTO Rol (id_rol, nombre, descripcion) VALUES (3, 'DBA', 'Admin de bd');
INSERT INTO Rol (id_rol, nombre, descripcion) VALUES (4, 'DOC', 'Doctor');

INSERT INTO usuario_rol (id_usuario, id_rol) VALUES (1, 1);
INSERT INTO usuario_rol (id_usuario, id_rol) VALUES (1, 3);
INSERT INTO usuario_rol (id_usuario, id_rol) VALUES (2, 2);
INSERT INTO usuario_rol (id_usuario, id_rol) VALUES (3, 2);



INSERT INTO menu(id_menu, nombre, icono, url) VALUES (1, 'Buscar', 'search', '/buscar');
INSERT INTO menu(id_menu, nombre, icono, url) VALUES (2, 'Registrar', 'insert_drive_file', '/consulta');
INSERT INTO menu(id_menu, nombre, icono, url) VALUES (3, 'Registrar E.', 'insert_drive_file', '/consulta-especial');
INSERT INTO menu(id_menu, nombre, icono, url) VALUES (4, 'Registrar W.', 'view_carousel', '/consulta-wizard');
INSERT INTO menu(id_menu, nombre, icono, url) VALUES (5, 'Especialiades', 'star_rate', '/especialidad');
INSERT INTO menu(id_menu, nombre, icono, url) VALUES (6, 'Médicos', 'healing', '/medico');
INSERT INTO menu(id_menu, nombre, icono, url) VALUES (7, 'Examenes', 'assignment', '/examen');
INSERT INTO menu(id_menu, nombre, icono, url) VALUES (8, 'Pacientes', 'accessibility', '/paciente');
INSERT INTO menu(id_menu, nombre, icono, url) VALUES (9, 'Reportes', 'assessment', '/reporte');


INSERT INTO menu_rol (id_menu, id_rol) VALUES (1, 1);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (2, 1);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (3, 1);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (4, 1);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (5, 1);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (6, 1);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (7, 1);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (8, 1);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (9, 1);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (3, 2);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (4, 2);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (5, 2);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (6, 2);

	
CREATE OR REPLACE FUNCTION fn_listarResumen () 
 RETURNS TABLE (
 cantidad INT,
 fecha TEXT
) 
AS $$
DECLARE 
    var_r record;
BEGIN
FOR var_r IN(
	select (count(*)::int) as cantidad, to_char(c.fecha, 'dd/MM/yyyy') as fecha from consulta c 
	group by to_char(c.fecha, 'dd/MM/yyyy') order by to_char(c.fecha, 'dd/MM/yyyy') asc 
	)  
 LOOP
        cantidad := var_r.cantidad; 
 		fecha := var_r.fecha;
        RETURN NEXT;
 END LOOP;
END; $$ 
LANGUAGE 'plpgsql';

--RECEPTIONISTA MENU
INSERT INTO menu(id_menu, nombre, icono, url) VALUES (10, 'Medicos.RM', 'healing', '/medico-rm');
INSERT INTO menu(id_menu, nombre, icono, url) VALUES (11, 'Especialidad.RM', 'star_rate', '/especialidad-rm');
INSERT INTO menu(id_menu, nombre, icono, url) VALUES (12, 'Examen.RM', 'assignment', '/examen-rm');

--RECEPTIONISTA MENU_ROL
INSERT INTO menu_rol (id_menu, id_rol) VALUES (9, 2);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (10, 2);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (11, 2);
INSERT INTO menu_rol (id_menu, id_rol) VALUES (12, 2);

