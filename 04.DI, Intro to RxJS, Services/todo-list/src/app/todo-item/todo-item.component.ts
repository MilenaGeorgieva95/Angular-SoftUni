import { Component, Input } from '@angular/core';
import { Todo } from '../types/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input('todoTask') todo: Todo = { task: '', completed: false };
}
