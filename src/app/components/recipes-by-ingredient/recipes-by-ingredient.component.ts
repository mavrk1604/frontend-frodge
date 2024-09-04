import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes-by-ingredient',
  standalone: true,
  imports: [RouterLink, FormsModule, NavbarComponent],
  templateUrl: './recipes-by-ingredient.component.html',
  styleUrl: './recipes-by-ingredient.component.css'
})
export class RecipesByIngredientComponent implements OnInit {
  private recipeService = inject(RecipeService)
  constructor(private activeRoute: ActivatedRoute) { }

  allRecipes!: any[]

  ngOnInit(): void {
    const ingredient: any = this.activeRoute.snapshot.paramMap.get('name')
    console.log(ingredient)
    this.recipeService.getRecipeByIngredientName(ingredient).subscribe(
      response => {
        console.log(response)
        this.allRecipes = response.recipes
      },
      error => {
        console.log(error)
      }
    )
  }
}
