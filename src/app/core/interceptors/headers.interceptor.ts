import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpHandler,
  HttpInterceptor, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authRequest = req.clone(
      {
        headers: req.headers
          .set('Content-Type', 'application/json')
      });
    return next.handle(authRequest);
  }

}
