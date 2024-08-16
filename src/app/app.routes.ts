import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { LandingSidebarComponent } from './components/landing-sidebar/landing-sidebar.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'landing', title: `Landing`, component: LandingComponent }
];
