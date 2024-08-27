import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingComponent } from './components/landing/landing.component';

export const routes: Routes = [
  {path: '', title: `Landing`, component: LandingComponent },
  {path: "register", title: "Register", component: RegisterComponent},
  {path: "login", title: "Login", component: LoginComponent},
];
