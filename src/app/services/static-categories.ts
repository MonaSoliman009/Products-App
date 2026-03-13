import { Injectable } from '@angular/core';
import { ICategory } from '../models/icategory';

@Injectable({
  providedIn: 'root',
})
export class StaticCategories {
  private categories: ICategory[];
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

  getAllCategories():ICategory[]{
    return this.categories
  }
}
