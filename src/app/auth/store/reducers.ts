import { createReducer, on } from '@ngrx/store';
import { ILogin } from '../model/login.interface';
import { IAuthState } from '../model/authState.interfact';
import { loginError, loginStart, loginSucces } from './actions';
import { IRequest } from './../../shared/model/request.interface';



const authState:IAuthState = {
    isLoad:false,
    login:null,
    request:null
}

export const loginReducer = createReducer(
    authState,
    on(loginStart,(state:IAuthState)=>({...state,isLoad:true})),
    on(loginSucces,(state:IAuthState,action)=>({...state,isLoad:false,request:action})),
    on(loginError,(state:IAuthState,action)=>({...state,isLoad:false,request:action}))
    )
