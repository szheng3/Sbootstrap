import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BasicTypographyComponent} from './basic-typography/basic-typography.component';
import { IndexComponent } from './index/index.component';
import {ShareModule} from 'src/app/share/share.module';
import { CardComponent } from './index/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicTypographyComponent,
    IndexComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    ShareModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ],
})
export class AppModule {}
