package com.gecomi.modulos.menu.service;

import java.util.List;

import com.gecomi.modulos.menu.model.Menu;
import com.gecomi.generic.service.ICRUD;

public interface IMenuService extends ICRUD<Menu, Integer> {
	
	List<Menu> listarMenuPorUsuario(String nombre);

}
