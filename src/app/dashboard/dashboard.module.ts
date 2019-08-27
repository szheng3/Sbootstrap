import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from 'src/app/dashboard/dashboard.component';
import {ShareModule} from 'src/app/share/share.module';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
    HeaderComponent,
    SearchComponent,
    TableComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule {}
