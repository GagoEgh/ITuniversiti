import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RegisterService } from '../../main/register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private router:Router,
    private cookieService: CookieService,
    private registerService:RegisterService
  ){ }

  signup(){
    this.cookieService.delete('csrftoken', '/');
    this.router.navigate([''])
  }

  isMenu = true;
  openMenu(){
    this.isMenu = !this.isMenu;
    this.registerService.setIsMenu(this.isMenu)
  }
}
