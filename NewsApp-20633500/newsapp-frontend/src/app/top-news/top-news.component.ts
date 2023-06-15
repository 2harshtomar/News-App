import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseTopURL } from '../BASE_URL';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {
  news: any[] = [];
  term: string;
  newsFilter: any;
  category: string;
  subcategory: string;

  constructor(private http: HttpClient, private newsService: NewsService) {
    this.newsFilter = {category: this.category, subcategory: this.subcategory};
   }

  getTopNews() {
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
    this.getTopNews();
  }

  setCategory (category) {
    //TODO
    this.category = category;
    this.newsFilter = {category: category, subCategory: this.subcategory};
  }

  setSubCategory(subCategory) {
    //TODO
    this.subcategory = subCategory;
    this.newsFilter = {category:this.category, subcategory: subCategory};
  }

}
