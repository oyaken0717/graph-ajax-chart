package com.example.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.domain.Sale;
import com.example.service.ChartService;

@RestController
@RequestMapping("/chart")
public class ChartController {

	@Autowired
	private ChartService chartService;
	
	@RequestMapping(value="/graph", method = RequestMethod.POST)
	public List<Sale> graph(Integer year,Model model) {
		List<Sale> saleList = chartService.findByYear(year);
		
		List<Integer> yokos = new ArrayList<>();
		List<Integer> tates = new ArrayList<>();
		for (Sale sale : saleList) {
			yokos.add(sale.getMonth());
			tates.add(sale.getTotalPrice());
		}
		model.addAttribute("yoko",yokos);
		model.addAttribute("tate",tates);
		
		return saleList;
	}

}
