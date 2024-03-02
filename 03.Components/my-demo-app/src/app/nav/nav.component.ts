import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: '<div id="nav-wrapper">Hello nav {{title}}</div>',
  styles: ['#nav-wrapper: {background-color: pink;}'],
})
export class NavComponent {
  title = 'my title';
}
