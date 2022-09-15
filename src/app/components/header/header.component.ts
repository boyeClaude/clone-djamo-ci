import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isNavigationOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.toggleNavigation();
  }

  toggleNavigation(): void {
    this.isNavigationOpen = !this.isNavigationOpen;
  }

  reloadCurrentPage(): void {
    this.toggleNavigation();
    this.router.navigate(['/home']);
  }
}
