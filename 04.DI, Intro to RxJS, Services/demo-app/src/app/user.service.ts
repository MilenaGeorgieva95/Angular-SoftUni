import { Injectable, OnDestroy } from '@angular/core';
import { User } from './types/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  users: User[] = [
    { name: 'Pesho', age: 20 },
    { name: 'John', age: 21 },
    { name: 'Mary', age: 18 },
    { name: 'Susan', age: 23 },
  ];

  addUser(name: string, age: string): void {
    const tempUser: User = { name, age: Number(age) };
    this.users.push(tempUser);
  }

  getUsers() {
    return fetch('http://jsonplaceholder.typicode.com/users').then((res) =>
      res.json()
    );
  }

  ngOnDestroy(): void {
    //clear terminal, detach from event, cancel requests with observables
  }
}

// @Injectable()
// export class PostsService {
//   constructor(private http: HttpClient) {}

//   getAllPosts(): Observable<Post[]> {
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     return this.http.get<Post[]>(url);
//   }
// }
