import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-app';
  user = { name: 'Pesho', age: 23, town: 'Sofia', list: [1, 2, 3, 4, 5, 6, 7] };
  sum(acc: number, curr: number): number {
    return acc + curr;
  }
  // p = new Promise((resolve) => {
  //   setTimeout(() => resolve(111), 2000);
  // });

  // time$ = interval(1000).pipe(map(() => new Date()));

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.loadUsers().subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log('Error from component: ', err),
    });
  }
}
