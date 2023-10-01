
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardService } from "src/app/dashboard/dashboard.services";
import { createModuleError, createModuleStart, createModuleSuccess } from "../action";
import { catchError, map, of, switchMap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { CreateModuleInterface } from "../type/createModule.interface";

@Injectable()
export class CreateModuleEffect{

    constructor(
        private dashboardService:DashboardService,
        private actions:Actions
    ){}

    manager = createEffect(()=>this.actions
    .pipe(
        ofType(createModuleStart),
        switchMap((res:CreateModuleInterface)=>{
            return this.dashboardService.createModule(res)
            .pipe(
                map((res:any)=>{
                    return createModuleSuccess(res)
                }),
                catchError((err:HttpErrorResponse)=>of(createModuleError(err.error)))
            )
        })
       
    ))
}