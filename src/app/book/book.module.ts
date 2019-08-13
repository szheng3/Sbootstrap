import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [BookComponent, HeaderComponent],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
