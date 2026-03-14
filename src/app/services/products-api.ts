import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsApi {
  private httpClient = inject(HttpClient)
  private apiUrl = `${environment.baseUrl}/products`
  // constructor(private httpClient:HttpClient){}

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.apiUrl
    //   ,{
    //   headers:{
    //     'Authorization':'4545ewfef'
    //   },
    //   params:{
    //     quantity:5
    //   }
    // }
  )
  }

  getProductById(id:string):Observable<IProduct>{
   return this.httpClient.get<IProduct>(`${this.apiUrl}/${id}`)
  }

  getProductsByCatId(catId:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${this.apiUrl}?catId=${catId}`)
  }

  addNewProduct(product:IProduct):Observable<IProduct>{
   return this.httpClient.post<IProduct>(this.apiUrl,JSON.stringify(product))
  }
}
