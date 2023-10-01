import { HttpClient, HttpContext } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IS_PUBLIC_API } from "../core/app.interceptor";
import { CreateCourseInterface } from "../store/type/createCourse.interface";
import { CreateGroupInterface } from "../store/type/createGroupe.interface";
import { CourseInterface } from "../store/type/course.interface";
import { UpdateModuleInterface } from "./type/updateModule.interface";
import { of } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class DashboardService{
    constructor(
        private http:HttpClient
    ){}


    getProfile(){
        return this.http.get('get/getProfile',
        {
            context: new HttpContext().set(IS_PUBLIC_API, true)
        })
    }

    getManager(){
        return this.http.get('get/getManagers',
        {
            context: new HttpContext().set(IS_PUBLIC_API, true)
        })
    }

    getStudents(){
        return this.http.get('get/getStudents',
        {
            context: new HttpContext().set(IS_PUBLIC_API, true)
        })
    }

    getTeachers(){
        return this.http.get('get/getTeachers',
        {
            context: new HttpContext().set(IS_PUBLIC_API, true)
        })
    }

    getAllCourse(){
        return this.http.get('get/getAllCourse',
        {
            context: new HttpContext().set(IS_PUBLIC_API, true)
        })
    }

    getModuleByCourseId(id:string){
        return this.http.get(`get/getModuleByCourseId/${id}`,
        {
            context: new HttpContext().set(IS_PUBLIC_API, true)
        })
    }

    createCourse(date:CreateCourseInterface){
        return this.http.post('post/createCourse',date,
        {
            context: new HttpContext().set(IS_PUBLIC_API, true)
        })
    }

    createGroup(data:CreateGroupInterface){
        return this.http.post('post/createGroup',data,  {
            context: new HttpContext().set(IS_PUBLIC_API, true)
        })
    }

    createModule(date:any){
        return this.http.post('post/createModule',date,
        {
            context: new HttpContext().set(IS_PUBLIC_API, true)
        })
    }

    updateCourse(date:CourseInterface){
        return this.http.put(`put/updateCourse/${date.id}`,{name:date.name},
        {
            context: new HttpContext().set(IS_PUBLIC_API, true)
        })
    }

    getAllGroup(){
        return this.http.get(`get/getAllGroup`,  {
            context: new HttpContext().set(IS_PUBLIC_API, true)
        })
    }


    updateModuleNameAndCount(date:UpdateModuleInterface){
        let {name,count}=date;
        if(date.moduleId){
            return this.http.put(`put/updateModuleNameAndCount/${date?.moduleId}`,{name:name,count:count},
            {
                context: new HttpContext().set(IS_PUBLIC_API, true)
            })
        }

        return of()
    
    }
}