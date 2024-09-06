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

  constructor(private cartItems: CartService, private products: ProductService) {}

  productData$ = this.products.getProductData();
  cartItems$ = this.cartItems.totalCartItems$;
  
  addtoCart(product: Product) {
    this.cartItems.addToCart(product);
  }

}
