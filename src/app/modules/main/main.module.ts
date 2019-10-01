import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './views/home/home.component';
import { PostsService } from './services/posts/posts.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    MainRoutingModule,
    SharedModule

  ],
  providers: [
    PostsService
  ]
})
export class MainModule { }
