import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from 'src/app/dashboard/dashboard.component';
import {LoginComponent} from 'src/app/dashboard/login/login.component';
import {EditProfileComponent} from 'src/app/dashboard/edit-profile/edit-profile.component';
import {DetailsComponent} from 'src/app/dashboard/table/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'posts',
        component: DashboardComponent,
      },
      {
        path: 'categories',
        component: DashboardComponent,
      },
      {
        path: 'users',
        component: DashboardComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'profile',
        component: DashboardComponent,
      },
      {
        path: 'setting',
        component: DashboardComponent,
      },
      {
        path: 'details',
        component: DashboardComponent,
      },
    ],

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
