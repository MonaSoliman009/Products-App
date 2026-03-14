import { AfterViewInit, Component, ElementRef, EventEmitter, inject, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { ShortenPipe } from '../../pipes/shorten-pipe';
import { Router, RouterLink } from '@angular/router';
import { ProductsApi } from '../../services/products-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [FormsModule, Highlight, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe,
    CurrencyPipe, DecimalPipe, ShortenPipe, RouterLink,AsyncPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnChanges, AfterViewInit, OnInit {
  @Input('sentSelectedCatId') recievedCatId: number = 0
  @Output() onTotalOrderPriceChanged: EventEmitter<number>;
  @ViewChild('prdImg') productImgEle!: ElementRef
  private apiProductsService = inject(ProductsApi)
  private router = inject(Router)
  products$!: Observable<IProduct[]>
  products: IProduct[] = []
  filteredProducts: IProduct[] = []
  totalOrderPice: number = 0
  date = new Date()
  num: number = 123.879
  classes = 'text-center bg-danger'
  classes2 = 'border border-1'
  // constructor(private staticProductsService:StaticProducts) {
  constructor() {
    // this.products = this.staticProductsService.getAllProducts()

    // this.filteredProducts = this.products
    this.onTotalOrderPriceChanged = new EventEmitter<number>()
    this.products$ = this.apiProductsService.getAllProducts()

  }

  ngOnInit(): void {
    // this.apiProductsService.getAllProducts().subscribe((res)=>{
    //   this.products=this.filteredProducts=res
    //    console.log(this.filteredProducts);

    // })
  }

  buy(price: number, quantity: string) {
    this.totalOrderPice += price * +quantity
    this.onTotalOrderPriceChanged.emit(this.totalOrderPice)
  }
  ngOnChanges(): void {
    // this.filteredProducts = this.staticProductsService.getProductsByCatId(this.recievedCatId)
  }
  ngAfterViewInit(): void {
    console.log(this.productImgEle.nativeElement.src);

  }

  navigateToDetails(id: number) {
    //  this.router.navigate(['/details',id])
    this.router.navigateByUrl(`/details/${id}`)
  }

}
