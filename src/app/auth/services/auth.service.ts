import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../model/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    private http:HttpClient
  ) { }

  postLogin(user:ILogin){
    console.log("===>", user);
    
    return this.http.post(`post/login`,user)
  }
}
