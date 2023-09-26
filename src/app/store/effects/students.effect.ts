import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardService } from "src/app/dashboard/dashboard.services";
import { studentsError, studentsStart, studentsSuccess } from "../action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class StudentsEffect{

    constructor(
        private dashboardService:DashboardService,
        private actions:Actions
    ){}

    manager = createEffect(()=>this.actions
    .pipe(
        ofType(studentsStart),
        switchMap(()=>{
            return this.dashboardService.getStudents()
            .pipe(
                map((res:any)=>{
                    return studentsSuccess(res)
                }),
                catchError(()=>of(studentsError()))
            )
        })
       
    ))
}