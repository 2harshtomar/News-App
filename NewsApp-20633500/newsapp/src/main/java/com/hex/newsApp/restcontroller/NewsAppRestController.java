package com.hex.newsApp.restcontroller;
import java.io.Serializable;
//CHECKSTYLE:OFF 
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;

import com.hex.newsApp.model.News;
import com.hex.newsApp.service.NewsAppService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class NewsAppRestController {

	@Autowired
	private NewsAppService NewsService;
	
	@RequestMapping(value = "/news/getById/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
	public ResponseEntity<Object> getById(@PathVariable("id") int id) {
		return NewsService.getByid(id);
	}
	
	@RequestMapping(value = "/news", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<News> getAllNews() {
		//To-Do
  		return NewsService.getAll();
	}
	
	@RequestMapping(value = "/news/post", method = RequestMethod.POST, headers = "Accept=application/json")
	public Serializable addNews(@RequestBody News dto) {
//		LocalDateTime datetime = LocalDateTime.now();
//		DateFormat format = new DateFormat("")
		return NewsService.addNews(dto);
	}
	
	@RequestMapping(value = "/news/delete/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
	public ResponseEntity<Object> deteleNews(@PathVariable("id") int id) {
		return NewsService.deleteNews(id);
	}
	
	@RequestMapping(value = "/news/update", method = RequestMethod.PUT, headers = "Accept=application/json")
	public ResponseEntity<Object> updateNews(@RequestBody News news) {
		return NewsService.updateNews(news);
	}
}
