import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RouterLink,FormsModule,NavbarComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {
  private recipeService = inject(RecipeService)

  allRecipes!: any[]

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe(
      response => {
        this.allRecipes = response.recipes
      },
      error => {
        console.log(error)
      }
    )
  }
}
