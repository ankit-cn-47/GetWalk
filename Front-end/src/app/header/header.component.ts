import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  navToggler = false;
  toggleNav() {
    this.navToggler = !this.navToggler;
  }

}
