import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  // Method to create a new product
  createProduct(product: {
    name: string;
    type: string;
    description: string;
    conservation: string;
    vegetarian: boolean;
    perishable: boolean;
  }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-product`, product);
  }

}
