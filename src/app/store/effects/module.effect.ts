
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardService } from "src/app/dashboard/dashboard.services";
import { allCourseError, allCourseStart, allCourseSuccess, moduleByCourseIdStart, moduleByCourseIdSuccess } from "../action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class ModuleEffect{

    constructor(
        private dashboardService:DashboardService,
        private actions:Actions
    ){}

    manager = createEffect(()=>this.actions
    .pipe(
        ofType(moduleByCourseIdStart),
        switchMap((res:any)=>{
            return this.dashboardService.getModuleByCourseId(res[0])
            .pipe(
                map((res:any)=>{
                    return moduleByCourseIdSuccess(res)
                }),
                catchError(()=>of(allCourseError()))
            )
        })
       
    ))
}