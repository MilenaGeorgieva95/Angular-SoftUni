import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from "./core/core.module";
import { UserModule } from './user/user.module';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    CoreModule,
    UserModule, 
    HttpClientModule,
    TodoModule
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
