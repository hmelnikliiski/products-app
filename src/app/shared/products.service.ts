import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: any[] = [
    {
      "id": 1,
      "name": "Apples",
      "price": 2.40
    },
    {
      "id": 2,
      "name": "Oranges",
      "price": 1.20
    },
    {
      "id": 3,
      "name": "Bananas",
      "price": 1.80
    },
    {
      "id": 4,
      "name": "Strawberries",
      "price": 3.50
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
