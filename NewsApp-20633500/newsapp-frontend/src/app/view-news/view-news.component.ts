import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {NgForm} from '@angular/forms';
import { baseURL } from "../BASE_URL";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {

  newsId: number;
  item: any;

  constructor(private http: HttpClient, public route: ActivatedRoute, private router: Router, private newsService: NewsService) {
    //TODO
  }

  getNews(id: number) {
    //TODO
    this.newsService.getById(id).subscribe({
      next: (data)=>{
        console.log(data);
        this.item = data;
      },
      error: (err)=>{
        console.log(err);
      }
    });
  };

  ngOnInit() {
    //TODO
    this.newsId = this.route.snapshot.params["id"];
    console.log(this.newsId);
    this.getNews(this.newsId);
  }
  
  deleteNews(id: number) {
    //TODO
    this.newsService.deleteById(id).subscribe({
      next: (data)=> {
        console.log(data);
        this.router.navigate(['allNews']);
      },
      error: (err)=> {
        console.log(err);
      }
    });
  }

}
