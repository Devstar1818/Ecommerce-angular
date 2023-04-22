import { Component, OnInit, Input } from '@angular/core';
import { BagService } from '../../services/bag/bag.service';
import { Book } from '../../models/book/book';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {

  qntInput!: {[bookId: string]: number};

  book = {} as Book;

  constructor(private bagService:BagService) { }

  ngOnInit(): void {
  }

  get qntProductsBag() {
    return this.bagService.bag.length;
  }

  get bag() {
    return this.bagService.bag;
  }

}