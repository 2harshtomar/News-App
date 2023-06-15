import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe, FilterPipe } from './search.pipe';
import { HomeComponent } from './home/home.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { UpdateNewsComponent } from './update-news/update-news.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { TopNewsComponent } from './top-news/top-news.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllNewsComponent,
    UpdateNewsComponent,
    ViewNewsComponent,
    AddNewsComponent,
    SearchPipe,
    FilterPipe,
    TopNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
