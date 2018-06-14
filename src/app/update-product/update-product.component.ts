import { Component, Input } from '@angular/core';

import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

  @Input() uid: number;
  @Input() uname: string;
  @Input() uprice: number;

  constructor(private _productsService: ProductsService) {
  }

  updateProduct(name: string, price: number) {
    this._productsService.updateProduct(this.uid, name, price);
  }
}
