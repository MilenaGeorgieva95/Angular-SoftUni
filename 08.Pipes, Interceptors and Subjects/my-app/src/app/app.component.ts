import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  user = { name: 'Pesho', age: 23, town: 'Sofia', list: [1, 2, 3, 4, 5, 6, 7] };
  sum(acc: number, curr: number): number {
    return acc + curr;
  }
  p = new Promise((resolve) => {
    setTimeout(() => resolve(111), 2000);
  });
}
