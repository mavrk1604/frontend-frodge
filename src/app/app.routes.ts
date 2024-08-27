import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ProductsComponent } from './components/products/products.component';
import { CreateProductComponent } from './protected/create-product/create-product.component';

export const routes: Routes = [
  { path: '', title: `Landing`, component: LandingComponent },
  { path: 'products', title: 'Products', component: ProductsComponent },
  {path:'create-product', title: 'Create Product', component: CreateProductComponent}
];
