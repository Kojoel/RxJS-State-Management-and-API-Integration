import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../model/product.model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  subscribe() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  private productUrl = '../assets/data/data.json'

  getProductData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API request failed:', error.message);
    return throwError('Failed to fetch product data. Please try again later.');
  }



}
