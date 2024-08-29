import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-recipe',
  standalone: true,
  imports: [],
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.css'
})
export class CreateRecipeComponent {
  recipe = {
    name: "",
    imageUrl: "",
    ingredients: [],
    allergens: [],
    preparation: "",
    category: "",
    vegetarian: false
  };

  constructor(private http: HttpClient) {}

  onSubmit

}
