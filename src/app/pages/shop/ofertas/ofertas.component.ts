import { Component, OnInit, Input } from '@angular/core';
import { BooksDataService } from 'src/app/shared/services/books-data/books-data.service';
import { Book } from 'src/app/shared/models/book/book';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  saleBooksList: Array<Book> = [];

  booksList: Array<Book> = [];

  @Input() cardSaleDiscountPercent: string = '';
  @Input() cardSalePrice: string = '';
  @Input() cardSaleCardDiscountParcel: string = '';
  @Input() cardSaleCardDiscountValue: string = '';

  constructor(private booksDataService: BooksDataService) { }

  ngOnInit(): void {
    this.getPopularBooksList();
  }

  getPopularBooksList(): void {
    this.booksDataService.getBooks().subscribe(book => {
      this.booksList = book;
      this.saleBooksList = this.booksList.filter((book) => book.promotion == true);
    })
  }

}
