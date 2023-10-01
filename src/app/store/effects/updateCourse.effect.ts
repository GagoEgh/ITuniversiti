
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardService } from "src/app/dashboard/dashboard.services";
import { updateCourseError, updateCourseStart, updateCourseSuccess } from "../action";
import { catchError, map, of, switchMap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class UpdateCoursesEffect{

    constructor(
        private dashboardService:DashboardService,
        private actions:Actions
    ){}

    manager = createEffect(()=>this.actions
    .pipe(
        ofType(updateCourseStart),
        switchMap((res:any)=>{
            return this.dashboardService.updateCourse(res)
            .pipe(
                map((res:any)=>{
                    return updateCourseSuccess(res)
                }),
                catchError((err:HttpErrorResponse)=>of(updateCourseError(err.error.errors)))
            )
        })
       
    ))
}