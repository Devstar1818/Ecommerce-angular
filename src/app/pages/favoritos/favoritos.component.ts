import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/shared/services/wishlist/wishlist.service';
import { Book } from 'src/app/shared/models/book/book';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
  }

  get wishlist() {
    return this.wishlistService.wishlist;
  }

  btnRemoveFromWishlist(wish:Book) {
    this.wishlistService.removeFromWishlist(wish.id);
  }

}