import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlozzomRoutingModule } from './glozzom-routing.module';
import { GlozzomComponent } from './glozzom.component';


@NgModule({
  declarations: [GlozzomComponent],
  imports: [
    CommonModule,
    GlozzomRoutingModule
  ]
})
export class GlozzomModule { }
