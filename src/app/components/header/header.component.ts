import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isNavigationOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.toggleNavigation();
  }

  toggleNavigation(): void {
    this.isNavigationOpen = !this.isNavigationOpen;
  }
}
