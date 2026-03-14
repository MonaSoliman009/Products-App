import { Component, inject } from '@angular/core';
import { CategoriesApi } from '../../services/categories-api';
import { Observable } from 'rxjs';
import { ICategory } from '../../models/icategory';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { ProductsApi } from '../../services/products-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [AsyncPipe, FormsModule, JsonPipe],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  private categoriesService = inject(CategoriesApi)
  private productsApiService = inject(ProductsApi)
  private router = inject(Router)

  categories$: Observable<ICategory[]> = this.categoriesService.getAllCategories()
  product: IProduct = {} as IProduct

  addNewProduct() {
    console.log(this.product);

    // this.productsApiService.addNewProduct(this.product).subscribe((res) => {
    //   this.router.navigateByUrl('/order')
    // })

    this.productsApiService.addNewProduct(this.product).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/order')
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
}
