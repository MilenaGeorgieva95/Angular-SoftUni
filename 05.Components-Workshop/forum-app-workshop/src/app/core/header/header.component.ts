import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLoggedIn = false;
  loginUser():void {
    this.isLoggedIn = true;
  }
  logoutUser():void {
    this.isLoggedIn = false;
  }
}
