import { AfterViewInit, Component, inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Products } from "../products/products";
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../models/icategory';
import { StaticCategories } from '../../services/static-categories';
import { CategoriesApi } from '../../services/categories-api';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [Products, FormsModule,AsyncPipe],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order implements AfterViewInit{
  selectedCatId: number = 0
  // categories: ICategory[]
  orderPrice:number=0
  // @ViewChild(Products) productComp!:Products
  @ViewChildren(Products) productCompList!:QueryList<Products>
  private categoriesApiService=inject(CategoriesApi)
  categories$:Observable<ICategory[]>=this.categoriesApiService.getAllCategories()
  constructor() {
    // this.categories =this.staticCategoriesService.getAllCategories()
  }
  ngAfterViewInit(): void {
  //  console.log(this.productComp.totalOrderPice);
   console.log(this.productCompList.get(1));

  }
setOrderPrice(newOrderPrice:number){
  this.orderPrice=newOrderPrice
}
}
