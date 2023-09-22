import { createAction, props } from '@ngrx/store';
import { RegisterType } from './type/register.type';
import { IRegister } from '../core/model/register.interface';

//        ----REGISTER-----
export const registerStart = createAction(RegisterType.REGISTER_START,props<IRegister>());
export const registerSuccess = createAction(RegisterType.REGISTER_SUCCESS);
export const registerError = createAction(RegisterType.REGISTER_ERROR);
