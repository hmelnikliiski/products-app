import { Component } from '@angular/core';

import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(private _productsService: ProductsService) {
  }

  getProducts() {
    return this._productsService.getProducts();
  }
}
