import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticProducts } from '../../services/static-products';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  private activatedRoute = inject(ActivatedRoute)
  private staticProducts = inject(StaticProducts)
  id: string = ''
  product: IProduct|null = {} as IProduct
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.product = this.staticProducts.getProductById(this.id)
  }
}
