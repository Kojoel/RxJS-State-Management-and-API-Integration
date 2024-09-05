import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartService } from './services/cart.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RxJS-State-Management-and-API-Integration';

  constructor(private cartItems: CartService,) {}

  ngOnInit() {
    this.cartItems.logStuff();
  }
}
