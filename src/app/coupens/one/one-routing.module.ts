import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  {path: '', redirectTo: 'fisrt', pathMatch: 'full'},
  {path: 'fisrt', component: FirstComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneRoutingModule { }
