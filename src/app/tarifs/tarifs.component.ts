import { Component, OnInit } from '@angular/core';
import { HERO_SECTION } from './constants';

@Component({
  selector: 'app-tarifs',
  templateUrl: './tarifs.component.html',
  styleUrls: ['./tarifs.component.scss'],
})
export class TarifsComponent {
  hero = HERO_SECTION;
  premium: boolean = false;
  constructor() {}
}
