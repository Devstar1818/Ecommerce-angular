import { Component, OnInit } from '@angular/core';
import { BooksDataService } from 'src/app/shared/services/books-data/books-data.service';
import { Book } from 'src/app/shared/models/book/book';

@Component({
  selector: 'app-carousel-new',
  templateUrl: './carousel-new.component.html',
  styleUrls: ['./carousel-new.component.css']
})
export class CarouselNewComponent implements OnInit {

  newBooksList: Array<Book> = [];

  booksList: Array<Book> = [];

  constructor(private booksDataService: BooksDataService) { }

  ngOnInit(): void {
    this.getBooksList();
  }

  getBooksList(): void {
    this.booksDataService.getBooks().subscribe(book => {
      this.booksList = book;
      this.newBooksList = this.booksList.filter((book) => book.new == true);
    })
  }
}
