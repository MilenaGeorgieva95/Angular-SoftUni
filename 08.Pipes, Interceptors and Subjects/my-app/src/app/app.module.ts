import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReducerPipe } from './reducer.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AppInterceptorProvider } from './http-interceptor.interceptor';
import { LazyComponent } from './lazy/lazy/lazy.component';
import { HomeComponent } from './home/home.component';
import { SubjectsComponent } from './subjects/subjects.component';

@NgModule({
  declarations: [AppComponent, ReducerPipe, LazyComponent, HomeComponent, SubjectsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AppInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
