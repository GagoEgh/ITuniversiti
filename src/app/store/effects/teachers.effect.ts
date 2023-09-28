
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardService } from "src/app/dashboard/dashboard.services";
import { teachersError, teachersStart, teachersSuccess } from "../action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class TeachersEffect{

    constructor(
        private dashboardService:DashboardService,
        private actions:Actions
    ){}

    manager = createEffect(()=>this.actions
    .pipe(
        ofType(teachersStart),
        switchMap(()=>{
            return this.dashboardService.getTeachers()
            .pipe(
                map((res:any)=>{
                    console.log(res)
                    return teachersSuccess(res)
                }),
                catchError(()=>of(teachersError()))
            )
        })
       
    ))
}