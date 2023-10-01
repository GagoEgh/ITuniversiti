import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardService } from "src/app/dashboard/dashboard.services";
import { UpdateModuleNameAndCountError, UpdateModuleNameAndCountStart, UpdateModuleNameAndCountSuccess, allGroupsError, allGroupsSuccess, updateCourseError, updateCourseStart, updateCourseSuccess } from "../action";
import { catchError, map, of, switchMap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class UpdateModuleNameAndCountEffect{

    constructor(
        private dashboardService:DashboardService,
        private actions:Actions
    ){}

    updateModule = createEffect(()=>this.actions
    .pipe(
        ofType(UpdateModuleNameAndCountStart),
        switchMap((res:any)=>{
            return this.dashboardService.updateModuleNameAndCount(res)
            .pipe(
                map((res:any)=>{
                    return UpdateModuleNameAndCountSuccess(res)
                }),
                catchError((err:HttpErrorResponse)=>of(UpdateModuleNameAndCountError(err.error.errors)))
            )
        })))


        updateSucces = createEffect(
            () =>
              this.actions.pipe(
                ofType(UpdateModuleNameAndCountSuccess),
                switchMap(()=>{
                 
                  return this.dashboardService.getAllGroup()
                  .pipe(
                      map((response:any)=>{
                        return allGroupsSuccess(response)
                      }),
                      catchError(()=>of(allGroupsError()))
                  )
              })),
            {
              dispatch: true,
            }
          );
}