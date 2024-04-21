import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  {path: '', redirectTo: 'third', pathMatch: 'full'},
  {path: 'third', component: ThirdComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoRoutingModule { }
