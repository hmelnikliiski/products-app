import { Component, Input } from '@angular/core';

import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() name: string;
  @Input() price: number;
  update = false;

  constructor(private _productsService: ProductsService) {
  }

  removeProduct() {
    this._productsService.removeProduct(this.name);
  }

  updateProduct() {
    this.update = !this.update;
  }
}
