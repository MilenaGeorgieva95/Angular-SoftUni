import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Todo } from '../types/todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  @Input('todos') todosData: Todo[] = [];
}
