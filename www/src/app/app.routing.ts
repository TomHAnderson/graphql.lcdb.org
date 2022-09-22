import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { GuestLayoutComponent } from './layouts/guest-layout/guest-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'guest/home',
    pathMatch: 'full',
  },
  {
    path: 'guest',
    component: GuestLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/guest-layout/guest-layout.module').then(m => m.GuestLayoutModule)
    }]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
       useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
