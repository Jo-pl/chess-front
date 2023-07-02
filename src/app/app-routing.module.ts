import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './home/login/login.component';
import { ChessViewerComponent } from './chess-viewer/chess-viewer.component';

const routes: Routes = [
  {
    path: "",
    component:HomeComponent
  },
  {
    path: "login",
    component:LoginComponent
  },
  {
    path:"register",
    component:LoginComponent
  },
  {
    path:"test",
    component:ChessViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }