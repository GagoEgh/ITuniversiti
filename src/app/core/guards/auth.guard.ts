import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
 
  constructor(
    private cookieService:CookieService,
    private router:Router
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    const cookie = this.cookieService.get('csrftoken');
    return cookie?true:this.router.navigate([''])
  }

}