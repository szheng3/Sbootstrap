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

    path: 'book', loadChildren: () => import('./book/book.module').then(value => value.BookModule),
  },
  {

    path: 'glozzom', loadChildren: () => import('./glozzom/glozzom.module').then(value => value.GlozzomModule),
  },
  {

    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(value => value.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
