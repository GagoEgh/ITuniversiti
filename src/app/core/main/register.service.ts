import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegister } from '../model/register.interface';
import { IS_PUBLIC_API } from '../../app.interceptor';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  postrRegister(data: IRegister) {
    return this.http.post(
      'registration',data,
        {
          context: new HttpContext().set(IS_PUBLIC_API, true)
        }
    );
  }
}
