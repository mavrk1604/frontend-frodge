import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

private apiUrl: string = "http://localhost8080";

  constructor(private http: HttpClient) { }

  createRecipe(recipe: {
    name: string,
    imageUrl: string,
    ingredients: any[],
    allergens: any[],
    preparation: string,
    category: string,
    vegetarian: boolean

  }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-recipe`, recipe);
  }

}

