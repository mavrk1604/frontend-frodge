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
    this.id = sessionStorage.getItem("id");
    this.getAllProducts()
    this.getUserById()
  }
  allProducts: any[] = [] 
  userProducts: any[] = [] 
  selectedProduct: any = null;
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

  removeIngredient(name: string): void {
    this.name = name
    this.users.removeIngredient(this.id, this.name).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }

  getUserById(): void{
    this.users.getUser(this.id).subscribe(
      response => {
        console.log(response)
        this.userProducts = response.ingredients
      },
      error => {
        console.log(error)
      }
    )
  }

  cambiaso(event: any, name: string): void {
    console.log(event.target.checked)
    if (event.target.checked) {
      this.addIngredient(name)
    } else {
      this.removeIngredient(name)
    }

  }

  boolFunction(name: string): boolean {
    const validation: any = this.userProducts.find((x) => x == name)

    return validation
  }

  openModal(product: any): void {
    this.selectedProduct = product;
  }

  closeModal(): void {
    this.selectedProduct = null;
  }
}
