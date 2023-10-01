
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardService } from "src/app/dashboard/dashboard.services";
import {  createGroupError, createGroupStart, createGroupSuccess } from "../action";
import { catchError, map, of, switchMap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { CreateGroupInterface } from "../type/createGroupe.interface";

@Injectable()
export class CreateGroupEffect{

    constructor(
        private dashboardService:DashboardService,
        private actions:Actions
    ){}

    manager = createEffect(()=>this.actions
    .pipe(
        ofType(createGroupStart),
        switchMap((res:CreateGroupInterface)=>{
            return this.dashboardService.createGroup(res)
            .pipe(
                map((res:any)=>{
                    return createGroupSuccess(res)
                }),
                catchError((err:HttpErrorResponse)=>of(createGroupError(err.error)))
            )
        })
       
    ))
}