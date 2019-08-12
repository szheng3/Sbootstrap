import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BasicTypographyComponent} from './basic-typography/basic-typography.component';
import {HeaderComponent} from './header/header.component';
import {LoadScriptDirectiveDirective} from './load-script-directive.directive';
import { HomesectionComponent } from './homesection/homesection.component';
import { ExploresectionComponent } from './exploresection/exploresection.component';
import { ImagesectionComponent } from './imagesection/imagesection.component';
import { SharesectionComponent } from './sharesection/sharesection.component';
import { ProfilesectionComponent } from './profilesection/profilesection.component';
import { FootsectionComponent } from './footsection/footsection.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicTypographyComponent,
    HeaderComponent,
    LoadScriptDirectiveDirective,
    HomesectionComponent,
    ExploresectionComponent,
    ImagesectionComponent,
    SharesectionComponent,
    ProfilesectionComponent,
    FootsectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
