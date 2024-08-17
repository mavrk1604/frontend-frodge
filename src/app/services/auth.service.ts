import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiUrl: string = "http://localhost:8080/api"
  
  register(email: String, password: String): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { email,password })
  }
}
