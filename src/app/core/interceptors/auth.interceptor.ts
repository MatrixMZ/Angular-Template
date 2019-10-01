import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = request.clone({
      headers: request.headers.set('Content-Type', 'application/json')
    });

    return next.handle(modifiedRequest);
  }
}
