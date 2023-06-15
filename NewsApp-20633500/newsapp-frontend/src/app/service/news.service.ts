import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { news } from 'src/models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getAllNews(): Observable<news[]>{
    return this.http.get<news[]>(`http://localhost:8080/news/news`);
  }

  addNews(addnews: news): Observable<number>{
    return this.http.post<number>(`http://localhost:8080/news/news/post`, addnews);
  }

  getById(newsId: number): Observable<news>{
    return this.http.get<news>(`http://localhost:8080/news/news/getById/${newsId}`);
  }

  deleteById(newsId: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/news/news/delete/${newsId}`);
  }

  updateNews(updatednews: news): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/news/news/update`, updatednews);
  }
}
