import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product.model';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  constructor(public cartItems: CartService, private products: ProductService) {
    // cartItems.cartItemSubject.subscribe(item => console.log(item));
  }

  productData$ = this.products.getProductData();
  cartItems$ = this.cartItems.totalCartItems$;

  addtoCart(product: Product) {
    this.cartItems.addToCart(product);
  }

  removeFromCart(product: Product) {
    this.cartItems.removeFromCart(product);
  }

}
