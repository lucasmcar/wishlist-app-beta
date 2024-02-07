import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path: '', pathMatch: 'full', redirectTo:'login'
  },
  {
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
