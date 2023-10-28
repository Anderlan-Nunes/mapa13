import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';

const primeModule = [
  SidebarModule,
  ButtonModule,
  ToolbarModule
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
