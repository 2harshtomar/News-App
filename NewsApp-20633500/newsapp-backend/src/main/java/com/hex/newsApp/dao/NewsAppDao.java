package com.hex.newsApp.dao;
import java.io.Serializable;
//CHECKSTYLE:OFF 
import java.util.List;

import org.springframework.http.ResponseEntity;

import com.hex.newsApp.model.News;

public interface NewsAppDao {

	List<News> findAll();
  //To-Do

	ResponseEntity<Object> deleteNews(int id);

	ResponseEntity<Object> getById(int id);

	ResponseEntity<Object> updateNews(News news);

	Serializable addNews(News dto);
	
}
