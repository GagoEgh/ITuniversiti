import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardService } from "src/app/dashboard/dashboard.services";
import { profileError, profileStart, profileSuccess } from "../action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class ProfileEffects{
    constructor(
        private dashboardService:DashboardService,
        private actions:Actions
    ){}

    profile = createEffect(
        ()=> this.actions
        .pipe(
            ofType(profileStart),
            switchMap(()=>{
                return this.dashboardService.getProfile()
                .pipe(
                    map((response:any)=>{
                        return profileSuccess(response.user)
                    },
                    catchError(()=>of(profileError()))
                    )
                )
            })
            )
    )
}