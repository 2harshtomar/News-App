import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../BASE_URL';
import { NewsService } from '../service/news.service';
import { news } from 'src/models/news';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {

  news: any = [];
  term: string;

  constructor(private http: HttpClient,
    private newsService: NewsService) { }

  getAllNews() {
    //TODO
    this.newsService.getAllNews().subscribe({
      next: (data)=>{
        console.log(data);
        this.news = data;
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }


  ngOnInit() {
    //TODO
    this.getAllNews();
    
  }

  deleteNews(id: number) {
    //TODO
    this.newsService.deleteById(id).subscribe({
      next: (data)=> {
        console.log(data);
        window.location.reload();
      },
      error: (err)=> {
        console.log(err);
      }
    });
}
}
