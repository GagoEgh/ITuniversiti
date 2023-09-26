import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardService } from "src/app/dashboard/dashboard.services";
import { managerError, managerStart, managerSuccess } from "../action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class ManagerEffect{

    constructor(
        private dashboardService:DashboardService,
        private actions:Actions
    ){}

    manager = createEffect(()=>this.actions
    .pipe(
        ofType(managerStart),
        switchMap(()=>{
            return this.dashboardService.getManager()
            .pipe(
                map((res:any)=>{
                    return managerSuccess(res)
                }),
                catchError(()=>of(managerError()))
            )
        })
       
    ))
}