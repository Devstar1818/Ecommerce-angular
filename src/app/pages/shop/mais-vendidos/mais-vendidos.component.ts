import { Component, OnInit } from '@angular/core';
import { BooksDataService } from 'src/app/shared/services/books-data/books-data.service';
import { Book } from 'src/app/shared/models/book/book';

@Component({
  selector: 'app-mais-vendidos',
  templateUrl: './mais-vendidos.component.html',
  styleUrls: ['./mais-vendidos.component.css']
})
export class MaisVendidosComponent implements OnInit {

  popularBooksList: Array<Book> = [];

  booksList: Array<Book> = [];

  constructor(private booksDataService: BooksDataService) { }

  ngOnInit(): void {
    this.getPopularBooksList();
  }

  getPopularBooksList(): void {
    this.booksDataService.getBooks().subscribe(book => {
      this.booksList = book;
      this.popularBooksList = this.booksList.filter((book) => book.popular == true);
    })
  }
}
