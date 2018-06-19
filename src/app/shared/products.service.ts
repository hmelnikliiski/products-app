import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: any[];

  private productsURL = 'https://raw.githubusercontent.com/hmelnikliiski/products-app/master/src/app/shared/products.ini';

  constructor(private _http: HttpClient) {
    this.initProducts()
      .subscribe(data => this.products = data)
  }

  initProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.productsURL);
  }

  getProducts() {
    return this.products;
  }

  addProduct(product) {
    this.products.push(product);
  }

  updateProduct(id: number, name: string, price: number) {
    this.products = this.products.map(product => product.id !== id ? product : { "id": product.id, "name": name, "price": price });
  }

  removeProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }
}

export interface IProduct {
  id: number,
  name: string,
  value: number
}
