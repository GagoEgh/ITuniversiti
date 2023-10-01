import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RegisterService } from "src/app/core/main/register.service";
import { registerError, registerStart, registerSuccess } from "../action";
import { catchError, map, of, switchMap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { IRegister } from "src/app/core/model/register.interface";


@Injectable()
export class RegisterEffect{
    constructor(
        private registerService:RegisterService,
        private actions:Actions,
    ){}

    register = createEffect(()=>this.actions.pipe(
        ofType(registerStart),
        switchMap((request:IRegister)=>{
            return this.registerService.postrRegister(request)
            .pipe(
                map((response:any)=>{
                return registerSuccess(response)
                }),
                catchError((error:HttpErrorResponse )=>{
                    let errObj = error.error.errors;
                    let errorMsg = '';
                    for(let key in errObj){
                        errorMsg = `${key}-${errObj[key]}`;
                    }
                    errObj = null 
                    return of(registerError({msg:errorMsg}))
                })
            )
        })
    ))
}