import { JwtManager } from './jwt-manager.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: JwtManager) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: this.auth.getJwt() || ''
      }
       , url: (request.url.indexOf('/api') === 0 ? 'http://localhost:3000' : '') + request.url
    });

    return next.handle(request);
  }
}
