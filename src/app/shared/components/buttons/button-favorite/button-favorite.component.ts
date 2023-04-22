import { Component, OnInit, Input} from '@angular/core';
import { WishlistService } from 'src/app/shared/services/wishlist/wishlist.service';
import { Book } from 'src/app/shared/models/book/book';

@Component({
  selector: 'app-button-favorite',
  templateUrl: './button-favorite.component.html',
  styleUrls: ['./button-favorite.component.css']
})
export class ButtonFavoriteComponent implements OnInit {

  private _book = {} as Book;

  @Input()
  set book(book:Book) {
    this._book = {...book};
    this.addedToWishlist =  this.wishlistService.checkIfIncludedInWishlist(book.id);
  }

  get book() {
    return this._book;
  }

  addedToWishlist: boolean = false;

  title: string = 'Adicionar aos favoritos';

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
  }

  toggleBtnWishlist(){
    this.addedToWishlist = !this.addedToWishlist;

    if (this.addedToWishlist) {
      this.title = 'Adicionado aos favoritos!';
      this.wishlistService.addToWishlist(this.book);
    }
    else {
      this.title = 'Adicionar aos favoritos';
      this.wishlistService.removeFromWishlist(this.book.id);
    }
  }

}
