import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'todo', component: TodoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
