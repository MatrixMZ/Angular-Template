import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './views/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostsService } from './services/posts/posts.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  providers: [
    PostsService
  ]
})
export class MainModule { }
