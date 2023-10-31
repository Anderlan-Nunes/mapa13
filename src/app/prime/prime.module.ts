import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {StyleClassModule} from 'primeng/styleclass'

const primeModule = [
  SidebarModule,
  ButtonModule,
  ToolbarModule,
  StyleClassModule
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
