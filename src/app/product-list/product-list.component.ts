import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products = [
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

  constructor() { }

  ngOnInit() {
  }

  remove(name) {
    let i=0;
    for(let product of this.products) {
      if (product.name === name) {
        this.products.splice(i, 1);
      }
      i++;
    }
  }

  add(item:any[]) {
    this.products.push({name:item[0], price:item[1]});
  }
}
