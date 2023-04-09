import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root', //esto significa que esta disponible para toda la app, sino esta aca, debe estar en el app.module en el apartado de providers
})
export class ProductsService {
  //products = Product[];
  private apiURL = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    console.log(this.apiURL);

    console.log(this.http.get<Product[]>(this.apiURL));
    return this.http.get<Product[]>(this.apiURL);
  }
}
