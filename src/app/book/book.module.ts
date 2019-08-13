import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [BookComponent, HeaderComponent, HomeComponent],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
