import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from 'src/app/dashboard/dashboard.component';
import {ShareModule} from 'src/app/share/share.module';
import {NavComponent} from './nav/nav.component';
import {HeaderComponent} from './header/header.component';
import {SearchComponent} from './search/search.component';
import {TableComponent} from './table/table.component';
import {FooterComponent} from './footer/footer.component';
import { MainTableComponent } from './table/main-table/main-table.component';
import { PostTableComponent } from './table/post-table/post-table.component';
import { CategoriesTableComponent } from './table/categories-table/categories-table.component';
import { UsersTableComponent } from './table/users-table/users-table.component';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileTableComponent } from './table/profile-table/profile-table.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
    HeaderComponent,
    SearchComponent,
    TableComponent,
    FooterComponent,
    MainTableComponent,
    PostTableComponent,
    CategoriesTableComponent,
    UsersTableComponent,
    LoginComponent,
    EditProfileComponent,
    ProfileTableComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule {}
