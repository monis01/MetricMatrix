
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, catchError, map, throwError } from "rxjs";

@Injectable()
export class HTTPInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request)
    .pipe(map(this.responseHandle.bind(this, request)), catchError(this.handleResponseError.bind(this, request)));
      
  }

  private responseHandle(request: HttpRequest<any>, event: HttpEvent<any>): HttpEvent<any> {
  
    return event;
  }

  private handleResponseError(request: any, errorResponse: HttpErrorResponse, caught: any) {
    const error = errorResponse?.error;
    const errorStatus = errorResponse.status;
    return throwError(() => { 
      return { status: errorResponse.status, message: errorResponse.message, serverErrorObj: errorResponse.error?.errors? errorResponse.error?.errors[0] : {}}
  });
}

 
}