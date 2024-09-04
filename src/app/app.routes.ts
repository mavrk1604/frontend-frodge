import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ProductsComponent } from './components/products/products.component';
import { CreateProductComponent } from './protected/create-product/create-product.component';
import { CreateRecipeComponent } from './protected/create-recipe/create-recipe.component';
import { RecipesComponent } from './components/recipes/recipes.component';


export const routes: Routes = [
  { path: '', title: `Landing`, component: LandingComponent },
  { path: 'products', title: 'Products', component: ProductsComponent },
  { path: 'recipes/:name', title: 'Recipes', component: RecipesComponent },
  // { path: 'recipes', title: 'Recipes', component: RecipesComponent },
  { path: 'create-product', title: 'Create Product', component: CreateProductComponent },
  { path:'create-recipe', title: 'Create Recipe', component: CreateRecipeComponent}
];
