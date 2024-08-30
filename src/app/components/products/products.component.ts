import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, NavbarComponent, FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  ngOnInit() {
    this.getAllProducts()
  }
  allProducts: any[] = [] 
  constructor(private products: ProductService, private users: UserService) { }
  id:any = ''
  name: string = ''
  cambio: boolean = false
  getAllProducts(): void {
    this.products.getAllProducts().subscribe(
      response => {
        console.log(response.products)
        this.allProducts = response.products
        console.log(this.allProducts)
      },
      error => {
        console.log(error)
      }
    )
  }

  
  addIngredient(name:string): void {
    this.id = sessionStorage.getItem("id");
    this.name = name
    this.users.addIngredient(this.id, this.name).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
    
    
  }

  cambiaso(): void {
    this.cambio = !this.cambio
    console.log(this.cambio)
  }
}
