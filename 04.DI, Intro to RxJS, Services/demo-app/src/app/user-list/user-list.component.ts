import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { User } from '../types/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UserService],
})
export class UserListComponent {
  @Input('users') userListData: User[] = [];

  constructor(private cd: ChangeDetectorRef) {
    // setTimeout(() => {
    //   this.cd.detectChanges();
    // }, 3000);
    // setInterval(() => {
    //   this.cd.detectChanges();
    //   console.log('changed');
    // }, 3000);
  }

  onRefresh() {
    this.cd.detectChanges();
    console.log('refresh');
  }
}
