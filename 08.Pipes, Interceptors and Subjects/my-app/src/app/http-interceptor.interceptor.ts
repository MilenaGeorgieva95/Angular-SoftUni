import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, EMPTY, Observable, tap, throwError } from 'rxjs';
import { API_URL } from './constants';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  authService = { token: '123' };
  saveToken(event: HttpEvent<any>) {
    sessionStorage.setItem('UserToken', 'event');
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith('/api')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.token}`,
          'Content-Type': 'application/json',
        },
        url: request.url.replace('/api', API_URL),
      });
    }

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && request.url.endsWith('login')) {
          this.saveToken(event);
          console.log(event);
        }
      }),
      catchError((error) => {
        if (error.status === 401) {
          console.log('Error from Interceptor: ', error);
          // this.router.navigate(['/login'])
          return EMPTY;
        }
        // return throwError(error)
        return [error];
      })
    );
  }
}

export const AppInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: HttpInterceptorInterceptor,
};
