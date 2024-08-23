import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { LandingCarouselComponent } from '../landing-carousel/landing-carousel.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, RegisterComponent, LandingCarouselComponent, CommonModule, FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  isRegisterMode: Boolean = true;

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
  }

  email: String = ''
  password: String = ''

  constructor(private authService: AuthService) { }

  registerUser(): void {
    this.authService.register(this.email, this.password).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }

}
