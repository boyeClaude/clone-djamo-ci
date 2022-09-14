import { Component, Input, OnInit } from '@angular/core';
import { Tarif } from '../../interfaces/tarif.interface';

@Component({
  selector: 'app-card-tarif',
  templateUrl: './card-tarif.component.html',
  styleUrls: ['./card-tarif.component.scss'],
})
export class CardTarifComponent {
  @Input() tarif!: Tarif;
  constructor() {}
}
