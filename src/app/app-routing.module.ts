import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {IndexComponent} from 'src/app/index/index.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent,
  },
  {
    path: 'looplab', loadChildren: './looplab/looplab.module#LooplabModule',
  },
  {
    path: 'book', loadChildren: './book/book.module#BookModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
