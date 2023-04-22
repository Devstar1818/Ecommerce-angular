import { Injectable } from '@angular/core';
import { Book } from '../../models/book/book';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlist: Array<Book> = [];

  constructor() { }
  
  addToWishlist(book: Book) {
    this.wishlist = [...this.wishlist, book];
  }

  removeFromWishlist(bookId: string) {
    this.wishlist = [...this.wishlist.filter(book => 
      book.id != bookId
    )]
  }

  checkIfIncludedInWishlist(bookId: string): boolean {
    return this.wishlist.some(book =>
     book.id === bookId
    )
  }

}