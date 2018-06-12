import { Component } from '@angular/core';

import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  name: string;
  price: number;

  constructor(private _productsService: ProductsService) {
  }

  addProduct(name: string, price: number) {
    this._productsService.addProduct({
      "name": name,
      "price": price
    });
  }

  clear() {
    this.name = null;
    this.price = null;
  }
}
