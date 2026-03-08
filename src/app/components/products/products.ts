import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { ShortenPipe } from '../../pipes/shorten-pipe';

@Component({
  selector: 'app-products',
  imports: [FormsModule, Highlight, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe,
    CurrencyPipe, DecimalPipe, ShortenPipe
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnChanges {
  @Input('sentSelectedCatId') recievedCatId: number = 0
 @Output() onTotalOrderPriceChanged:EventEmitter<number>;
  products: IProduct[]
  filteredProducts: IProduct[]
  totalOrderPice: number = 0
  date = new Date()
  num: number = 123.879
  classes = 'text-center bg-danger'
  classes2 = 'border border-1'
  constructor() {
    this.products = [
      {
        id: 1,
        name: "Laptop",
        imgUrl: "https://fastly.picsum.photos/id/842/200/200.jpg?hmac=RW9iEgAYLKwoinQWSz_zrZHyOwmVEgqvoZTPebkRGMM",
        price: 1200,
        quantity: 10,
        catId: 1
      },
      {
        id: 2,
        name: "Mouse",
        imgUrl: "https://picsum.photos/200?random=2",
        price: 25,
        quantity: 0,
        catId: 1
      },

      {
        id: 3,
        name: "T-Shirt",
        imgUrl: "https://picsum.photos/200?random=3",
        price: 30,
        quantity: 1,
        catId: 2
      },
      {
        id: 4,
        name: "Jeans",
        imgUrl: "https://picsum.photos/200?random=4",
        price: 70,
        quantity: 25,
        catId: 2
      },

      {
        id: 5,
        name: "Coffee Mug",
        imgUrl: "https://picsum.photos/200?random=5",
        price: 12,
        quantity: 0,
        catId: 3
      },
      {
        id: 6,
        name: "Notebook",
        imgUrl: "https://picsum.photos/200?random=6",
        price: 8,
        quantity: 100,
        catId: 3
      }
    ];

    this.filteredProducts = this.products
    this.onTotalOrderPriceChanged=new EventEmitter<number>()
  }

  buy(price: number, quantity: string) {
    this.totalOrderPice += price * +quantity
    this.onTotalOrderPriceChanged.emit(this.totalOrderPice)
  }
  ngOnChanges(): void {
    this.filterProductsFun()
  }

  filterProductsFun() {
    if (this.recievedCatId == 0) {
      this.filteredProducts = this.products
    } else {
      this.filteredProducts = this.products.filter((prd) => prd.catId == this.recievedCatId)

    }
  }
}
