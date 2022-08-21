import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-step-card',
  templateUrl: './step-card.component.html',
  styleUrls: ['./step-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepCardComponent implements OnInit {
  @Input() stepImage!: string;
  @Input() stepNumber!: number;
  @Input() stepLabel!: string;

  constructor() {}

  ngOnInit(): void {
    console.log('On init');
  }
}
