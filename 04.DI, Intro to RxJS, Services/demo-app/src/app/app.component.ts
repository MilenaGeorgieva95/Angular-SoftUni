import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

import { User } from './types/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'demo-app';
  appUsers: User[] = [];
  constructor(public userService: UserService) {}

  setUsers(inputName: string, inputAge: string) {
    this.userService.addUser(inputName, inputAge);
    //additional functionality like data validation or transformation
  }

  ngOnInit(): void {
    const usersData = this.userService.getUsers();
    usersData.then((data) => {
      console.log(data);
    });
  }

  // users: User[] = [
  //   { name: 'Pesho', age: 20 },
  //   { name: 'John', age: 21 },
  //   { name: 'Mary', age: 18 },
  //   { name: 'Susan', age: 23 },
  // ];

  // constructor() {
  //   setTimeout(() => {
  //     this.title = 'Title changed by Angular!';
  //   }, 3000);
  // }

  //Switch on manually change detection with ChangeDetectorRef

  // constructor(private changeDetection: ChangeDetectorRef) {
  // setTimeout(() => {
  //   this.title = 'Changed by Change Detector!';
  //   this.changeDetection.detectChanges();
  // }, 3000);
  // }

  // addUser(name: string, age: string): void {
  //   const tempUser: User = { name, age: Number(age) };
  //doesn't render again
  // this.users.push(tempUser);
  //renders again, reference changed
  // this.users = [...this.users, tempUser];
  // }
}
