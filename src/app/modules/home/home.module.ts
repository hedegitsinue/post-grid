import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { PostGridComponent } from './components/post-grid/post-grid.component';
import { PostItemComponent } from './components/post-item/post-item.component';


@NgModule({
  declarations: [
    HomeComponent,
    PostGridComponent,
    PostItemComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ]
})
export class HomeModule { }
