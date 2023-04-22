import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() placeHolder: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    console.log();
  }

}
