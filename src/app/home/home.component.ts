import { Component, OnInit } from '@angular/core';
import {
  CARD_WITHOUT_FEES,
  INSTRUCTIONS,
  KEEP_CONTROL,
  STEP_ACCOUNT,
} from './constants/step.account';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  steps = STEP_ACCOUNT;
  instructions = INSTRUCTIONS;
  cardWithoutFee = CARD_WITHOUT_FEES;
  keepControl = KEEP_CONTROL;

  constructor() {}
}
