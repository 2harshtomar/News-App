package com.hex.newsApp.service;
import java.io.Serializable;
//CHECKSTYLE:OFF 
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.hex.newsApp.model.News;

@Service
public interface NewsAppService {
	
	List<News> getAll();

	Serializable addNews(News dto);

	ResponseEntity<Object> deleteNews(int id);

	ResponseEntity<Object> getByid(int id);

	ResponseEntity<Object> updateNews(News news);
	
	
}
