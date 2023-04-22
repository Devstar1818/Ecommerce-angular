import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-sale',
  templateUrl: './card-sale.component.html',
  styleUrls: ['./card-sale.component.css']
})

export class CardSaleComponent implements OnInit {

  @Input() cardSaleCover: string = '';
  @Input() cardSaleDiscountPercent: string = '';
  @Input() cardSaleTitle: string = '';
  @Input() cardSaleAuthor: string = '';
  @Input() classRating: string = '';
  @Input() cardSaleDescription: string = '';
  @Input() cardSaleOldPrice: string = '';
  @Input() cardSalePrice: string = '';
  @Input() cardSaleCardDiscountParcel: string = '';
  @Input() cardSaleCardDiscountValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
