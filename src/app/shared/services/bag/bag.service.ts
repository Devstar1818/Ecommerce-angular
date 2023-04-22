import { Injectable } from '@angular/core';
import { Book } from '../../models/book/book';


@Injectable({
  providedIn: 'root'
})
export class BagService {

  bag: Array<Book> = [];

  constructor() { }

}

