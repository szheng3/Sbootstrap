import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BasicTypographyComponent} from 'src/app/basic-typography/basic-typography.component';

const routes: Routes = [
  {
    path: 'basic-typography', component: BasicTypographyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
