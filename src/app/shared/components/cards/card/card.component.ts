import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardCapa: string = '';
  @Input() cardTitle: string = '';
  @Input() cardAuthor: string = '';
  @Input() cardPrice: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}