package com.hex.newsApp.service;
import java.io.Serializable;
//CHECKSTYLE:OFF 
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.hex.newsApp.model.News;
import com.hex.newsApp.dao.NewsAppDao;

@Service
public class NewsAppServiceImpl implements NewsAppService {

	@Autowired
	private NewsAppDao NewsDao;

	@Override
	public List<News> getAll() {
		// TODO Auto-generated method stub
		return NewsDao.findAll();
	}

	@Override
	public Serializable addNews(News dto) {
		// TODO Auto-generated method stub
		return NewsDao.addNews(dto);
	}

	@Override
	public ResponseEntity<Object> deleteNews(int id) {
		// TODO Auto-generated method stub
		return NewsDao.deleteNews(id);
	}

	@Override
	public ResponseEntity<Object> getByid(int id) {
		// TODO Auto-generated method stub
		return NewsDao.getById(id);
	}

	@Override
	public ResponseEntity<Object> updateNews(News news) {
		// TODO Auto-generated method stub
		return NewsDao.updateNews(news);
	}

}
