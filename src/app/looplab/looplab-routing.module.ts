import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LooplabComponent} from 'src/app/looplab/looplab.component';

const routes: Routes = [
  {
    path: '', component: LooplabComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LooplabRoutingModule {}
