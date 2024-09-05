import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RouterLink, FormsModule, NavbarComponent, CommonModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {
  private recipeService = inject(RecipeService);
  constructor(private activeRoute: ActivatedRoute) { }

  allRecipes!: any[];
  selectedRecipe: any = null; 

  ngOnInit(): void {
    const ingredient: any = this.activeRoute.snapshot.paramMap.get('name');
    console.log(ingredient);
    this.recipeService.getAllRecipes().subscribe(
      (response) => {
        console.log(response);
        this.allRecipes = response.recipes;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openModal(recipe: any): void {
    this.selectedRecipe = recipe; 
  }

  closeModal(): void {
    this.selectedRecipe = null;
  }
}