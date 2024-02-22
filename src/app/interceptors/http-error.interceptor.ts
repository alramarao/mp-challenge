import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export const HttpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(catchError((error) => handleHttpError(error)));
};

const handleHttpError = (error: HttpErrorResponse): Observable<any> => {
  // TODO - log these errors to track it errors laters
  return throwError(() => error);
};
