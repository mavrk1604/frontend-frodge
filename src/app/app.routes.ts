import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ProductsComponent } from './components/products/products.component';
import { CreateProductComponent } from './protected/create-product/create-product.component';
import { CreateRecipeComponent } from './protected/create-recipe/create-recipe.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {path: '', title: `Landing`, component: LandingComponent },
  {path: "register", title: "Register", component: RegisterComponent},
  {path: "login", title: "Login", component: LoginComponent},
  { path: 'products', title: 'Products', component: ProductsComponent },
  { path:'recipes', title: 'Recipes', component:RecipesComponent},
  { path: 'create-product', title: 'Create Product', component: CreateProductComponent },
  { path:'create-recipe', title: 'Create Recipe', component: CreateRecipeComponent}
];
