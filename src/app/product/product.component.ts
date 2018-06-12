import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() name;
  @Input() price;
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
