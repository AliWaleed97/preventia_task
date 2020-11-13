import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('access_token');
    let apiReq;
    if (!token) apiReq = req.clone();
    else
      apiReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
    return next.handle(apiReq).pipe(
      catchError((response: HttpErrorResponse) => {
        if (response.status === 401) {
          this.router.navigate(['/auth/login']);
        }
        return throwError(response);
      })
    );
  }
}
