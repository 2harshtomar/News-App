import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import { baseURL } from '../BASE_URL';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewsService } from '../service/news.service';
import { news } from 'src/models/news';
import { empty } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  author: string;
  category: string;
  subcategory: string;
  description: string;
  title: string;
  showMessage = false;

  newNews: news = new news();

  constructor(private http: HttpClient,
    private newsService: NewsService,
    private router: Router) { }
  ngOnInit(): void {
  }

  onSubmit(news: NgForm) {
    //TODO
    this.newNews.author = this.author;
    this.newNews.category = this.category;
    this.newNews.subcategory = this.subcategory;
    this.newNews.description = this.description;
    this.newNews.title = this.title;


    console.log(this.newNews);

    this.newsService.addNews(this.newNews).subscribe({
      next: (data)=>{
        console.log(data);
        this.router.navigateByUrl('allNews');
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

}
