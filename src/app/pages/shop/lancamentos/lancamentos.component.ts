import { Component, OnInit } from '@angular/core';
import { BooksDataService } from 'src/app/shared/services/books-data/books-data.service';
import { Book } from 'src/app/shared/models/book/book';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit {

  newBooksList: Array<Book> = [];

  booksList: Array<Book> = [];

  constructor(private booksDataService: BooksDataService) { }

  ngOnInit(): void {
    this.getNewBooksList();
  }

  getNewBooksList(): void {
    this.booksDataService.getBooks().subscribe(book => {
      this.booksList = book;
      this.newBooksList = this.booksList.filter((book) => book.new == true);
    })
  }
}