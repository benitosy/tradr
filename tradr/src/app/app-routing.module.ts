import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
   { path: '', component:  HomeComponent},
   { path: 'home', component:  HomeComponent},
   { path: '**', component:  PageNotFoundComponent},
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
