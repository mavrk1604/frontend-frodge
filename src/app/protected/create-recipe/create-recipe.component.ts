import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  standalone: true,
  imports: [RouterLink, FormsModule, NavbarComponent],
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.css'
})
export class CreateRecipeComponent {
  vegetarianSelected: boolean = false
  recipe = {
    name: "",
    imageurl: "",
    ingredients: [],
    allergens: [],
    preparation: "",
    category: "",
    vegetarian: false
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:8080/api/create-recipe', this.recipe)
      .subscribe(response => {
        console.log(response);
      });
  }

  onVegetarianChange(event: Event) {
    this.vegetarianSelected = !this.vegetarianSelected
    this.recipe.vegetarian = this.vegetarianSelected
  }
}
