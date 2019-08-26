import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from 'src/app/dashboard/dashboard.component';
import {ShareModule} from 'src/app/share/share.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule {}
