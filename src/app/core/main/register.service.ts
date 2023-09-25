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
    const token = this.cookieService.get('csrftoken');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // headers = headers.append('Authorization', 'Bearer ' + token);
    headers = headers.append(
      'Authorization',
      'Basic ' + btoa('admin:123456a*')
    );
    console.log("data=>", data);
    
    return this.http.post(
      'api/registration',
      data,
    //   {
    //     headers,
    //   }
        {
            context: new HttpContext().set(IS_PUBLIC_API, true)
          }
    );
  }
}
