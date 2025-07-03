import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Todo } from '../types/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  API = environment.JsonPlaceholderEndpoints.todos;
  constructor(private http: HttpClient) {}

  fetchTodos() {
    return this.http.get<Todo[]>(this.API);
  }
  completeTodo(todoId: number) {
    return this.http.patch(
      `${this.API}/${todoId}`,
      JSON.stringify({
        completed: true,
      }),
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
  }
}
