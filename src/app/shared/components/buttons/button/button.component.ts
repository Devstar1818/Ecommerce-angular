import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  
  @Input() buttonText: string = 'Ver mais';
  @Input() buttonType: string = '';

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
