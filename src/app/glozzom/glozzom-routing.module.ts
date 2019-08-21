import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GlozzomComponent} from 'src/app/glozzom/glozzom.component';
import {HeaderComponent} from 'src/app/glozzom/header/header.component';
import {AboutusComponent} from 'src/app/glozzom/aboutus/aboutus.component';
import {ServicesComponent} from 'src/app/glozzom/services/services.component';

const routes: Routes = [
  {
    path: '', component: GlozzomComponent, children: [
      {
        path: '', redirectTo: 'home',
      },
      {
        path: 'home', component: HeaderComponent,
      },
      {
        path: 'about', component: AboutusComponent,
      },
      {
        path: 'services', component: ServicesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlozzomRoutingModule {}
