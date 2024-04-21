import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupenListComponent } from './coupen-list/coupen-list.component';
import { CoupensComponent } from './coupens.component';

const routes: Routes = [
  // {
  //   path: 'create',
  //   component: CoupensComponent
  // },
  // {
  //   path: 'list',
  //   component: CoupenListComponent
  // }

  {
    path: 'one',
    loadChildren: () => import('./one/one.module').then(m => m.OneModule)
  },
  {
    path: 'two',
    loadChildren: () => import('./two/two.module').then(m => m.TwoModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoupensRoutingModule { }
