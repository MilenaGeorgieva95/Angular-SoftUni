import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersSubj$$ = new BehaviorSubject<Object | null>(null);
  private usersObs$ = this.usersSubj$$.asObservable();

  constructor(private http: HttpClient) {}

  loadUsers() {
    this.usersSubj$$.next(null);
    return this.http.get('/api/users').subscribe((usersData) => {
      this.usersSubj$$.next(usersData);
    });
  }
}
