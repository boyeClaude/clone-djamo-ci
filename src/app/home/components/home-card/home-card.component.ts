import { Component, Input, OnInit } from '@angular/core';
import { CardItem } from '../../interfaces/card-item.interface';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent {
  @Input() img!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() items!: CardItem[];
  @Input() isWithoutFee!: boolean;

  constructor() {}
}
