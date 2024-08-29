import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [RouterLink, FormsModule, NavbarComponent],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})


export class CreateProductComponent {
  perishableSelected: boolean = false
  vegetarianSelected: boolean = false
  product = {
    imageurl: '',
    name: '',
    type: '',
    description: '',
    conservation: '',
    vegetarian: false,
    perishable: false
  };

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post('http://localhost:8080/api/create-product', this.product)
      .subscribe(response => {
        console.log(response);
      });
  }

  onVegetarianChange(event: Event) {
    this.vegetarianSelected = !this.vegetarianSelected
    this.product.vegetarian = this.vegetarianSelected
  }


  onPerishableChange(event: Event) {
    this.perishableSelected = !this.perishableSelected
    this.product.perishable = this.perishableSelected
  }
}
