
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardService } from "src/app/dashboard/dashboard.services";
import { allCourseError, allCourseStart, allCourseSuccess } from "../action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class CoursesEffect{

    constructor(
        private dashboardService:DashboardService,
        private actions:Actions
    ){}

    manager = createEffect(()=>this.actions
    .pipe(
        ofType(allCourseStart),
        switchMap(()=>{
            return this.dashboardService.getAllCourse()
            .pipe(
                map((res:any)=>{
                    return allCourseSuccess(res)
                }),
                catchError(()=>of(allCourseError()))
            )
        })
       
    ))
}