import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import * as mdc from 'node_modules/material-components-web/index';

import { HomeModule } from './home/home.module';
import { GridModule } from './grid/grid.module';
import { DrawerModule } from './drawer/drawer.module';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    HomeModule,
    GridModule,
    DrawerModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
