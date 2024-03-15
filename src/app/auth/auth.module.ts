import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'auth',
    children:[

      {
        path:'',
        redirectTo:'login'
      },

      {
        path: 'login',
        loadComponent: () => import('./login/login.component').then((c) => c.LoginComponent)
      },


    ]
  },


  

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
