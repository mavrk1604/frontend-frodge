import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
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
