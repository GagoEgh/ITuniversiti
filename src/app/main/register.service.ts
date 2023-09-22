import { HttpClient, HttpContext } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IRegister } from "../core/model/register.interface";
import { IS_PUBLIC_API } from "../app.interceptor";

@Injectable({
    providedIn:'root'
})
export class RegisterService{

    constructor(
        private http:HttpClient
    ){}

    postrRegister(data:IRegister){
        return this.http.post('api/registration',data,{
            context: new HttpContext().set(IS_PUBLIC_API, true)
          })
    }

}