import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoRoutingModule } from './two-routing.module';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';


@NgModule({
  declarations: [
    ThirdComponent,
    FourthComponent
  ],
  imports: [
    CommonModule,
    TwoRoutingModule
  ]
})
export class TwoModule { }
