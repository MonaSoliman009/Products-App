import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StaticProducts } from '../../services/static-products';
import { IProduct } from '../../models/iproduct';
import { Observable } from 'rxjs';
import { ProductsApi } from '../../services/products-api';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [RouterLink, AsyncPipe, JsonPipe],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  // private activatedRoute = inject(ActivatedRoute)
  @Input() id: string = ''
  private apiProductsSErvice = inject(ProductsApi)
  private cdr = inject(ChangeDetectorRef)

  product$!: Observable<IProduct>

  // product: IProduct | null = {} as IProduct
  ngOnInit(): void {
    console.log(this.id);
    this.product$ = this.apiProductsSErvice.getProductById(this.id)


    // this.id = this.activatedRoute.snapshot.params['id']
    // this.product = this.staticProducts.getProductById(this.id)

    // this.activatedRoute.params.subscribe((newParam) => {
    //   this.id = newParam['id']
    //   this.product = this.staticProducts.getProductById(this.id)
    //   this.cdr.detectChanges()
    // })
  }
}
