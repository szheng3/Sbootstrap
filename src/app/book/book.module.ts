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
import { TouchComponent } from './touch/touch.component';
import { FooterComponent } from './footer/footer.component';
import {ShareModule} from 'src/app/share/share.module';


@NgModule({
  declarations: [BookComponent, HeaderComponent, HomeComponent, ContactComponent, CardComponent, AboutComponent, MeetComponent, TouchComponent, FooterComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    ShareModule,
  ],
})
export class BookModule { }
