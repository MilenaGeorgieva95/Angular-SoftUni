import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'src/app/types/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos() {
    this.todoService.fetchTodos().subscribe((todos) => (this.todos = todos));
  }
  completeTodo(todoId: number) {
    this.todoService
      .completeTodo(todoId)
      .subscribe((todo) => console.log(todo));
    this.todos[todoId-1].completed = true;
  }
}
