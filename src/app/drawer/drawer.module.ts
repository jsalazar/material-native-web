import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawerComponent } from './drawer.component';
import { DrawerRoutingModule } from './drawer-routing.module';

@NgModule({
  declarations: [
    DrawerComponent
  ],
  imports: [
    CommonModule,
    DrawerRoutingModule
  ],
  exports: [
    DrawerComponent
  ]
})
export class DrawerModule { }
