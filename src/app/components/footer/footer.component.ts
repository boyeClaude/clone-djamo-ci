import { Component, OnInit } from '@angular/core';
import { COMPANY, DOWNLOAD, FOOTER } from './constants/footer.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  footer = FOOTER;
  company = COMPANY;
  download = DOWNLOAD;

  constructor() {}

  ngOnInit(): void {}
}
