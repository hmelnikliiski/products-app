import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: number;
  name: string;
  price: number;

  constructor(private _productsService: ProductsService, private _router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._route.params.subscribe(
      params => {
        this.id = parseInt(this._route.snapshot.paramMap.get('id'));
        this.name = this._route.snapshot.paramMap.get('name');
        this.price = parseFloat(this._route.snapshot.paramMap.get('price'));
      }
    );
  }

  updateProduct(name: string, price: number) {
    this._productsService.updateProduct(this.id, name, price);
    this._router.navigate(['/']);
  }

  cancel() {
    this._router.navigate(['/']);
  }
}
