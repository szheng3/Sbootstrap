import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlozzomRoutingModule } from './glozzom-routing.module';
import { GlozzomComponent } from './glozzom.component';
import { HeaderComponent } from './header/header.component';
import {ShareModule} from 'src/app/share/share.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [GlozzomComponent, HeaderComponent, AboutusComponent, ServicesComponent],
  imports: [
    CommonModule,
    ShareModule,
    GlozzomRoutingModule
  ]
})
export class GlozzomModule { }
