package com.ninja_squad.geektic.dao;

import java.util.*;

import com.ninja_squad.geektic.DAO.GeekDAO;
import com.ninja_squad.geektic.infos.Geek;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.*;


public class GeekDaoTest extends BaseDaoTest {
	
	@Autowired
	private GeekDAO gDao;
   

	@Test
    public void testSexeCentreInteret() {
       List<Geek> result = gDao.getGeeksByCriteria("M", "PHP");
       Assert.assertEquals("M", result.get(0).sexe);
    }
	
	@Test
    public void testCbSexeCentreInteret() {
		int valeurAttendu = 2;
       List<Geek> result = gDao.getGeeksByCriteria("M", "PHP");
       Assert.assertEquals(result.size(), valeurAttendu);
    }
}
