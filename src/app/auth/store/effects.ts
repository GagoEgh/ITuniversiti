import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { loginError, loginStart, loginSucces } from './actions';
import { map, switchMap, tap } from 'rxjs';
import { ILogin } from '../model/login.interface';
import { CookieService } from 'ngx-cookie-service';
import { IRequest } from 'src/app/shared/model/request.interface';

@Injectable()
export class LoginEffect {
  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  loginEffect = createEffect(() =>
    this.actions.pipe(
      ofType(loginStart),
      switchMap((user: ILogin) => {
        return this.authService.postLogin(user).pipe(
          map((res: any) => {
            let keys = Object.keys(res);
            if (keys[0] !== 'token') {
              return loginError(res);
            }
            return loginSucces(res);
          })
        );
      })
    )
  );


  loginSucces = createEffect(
    () =>
      this.actions.pipe(
        ofType(loginSucces),
        tap((res: IRequest) => {
          this.cookieService.set('csrftoken', res.token);
          this.router.navigateByUrl('main');
        })
      ),
    {
      dispatch: false,
    }
  );
}
