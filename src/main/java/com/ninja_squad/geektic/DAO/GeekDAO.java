package com.ninja_squad.geektic.DAO;

import java.util.*;

import javax.persistence.*;

import org.springframework.stereotype.Repository;

import com.ninja_squad.geektic.infos.CentreInteret;
import com.ninja_squad.geektic.infos.Geek;

@Repository
public class GeekDAO
{
	@PersistenceContext
	private EntityManager entitymanager;
	
	public List<CentreInteret> getAllInterets()
	{
		TypedQuery<CentreInteret> query = entitymanager.createQuery("SELECT c from CentreInteret as c", CentreInteret.class);
		return query.getResultList();
	}
	public List<Geek> getGeeks()
	{
        TypedQuery<Geek> query = entitymanager.createQuery("SELECT g from Geek as g", Geek.class);
        return query.getResultList();
    }
	public List<Geek> getGeeksByCriteria(String s, String i)
	{
		TypedQuery<Geek> query = entitymanager.createQuery("SELECT distinct g from Geek as g left join fetch g.centresInteret inner join g.centresInteret as ci where g.sexe=:sexe and ci.interet=:interet", Geek.class);
        return query.setParameter("sexe", s).setParameter("interet", i).getResultList();
	}
}
