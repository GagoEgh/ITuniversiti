import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardService } from "src/app/dashboard/dashboard.services";
import { allGroupsError, allGroupsStart, allGroupsSuccess } from "../action";
import { catchError, map, of, switchMap } from "rxjs";


@Injectable()
export class GroupsEffect{

    constructor(
        private dashboardService:DashboardService,
        private actions:Actions
    ){}

    manager = createEffect(()=>this.actions
    .pipe(
        ofType(allGroupsStart),
        switchMap(()=>{
            return this.dashboardService.getAllGroup()
            .pipe(
                map((res:any)=>{
                    return allGroupsSuccess(res)
                }),
                catchError(()=>of(allGroupsError()))
            )
        })
       
    ))
}
