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
    return this.http.post(`api/login/`,user)
  }
}
