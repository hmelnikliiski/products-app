import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: any[] = [
    {
      "id": 1,
      "name": "apples",
      "price": 2.50
    },
    {
      "id": 2,
      "name": "oranges",
      "price": 1.80
    },
    {
      "id": 3,
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

  updateProduct(id: number, name: string, price: number) {
    this.products = this.products.map(product => product.id !== id ? product : { "id": product.id, "name": name, "price": price });
  }

  removeProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }
}
