package com.hex.newsApp.dao;
import java.io.Serializable;
//CHECKSTYLE:OFF 
import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.hex.newsApp.dto.ResponseDto;
import com.hex.newsApp.model.News;

@Transactional
@Repository
public class NewsAppDaoImpl implements NewsAppDao {

    @Autowired
    private HibernateTemplate template;
    
    @Autowired
    private ResponseDto responseDto;
  

    public HibernateTemplate getTemplate() {
        return template;
    }

    public void setTemplate(HibernateTemplate template) {
        this.template = template;
    }
    
    @Override
    public ResponseEntity<Object> getById(int id) {
    	
    	try { 	
    		News news = template.get(News.class, id);
			if(news != null) {
				return ResponseEntity.status(HttpStatus.OK).body(news);
			}
			else {
				responseDto.setMessage("No records found");
				return ResponseEntity.status(HttpStatus.
						NOT_FOUND).body(responseDto);
			}
		} catch (Exception e) {
			// TODO: handle exception
			responseDto.setMessage("An error occured");
			return ResponseEntity.status(HttpStatus.
					BAD_REQUEST).body(responseDto);
		}
    }
    @Override
    public List<News> findAll() {
       //To-Do
        return template.loadAll(News.class);
    }
    
    @Override
    public Serializable addNews(News dto) {
    	return template.save(dto);
    }

    @Override
    public ResponseEntity<Object> deleteNews(int id) {
        try {
             News news = template.get(News.class, id);
            if (news != null) {
            	System.out.println(news);
            	Session session = template.getSessionFactory().openSession();
            	Transaction trans = session.beginTransaction();
                session.delete(news);
                trans.commit();
                session.close();
                responseDto.setMessage("News deleted successfully");
                return ResponseEntity.status(HttpStatus.OK).body(responseDto);
            } else {
                responseDto.setMessage("No records found");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDto);
            }
        } catch (Exception e) {
            e.printStackTrace();
            responseDto.setMessage("An error occurred");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseDto);
        }
    }

	@Override
	public ResponseEntity<Object> updateNews(News news) {
		// TODO Auto-generated method stub
		try {
        	Session session = template.getSessionFactory().openSession();
        	Transaction trans = session.beginTransaction();
        	session.update(news);
            trans.commit();
            session.close();
			return ResponseEntity.status(HttpStatus.OK).body(template.get(News.class, news.getId()));
		} catch (Exception e) {
			// TODO: handle exception
			responseDto.setMessage("Cannot update News(ID may be wrong)");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseDto);
		}
	}
}