package com.ninja_squad.geektic.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ninja_squad.geektic.DAO.GeekDAO;
import com.ninja_squad.geektic.infos.CentreInteret;
import com.ninja_squad.geektic.infos.Geek;

import javax.transaction.Transactional;

@RestController
@Transactional
@RequestMapping("/api/geek")
public class GeekService 
{
	@Autowired
	private GeekDAO gDAO;
	
    @RequestMapping("/combo")
    public List<CentreInteret>buildComboBox()
    {
        return gDAO.getAllInterets();
    }
    @RequestMapping("/bysex/{lesexe}/{interet}")
    public List<Geek>afficherGeeksParSexe(@PathVariable("lesexe") String s, @PathVariable("interet") String i)
    {
        return gDAO.getGeeksByCriteria(s, i);
    }
}

