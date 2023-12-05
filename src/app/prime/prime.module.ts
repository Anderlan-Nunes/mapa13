import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {StyleClassModule} from 'primeng/styleclass';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuModule} from 'primeng/menu';
import {CascadeSelectModule} from 'primeng/cascadeselect';

const primeModule = [
  SidebarModule,
  ButtonModule,
  ToolbarModule,
  StyleClassModule,
  TabMenuModule,
  MenuModule,
  CascadeSelectModule
  
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
