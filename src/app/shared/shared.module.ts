import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [
    CommonModule, ReactiveFormsModule
  ]
})
export class SharedModule { }
