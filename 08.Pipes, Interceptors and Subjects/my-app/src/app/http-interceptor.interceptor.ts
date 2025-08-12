import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { API_URL } from './constants';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith('/api')) {
      request = request.clone({
        url: request.url.replace('/api', API_URL),
      });
    }

    return next.handle(request).pipe(
      tap((req) => {
        if (req instanceof HttpRequest) {
          console.log(req);
        }
      }),
      catchError((error) => {
        if (error.status === 0) {
          console.log(error);
          return EMPTY;
        }
        return error;
      })
    );
  }
}

export const AppInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: HttpInterceptorInterceptor,
};
