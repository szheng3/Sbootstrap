import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {IndexComponent} from 'src/app/index/index.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent,
  },
  {
    path: 'looplab', loadChildren: () => import('./looplab/looplab.module').then(value => value.LooplabModule),
  },
  {

    // path: 'book', loadChildren: './book/book.module#BookModule',
    path: 'book', loadChildren: () => import('./book/book.module').then(value => value.BookModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
