import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { UpdateNewsComponent } from './update-news/update-news.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { TopNewsComponent } from './top-news/top-news.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'allNews', component: AllNewsComponent },
  { path: 'addNews', component: AddNewsComponent },
  { path: 'updateNews/:id', component: UpdateNewsComponent },
  { path: 'viewNews/:id', component: ViewNewsComponent },
  { path: 'topNews', component: TopNewsComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
