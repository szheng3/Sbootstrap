import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about/about.component';
import { MeetComponent } from './meet/meet.component';


@NgModule({
  declarations: [BookComponent, HeaderComponent, HomeComponent, ContactComponent, CardComponent, AboutComponent, MeetComponent],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
