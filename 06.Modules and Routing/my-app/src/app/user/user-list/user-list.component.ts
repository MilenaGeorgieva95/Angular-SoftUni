import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  isLoading: boolean = false;
  users: User[] = [];

  constructor(
    private userService: UserService,
    public globalLoaderService: GlobalLoaderService
  ) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.globalLoaderService.showLoader();
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.globalLoaderService.hideLoader();
    });
  }
}
