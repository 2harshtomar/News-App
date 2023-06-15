import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { baseURL } from '../BASE_URL';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewsService } from '../service/news.service';
import { news } from 'src/models/news';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css']
})
export class UpdateNewsComponent implements OnInit {

  author: string;
  category: string;
  subcategory: string;
  description: string;
  title: string;
  newsId: number;

  news: news = new news();

  constructor(
    private http: HttpClient,
    public route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService) {

    //TODO
  }

  getNews() {
    //TODO
    // var news: news;
    this.newsService.getById(this.newsId).subscribe({
      next: (data)=>{
        console.log(data);
        this.news = data;
        this.author = this.news.author as string;
        this.category = this.news.category as string;
        this.subcategory = this.news.subcategory as string;
        this.description = this.news.description as string;
        this.title = this.news.title as string;

      },
      error: (err)=>{
        console.log(err);
      }
    });
  }

  ngOnInit() {
    //TODO
    this.newsId = this.route.snapshot.params["id"];
    console.log(this.newsId);
    this.getNews();
  }

  onSubmit(news: NgForm) {
    //TODO
    this.news.id = this.newsId;
    this.news.author = this.author;
    this.news.category = this.category;
    this.news.subcategory = this.subcategory;
    this.news.description = this.description;
    this.news.title = this.title;
    
    console.log(this.news);
    this.newsService.updateNews(this.news).subscribe({
      next: (data)=>{
        console.log(data);
        this.router.navigate(['allNews']);
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }


}
