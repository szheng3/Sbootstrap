import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GlozzomComponent} from 'src/app/glozzom/glozzom.component';

const routes: Routes = [
  {
    path: '', component: GlozzomComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlozzomRoutingModule {}
