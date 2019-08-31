import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DSdashboardRoutingModule } from './dsdashboard-routing.module';
import { DsdashboardComponent } from './dsdashboard.component';


@NgModule({
  declarations: [DsdashboardComponent],
  imports: [
    CommonModule,
    DSdashboardRoutingModule
  ]
})
export class DSdashboardModule { }
