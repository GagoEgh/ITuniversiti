
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardService } from "src/app/dashboard/dashboard.services";
import { createCourseError, createCourseStart, createCourseSuccess } from "../action";
import { catchError, map, of, switchMap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { CreateCourseInterface } from "../type/createCourse.interface";

@Injectable()
export class CreateCoursesEffect{

    constructor(
        private dashboardService:DashboardService,
        private actions:Actions
    ){}

    manager = createEffect(()=>this.actions
    .pipe(
        ofType(createCourseStart),
        switchMap((res:CreateCourseInterface)=>{
            return this.dashboardService.createCourse(res)
            .pipe(
                map((res:any)=>{
                    return createCourseSuccess(res)
                }),
                catchError((err:HttpErrorResponse)=>of(createCourseError(err.error)))
            )
        })
       
    ))
}