
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';


@Injectable()
export class ApiPathInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log(environment.apiUrl + request.url);
    const modifiedRequest = request.clone({
      url: environment.apiUrl + request.url
    });
    console.log(modifiedRequest);

    return next.handle(modifiedRequest);
  }
}
