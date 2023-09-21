import { createAction, props } from '@ngrx/store';
import { AuthType } from './aut.type';
import {ILogin} from '../model/login.interface'
import { IRequest } from 'src/app/shared/model/request.interface';



export const loginStart = createAction(AuthType.LOGIN_START,props<ILogin>());
export const loginSucces = createAction(AuthType.LOGIN_SUCCESS,props<IRequest>());
export const loginError = createAction(AuthType.LOGIN_ERROR,props<IRequest>());