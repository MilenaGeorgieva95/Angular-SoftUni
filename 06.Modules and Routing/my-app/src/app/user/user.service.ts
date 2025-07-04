import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API = environment.JsonPlaceholderEndpoints.users;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.API);
  }
  getUserById(id: string) {
    return this.http.get<User>(`${this.API}/${id}`);
  }
}
