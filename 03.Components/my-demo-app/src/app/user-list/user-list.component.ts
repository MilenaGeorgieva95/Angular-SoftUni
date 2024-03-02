import { Component } from '@angular/core';

type User = {
  name: string;
  age: number;
  status?: string;
};

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  isToggle: boolean = false;
  users = [
    { name: 'Todor', age: 18, status: 'green' },
    { name: 'John', age: 20, status: 'red' },
    { name: 'Mary', age: 23, status: 'shiny' },
    { name: 'George', age: 21 },
    { name: 'Susan', age: 28, status: 'green' },
  ] as User[];

  handleClick(event: Event) {
    console.log('clicked ', event);
    this.isToggle = !this.isToggle;
    console.log(this.isToggle);
  }
}
