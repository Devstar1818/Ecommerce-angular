import { Component, Input, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/shared/services/wishlist/wishlist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
  }

  get qntWishesWishlist() {
    return this.wishlistService.wishlist.length;
  }

}
