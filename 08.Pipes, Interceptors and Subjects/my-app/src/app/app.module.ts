import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReducerPipe } from './reducer.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AppInterceptorProvider } from './http-interceptor.interceptor';

@NgModule({
  declarations: [AppComponent, ReducerPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AppInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
