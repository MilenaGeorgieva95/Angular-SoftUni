import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-demo-app';
  colorValueForPlayground = 'pink';

  parentFnOnEmit(inputValue: string) {
    console.log('From parent : ', inputValue);
  }
}
