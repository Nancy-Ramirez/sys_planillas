import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MenuLateralComponent } from './Components/menu-lateral/menu-lateral.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    MenuLateralComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ], 
  providers:[],
  bootstrap: []
})
export class AppModule { }
