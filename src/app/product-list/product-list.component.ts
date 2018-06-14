import { Component } from '@angular/core';

import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  show = false;

  constructor(private _productsService: ProductsService) {
  }

  getProducts() {
    return this._productsService.getProducts();
  }

  showHideForm() {
    this.show = !this.show;
  }
}
