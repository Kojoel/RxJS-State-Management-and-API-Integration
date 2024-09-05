import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemSubject = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItemSubject.asObservable();

  private totalCartItemsSubject = new BehaviorSubject<number>(0);
  totalCartItems = this.totalCartItemsSubject.asObservable();

  logStuff() {
    console.log("Whatsup?")
    this.cartItemSubject.subscribe(item => console.log(item));
  }


  constructor() { }
}
