
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { loginError, loginStart, loginSucces } from './actions';
import { map, switchMap, tap } from 'rxjs';
import { ILogin } from '../model/login.interface';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginEffect {
    constructor(
        private actions:Actions,
        private authService:AuthService,
        private router:Router,
        private cookieService: CookieService
    ){}

    loginEffect = createEffect(()=>this.actions
        .pipe(
            ofType(loginStart),
            switchMap((user:ILogin)=>{
                return this.authService.postLogin(user)
                .pipe(
                    map((res:any)=>{
                       
                       let keys =  Object.keys(res);
                     
                       if(keys[0]!=='token'){
                        return loginError(res)
                       }
                       return loginSucces(res)
                    }),
 
                    )
            })
            )
    )


    loginSucces = createEffect(() => this.actions
    .pipe(
      ofType(loginSucces),
      tap((res:any) => {
        this.cookieService.set('token',res.token)
        this.router.navigateByUrl('profile');
      })
    ), {
      dispatch:false
  }
  )
}