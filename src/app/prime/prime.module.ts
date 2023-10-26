import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';

const primeModule = [
  SidebarModule,
  ButtonModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    primeModule
  ],
  exports: [ primeModule ]
})
export class PrimeModule { }
