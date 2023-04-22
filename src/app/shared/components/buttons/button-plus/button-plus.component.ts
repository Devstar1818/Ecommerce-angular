import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book/book';

@Component({
  selector: 'app-button-plus',
  templateUrl: './button-plus.component.html',
  styleUrls: ['./button-plus.component.css']
})
export class ButtonPlusComponent implements OnInit {

  book = {} as Book;

  constructor() { }

  ngOnInit(): void {
  }

}
