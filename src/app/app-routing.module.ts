import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
  path:'', 
  pathMatch: 'full', 
  component: LandingComponent
  },
  {
  path:'login',
  component: LoginComponent
  },
  {
  path:'sign-up',
  component: SignUpComponent
  },
  {
  path:'home',
  component: HomeComponent
  }

];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
