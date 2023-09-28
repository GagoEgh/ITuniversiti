import { HttpClient, HttpContext } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IS_PUBLIC_API } from "../app.interceptor";

@Injectable({
    providedIn:'root'
})
export class DashboardService{
    constructor(
        private http:HttpClient
    ){}


    getProfile(){
        return this.http.get('getProfile',
        {
            context: new HttpContext().set(IS_PUBLIC_API, true)
        })
    }

    getManager(){
        return this.http.get('getManagers',
        {
            context: new HttpContext().set(IS_PUBLIC_API, true)
        })
    }

    getStudents(){
        return this.http.get('getStudents',
        {
            context: new HttpContext().set(IS_PUBLIC_API, true)
        })
    }

    getTeachers(){
        return this.http.get('getTeachers',
        {
            context: new HttpContext().set(IS_PUBLIC_API, true)
        })
    }
}