import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BasicTypographyComponent} from './basic-typography/basic-typography.component';
import {LoadScriptDirectiveDirective} from 'src/app/share/load-script-directive.directive';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicTypographyComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ],
})
export class AppModule {}
