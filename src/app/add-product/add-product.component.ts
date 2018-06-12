import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name;
  price;
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clear() {
    this.name = '';
    this.price = '';
  }
}
