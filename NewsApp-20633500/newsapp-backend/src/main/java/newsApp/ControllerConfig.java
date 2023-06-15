package newsApp;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;


@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {"com.hex.newsApp.service",
		"com.hex.newsApp.restcontroller",
		"com.hex.newsApp.service",
		"com.hex.newsApp.dto",
		"com.hex.newsApp.dao"})
public class ControllerConfig implements WebMvcConfigurer {
	@Bean
	public InternalResourceViewResolver viewResolver() {
		InternalResourceViewResolver vr = new InternalResourceViewResolver();
		vr.setPrefix("/WEB-INF/resources/");
		vr.setSuffix(".jsp");
		return vr;
	}
	
	@Bean
	public DataSource getDataSource(){ //DataSource ds = new DriverManagerDataSource(); 
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setUrl("jdbc:mysql://localhost:3306/restdb_2000078079");
		dataSource.setUsername("root");
		dataSource.setPassword("Password123"); //Password123
		dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
		return dataSource; 		 
	}

}
