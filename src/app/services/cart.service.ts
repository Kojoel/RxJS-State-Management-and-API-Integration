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
  totalCartItems$ = this.totalCartItemsSubject.asObservable();

  addToCart(product: Product) {
    const currentCart = this.cartItemSubject.value;
    const updatedCart = [...currentCart, product];
    this.cartItemSubject.next(updatedCart);
    this.updateTotalItems(updatedCart);
  }

  // removeFromCart(product: Product) {
  //   const currentCart = this.cartItemSubject.value;
  //   const updatedCart = currentCart.filter(item => item.id !== product.id);
  //   this.cartItemSubject.next(updatedCart);
  //   this.updateTotalItems(updatedCart);
  // }

  clearCart() {
    this.cartItemSubject.next([]);
    this.updateTotalItems([]);
  }

  updateTotalItems(cartItems: Product[]) {
    const totalItems = cartItems.length;
    this.totalCartItemsSubject.next(totalItems);
  }

  constructor() { }
}
