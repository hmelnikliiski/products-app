import { Injectable } from '@angular/core';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ProductsService {
  
  private products:any[] = [
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

  editProduct(name:string, price:number) {
    for(let product of this.products) {
      if (product.name === name) {
        product.price = price;
        break;
      }
    }
  }

  removeProduct(name:string) {
    this.products = this.products.filter(product => product.name !== name);
    /*
    let i=0;
    for(let product of this.products) {
      if (product.name === name) {
        this.products.splice(i, 1);
        break;
      }
      i++;
    }
    */
  }
}
