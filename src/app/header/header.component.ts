import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navbarItems = [
    { text: 'Coffee' },
    { text: 'Home' },
    { text: 'Coffee' },
    { text: 'Bakery' },
    { text: 'Shop' },
    { text: 'About' },
    { text: 'Login' },
    { text: 'Search' }
  ];
}
