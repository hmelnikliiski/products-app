import { Component, Input } from '@angular/core';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() id: number;
  @Input() name: string;
  @Input() price: number;
  show = false;

  constructor(private _productsService: ProductsService) {
  }

  removeProduct() {
    this._productsService.removeProduct(this.id);
  }

  showHideForm() {
    this.show = !this.show;
  }
}
