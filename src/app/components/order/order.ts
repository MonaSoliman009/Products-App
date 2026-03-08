import { Component } from '@angular/core';
import { Products } from "../products/products";
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../models/icategory';

@Component({
  selector: 'app-order',
  imports: [Products, FormsModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  selectedCatId: number = 0
  categories: ICategory[]
  orderPrice:number=0
  constructor() {
    this.categories = [
      {
        id: 1,
        name: "Electronics"
      },
      {
        id: 2,
        name: "Clothing"
      },
      {
        id: 3,
        name: "Stationery"
      }
    ];
  }
setOrderPrice(newOrderPrice:number){
  this.orderPrice=newOrderPrice
}
}
