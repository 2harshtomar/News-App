import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message:string = "Welcome to News App By Harsh Tomar & HTML-CSS by Mr. unknown";

  constructor() { }

  ngOnInit() {
  }

}
