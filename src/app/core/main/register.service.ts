import { HttpClient, HttpContext} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegister } from '../model/register.interface';

import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { IS_PUBLIC_API } from '../app.interceptor';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

   isMenu = false;
   isMenu$ = new BehaviorSubject(true);

  postrRegister(data: IRegister) {
    return this.http.post(
      'post/registration',data,
        {
          context: new HttpContext().set(IS_PUBLIC_API, true)
        }
    );
  }

  getIsMenu(){
    return this.isMenu$
  }

  setIsMenu(value:boolean){
    this.isMenu$.next(value);
  }
}
