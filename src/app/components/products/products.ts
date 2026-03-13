import { AfterViewInit, Component, ElementRef, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { ShortenPipe } from '../../pipes/shorten-pipe';
import { StaticProducts } from '../../services/static-products';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [FormsModule, Highlight, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe,
    CurrencyPipe, DecimalPipe, ShortenPipe, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnChanges, AfterViewInit {
  @Input('sentSelectedCatId') recievedCatId: number = 0
  @Output() onTotalOrderPriceChanged: EventEmitter<number>;
  @ViewChild('prdImg') productImgEle!: ElementRef
  private staticProductsService = inject(StaticProducts)
  private router = inject(Router)

  products: IProduct[]
  filteredProducts: IProduct[]
  totalOrderPice: number = 0
  date = new Date()
  num: number = 123.879
  classes = 'text-center bg-danger'
  classes2 = 'border border-1'
  // constructor(private staticProductsService:StaticProducts) {
  constructor() {

    this.products = this.staticProductsService.getAllProducts()

    this.filteredProducts = this.products
    this.onTotalOrderPriceChanged = new EventEmitter<number>()
  }

  buy(price: number, quantity: string) {
    this.totalOrderPice += price * +quantity
    this.onTotalOrderPriceChanged.emit(this.totalOrderPice)
  }
  ngOnChanges(): void {
    this.filteredProducts = this.staticProductsService.getProductsByCatId(this.recievedCatId)
  }
  ngAfterViewInit(): void {
    console.log(this.productImgEle.nativeElement.src);

  }

  navigateToDetails(id:number) {
    //  this.router.navigate(['/details',id])
    this.router.navigateByUrl(`/details/${id}`)
  }

}
