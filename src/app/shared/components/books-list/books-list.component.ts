import { Component, OnInit } from '@angular/core';
import { BooksDataService } from '../../services/books-data/books-data.service';
import { Book } from '../../models/book/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

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
}