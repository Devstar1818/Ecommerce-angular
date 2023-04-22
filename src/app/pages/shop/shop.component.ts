import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book/book';
import { BooksDataService } from 'src/app/shared/services/books-data/books-data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  genreBooksList: Array<Book> = [];

  booksList: Array<Book> = [];

  constructor(private booksDataService: BooksDataService) { }
  
  ngOnInit(): void {
    this.getBooksList();
  }

  getBooksList(): void {
    this.booksDataService.getBooks().subscribe(book => {
      this.booksList = book;
    })
  }
  
  getQntBooksGenre(genres: string[]) {
    this.genreBooksList = this.booksList.filter(book => genres.includes(book.genre));
    return this.genreBooksList.length;
  }

}
