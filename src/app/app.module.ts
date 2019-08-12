import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BasicTypographyComponent} from './basic-typography/basic-typography.component';
import {LoadScriptDirectiveDirective} from './load-script-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicTypographyComponent,
    LoadScriptDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
