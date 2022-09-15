import { Component, OnInit } from '@angular/core';
import { BOTTOM_CONTENT, TOP_CONTENT } from './constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  topContent = TOP_CONTENT;
  bottomContent = BOTTOM_CONTENT;

  constructor() {}
}
