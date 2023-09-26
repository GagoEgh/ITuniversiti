import {
  HttpContextToken,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

export const IS_PUBLIC_API = new HttpContextToken<boolean>(() => false);

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  url = 'http://localhost:8000/api/';

  constructor(private cookieService: CookieService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let cloneURL = `${this.url}${req.url}`;
    const token = this.cookieService.get('csrftoken');

    let headers = req.headers;

    if (req.context.get(IS_PUBLIC_API)) {
        
        // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        // // headers = headers.append('Authorization', 'Bearer ' + token);
        // headers = headers.append('Authorization', 'Basic ' + btoa("admin:123456a*"));
        
        // headers = headers.set('Authorization', `Bearer ${token}`);
        headers = headers.set('Authorization', `Basic ${btoa("admin:123456a*")}`);
        headers = headers.set('Content-Type', `application/json`);
    }

    const cloneRequest = req.clone({
      url: cloneURL,
      headers: headers,
    });

    return next.handle(cloneRequest);
  }
}
