import { Component } from '@angular/core';
import { Todo } from './types/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list';
  todos: Todo[] = [
    { task: 'Walk the dog.', completed: false },
    { task: 'Feed the cat.', completed: true },
    { task: 'Wash the dishes.', completed: false },
  ];
}
