import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products;

  productsURL = 'https://raw.githubusercontent.com/ProgressBG-WWW-Courses/BKA-Angular-Code/RequestsAndObsevables/RequestsAndObsevables/src/assets/data/books.json';

  constructor(private http: HttpClient) {
    this.products = this.http.get(this.productsURL)
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
