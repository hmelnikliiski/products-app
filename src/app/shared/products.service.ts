import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: any[] = [
    {
      "name": "apples",
      "price": 2.50
    },
    {
      "name": "oranges",
      "price": 1.80
    },
    {
      "name": "bananas",
      "price": 2.00
    }
  ];

  constructor() {
  }

  getProducts() {
    return this.products;
  }

  addProduct(product) {
    this.products.push(product);
  }

  updateProduct(name: string, price: number) {
    this.products = this.products.map(product => product.name !== name ? product : { "name": product.name, "price": price });
  }

  removeProduct(name: string) {
    this.products = this.products.filter(product => product.name !== name);
  }
}
