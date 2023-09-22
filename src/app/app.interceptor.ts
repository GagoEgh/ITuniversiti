import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

export const IS_PUBLIC_API = new HttpContextToken<boolean>(() => false);

@Injectable()
export class AppInterceptor implements HttpInterceptor{
    url='http://localhost:8000/';

    constructor(
        private cookieService: CookieService,
      
    ){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let cloneURL = `${this.url}${req.url}`;
        const token  = this.cookieService.get('csrftoken');
        let headers = req.headers;

        if (req.context.get(IS_PUBLIC_API)) {
            headers = headers.set('X-CSRFToken', `${token}`);
        }

        const cloneRequest = req.clone({
            url: cloneURL,
            headers:headers
        })
      
        return next.handle(cloneRequest);

    }
    
}